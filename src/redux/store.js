import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import productreducer from "./reducer/productreducer"

let store = createStore(productreducer,applyMiddleware(thunk))

export default store