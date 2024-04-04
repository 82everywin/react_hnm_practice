import {createStore, applyMiddleware} from "redux"
import {thunk} from 'redux-thunk';
import rootReducer from './reducer' // 이렇게 해줘서 자동으로 index.js를 읽음 
import { composeWithDevTools } from '@redux-devtools/extension';

import {configureStore} from "@reduxjs/toolkit"

import authenticateReducer from "./reducer/authenticateReducer";
import productreducer from "./reducer/productreducer";

// let store = createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(thunk))
// );

//combineReducer
// thunk
// applyMiddleware
//composeWithDevTools 
// 기존 리덕스에서 사용해야함. 


// 업그레이드 방향 코드
let store = configureStore({
    reducer:{
        auth : authenticateReducer,
        product : productreducer
    }
})


export default store