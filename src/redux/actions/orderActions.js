import * as types from "./actionTypes";
import * as orderApi from "../../api/orderApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";
import Axios from "axios"

export function getOrderSuccess(ordersR) {
    return { type: types.LOAD_ORDERRS_SUCCESS, ordersR };
  }

export function createOrderSuccess(order) {
    return { type: types.CREATE_ORDER_SUCCESS, order };
  }

  export function updateOrderSuccess(order) {
    return { type: types.UPDATE_ORDER_SUCCESS, order };
  }
  
  export function deleteOrderOptimistic(order) {
    return { type: types.DELETE_ORDER_OPTIMISTIC, order };
  }

  export function getOrders() {
   console.log("in getOrders");
    return(dispatch)=>{   
      dispatch(beginApiCall());
      return Axios.get("http://3.15.174.163/api/orders/10",{headers:{"Access-Control-Allow-Origin": "*"}})
      .then(result=>{
        console.log(result.data);
        dispatch(getOrderSuccess(result.data));
      }).catch(error=>{
        dispatch(apiCallError(error));
        throw error;
      })
    }
  }
  
  export function saveOrder(order) {
    console.log(order);
    return (dispatch) => {
      dispatch(beginApiCall());
      dispatch(createOrderSuccess(order))
    }
  }

  export function deleteOrder(order) {
    return (dispatch) => {
      dispatch(beginApiCall());
      dispatch(deleteOrderOptimistic(order));
    }
  }
