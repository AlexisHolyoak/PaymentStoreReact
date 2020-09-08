import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCourses, saveCourse } from "../../redux/actions/courseActions";
import { getProfessors } from "../../redux/actions/professorActions";
import PropTypes from "prop-types";
import CourseForm from "./CourseForm";
import { newCourse } from "../../../tools/mockData";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

export function ManageCoursePage({
  courses,
  professors,
  getProfessors,
  getCourses,
  saveCourse,
  history,
  ...props
}) {
  const [course, setCourse] = useState({ ...props.course });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (courses.length === 0) {
      getCourses().catch(error => {
        alert("Loading courses failed" + error);
      });
    } else {
      setCourse({ ...props.course });
    }

    if (professors.length === 0) {
      getProfessors().catch(error => {
        alert("Loading professors failed" + error);
      });
    }
  }, [props.course]);

  function handleChange(event) {
    const { name, value } = event.target;
    setCourse(prevCourse => ({
      ...prevCourse,
      [name]: name === "professorId" ? parseInt(value, 10) : value
    }));
  }

  function formIsValid() {
    const { title, professorId, category } = course;
    const errors = {};

    if (!title) errors.title = "Title is required.";
    if (!professorId) errors.professor = "Professor is required";
    if (!category) errors.category = "Category is required";

    setErrors(errors);
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  }

  function handleSave(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    setSaving(true);
    saveCourse(course)
      .then(() => {
        toast.success("Course saved.");
        history.push("/courses");
      })
      .catch(error => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }

  return professors.length === 0 || courses.length === 0 ? (
    <Spinner />
  ) : (
      <CourseForm
        course={course}
        errors={errors}
        professors={professors}
        onChange={handleChange}
        onSave={handleSave}
        saving={saving}
      />
    );
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  professors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  getCourses: PropTypes.func.isRequired,
  getProfessors: PropTypes.func.isRequired,
  saveCourse: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export function getCourseBySlug(courses, slug) {
  return courses.find(course => course.slug === slug) || null;
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const course =
    slug && state.courses.length > 0
      ? getCourseBySlug(state.courses, slug)
      : newCourse;
  return {
    course,
    courses: state.courses,
    professors: state.professors
  };
}

const mapDispatchToProps = {
  getCourses,
  getProfessors,
  saveCourse
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageCoursePage);
