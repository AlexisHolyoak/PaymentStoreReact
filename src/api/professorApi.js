import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/professors/";

export function getProfessors() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function deleteProfessor(professorId){
  return fetch(baseUrl+professorId,{method:"DELETE"}).then(handleResponse).catch(handleError);
}
