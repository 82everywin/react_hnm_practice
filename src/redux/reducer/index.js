import { combineReducers } from "redux";
import authenticateReducer from "./authenticateReducer";
import productreducer from "./productreducer";


export default combineReducers({

    auth : authenticateReducer,
    product : productreducer
})