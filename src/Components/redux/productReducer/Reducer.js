import { combineReducers } from "redux";
import {ProductReducer} from '../productReducer/ProductReducer'

export const Reducer = combineReducers({
    ProductData : ProductReducer,

})