import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const CourseForm = ({
  course,
  professors,
  onSave,
  onChange,
  saving = false,
  errors = {}
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{course.id ? "Edit" : "Add"} Course</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="title"
        label="Title"
        value={course.title}
        onChange={onChange}
        error={errors.title}
      />

      <SelectInput
        name="professorId"
        label="Professor"
        value={course.professorId || ""}
        defaultOption="Select Professor"
        options={professors.map(professor => ({
          value: professor.id,
          text: professor.name
        }))}
        onChange={onChange}
        error={errors.professor}
      />

      <TextInput
        name="category"
        label="Category"
        value={course.category}
        onChange={onChange}
        error={errors.category}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

CourseForm.propTypes = {
  professors: PropTypes.array.isRequired,
  course: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default CourseForm;
