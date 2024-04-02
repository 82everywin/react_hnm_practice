import {createStore, applyMiddleware} from "redux"
import {thunk} from 'redux-thunk';
import rootReducer from './reducer' // 이렇게 해줘서 자동으로 index.js를 읽음 
import { composeWithDevTools } from '@redux-devtools/extension';


let store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))

export default store