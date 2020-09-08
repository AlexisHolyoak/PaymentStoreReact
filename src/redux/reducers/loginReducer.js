import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function loginReducer(state = initialState.customerActive, action) {
  switch (action.type) {
    case types.LOGIN:
      return [...state, { ...action.customerId }];
    default:
      return state;
  }
}

