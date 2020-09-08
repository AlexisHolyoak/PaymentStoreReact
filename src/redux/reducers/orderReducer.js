import * as types from "../actions/actionTypes";
import initialState from "./initialState";



export default function orderReducer(state = initialState.ordersR, action) {
  switch (action.type) {
    case types.CREATE_ORDER_SUCCESS:
      return [...state, { ...action.order }];
    case types.UPDATE_ORDER_SUCCESS:
      return state.map(order =>
        order.id === action.order.productId ? action.order : order
      );
    case types.LOAD_ORDERS_SUCCESS:
      return action.orders;
    case types.DELETE_ORDER_OPTIMISTIC:
      return state.filter(order => order.productId !== action.order.productId);
    default:
      return state;
  }
}