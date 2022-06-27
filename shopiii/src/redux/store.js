import { combineReducers } from "redux";
import { applyMiddleware, legacy_createStore } from "redux";
import { cartReducer } from "./cart/reducer";
import { userReducer } from "./userRedux/reducer";
import reduxThunk from 'redux-thunk'





const rootReducer = combineReducers({
    cart : cartReducer, 
    user : userReducer
})
export const store = legacy_createStore(rootReducer, applyMiddleware(reduxThunk));