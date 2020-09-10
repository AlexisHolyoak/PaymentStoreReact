import * as types from "./actionTypes";
import * as productApi from "../../api/productApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";
import Axios from "axios"

export function getProductSuccess(products) {
  return { type: types.LOAD_PRODUCTS_SUCCESS, products };
}

export function getProducts() {
  
  return(dispatch)=>{   
    dispatch(beginApiCall());
 
    //Axios.get('https://my-json-server.typicode.com/alexisholyoak/orders-store/products')


    return Axios.get("https://my-json-server.typicode.com/alexisholyoak/orders-store/products",{headers:{"Access-Control-Allow-Origin": "*"}})
    .then(result=>{
      console.log("llamada a lista de productos")
      console.log(result.data);
      dispatch(getProductSuccess(result.data));
    }).catch(error=>{
      dispatch(apiCallError(error));
      throw error;
    })
  }
}
