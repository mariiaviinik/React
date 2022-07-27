import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { productsReducer } from "./Products/reducer";
import { modalReducer } from "./Modal/reducer";
import { categoriesReducer } from "./Categories/reducer"

export const store = createStore(combineReducers({
    products: productsReducer,
    modal: modalReducer,
    categories: categoriesReducer,
}), applyMiddleware(thunk));
