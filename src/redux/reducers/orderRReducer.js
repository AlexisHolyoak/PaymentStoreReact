import * as types from "../actions/actionTypes";
import initialState from "./initialState";



export default function orderReducer(state = initialState.ordersR, action) {
  switch (action.type) {

    case types.LOAD_ORDERRS_SUCCESS:
      return action.ordersR;
    
    default:
      return state;
  }
}