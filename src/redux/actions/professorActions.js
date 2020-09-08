import * as types from "./actionTypes";
import * as professorApi from "../../api/professorApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function getProfessorSuccess(professors) {
  return { 
    type: types.LOAD_PROFESSORS_SUCCESS, 
    professors 
  };
}

export function deleteProfessorOptimistic(professor){
  return { type: types.DELETE_PROFESSOR_OPTIMISTIC, professor};
}

export function getProfessors() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return professorApi
      .getProfessors()
      .then(professors => {
        dispatch(getProfessorSuccess(professors));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteProfessor(professor){
  return function(dispatch){
    dispatch(deleteProfessorOptimistic(professor));
    return professorApi.deleteProfessor(professor.id);
  };
}
