import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import { Reducer } from "../productReducer/Reducer";

export const store = createStore(Reducer,applyMiddleware(thunk));