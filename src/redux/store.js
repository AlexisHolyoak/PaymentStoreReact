import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import productReducer from "./reducers/productReducer"

export default createStore(combineReducers({
productReducer
}),composeWithDevTools(applyMiddleware(thunk))
)