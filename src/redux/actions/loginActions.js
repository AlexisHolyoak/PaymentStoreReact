import * as types from "./actionTypes";
import { beginApiCall, apiCallError } from "./apiStatusActions";
import Axios from "axios";
import { Redirect } from 'react-router-dom';

export function getLoginCustomer(customerId) {
  return { type: types.LOGIN, customerId };
}

export function login(user,password) {
  return(dispatch)=>{   
    dispatch(beginApiCall());
    return Axios.post("https://banking-api-customers.cfapps.io/api/users/login",{"Name":user,"Password":password})
    .then(result=>{
      alert("Bienvenido:" + user);
      //alert("Login Succesfull");
      dispatch(getLoginCustomer(result.data));
    }).catch(error=>{
      dispatch(apiCallError(error));
      throw error;
    })
  }
}