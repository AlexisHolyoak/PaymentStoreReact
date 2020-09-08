import * as types from "../actions/actionTypes";
import initialState from "./initialState";


export default function purchaseReducer(state = initialState.purchases, action) {
  switch (action.type) {
    case types.CREATE_PURCHASE_SUCCESS:
      return [...state, { ...action.purchase }];
    case types.UPDATE_PURCHASE_SUCCESS:
      return state.map(purchase =>
        purchase.id === action.purchase.productId ? action.purchase : purchase
      );
    case types.LOAD_PURCHASES_SUCCESS:
      return action.purchases;
    case types.DELETE_PURCHASE_OPTIMISTIC:
      return state.filter(purchase => purchase.productId !== action.purchase.productId);
    default:
      return state;
  }
}