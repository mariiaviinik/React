import { createStore, combineReducers } from "redux";
import { productsReducer } from "./Products/reducer";
import { modalReducer } from "./Modal/reducer";
import { categoriesReducer } from "./Categories/reducer"

export const store = createStore(combineReducers({
    products: productsReducer,
    modal: modalReducer,
    categories: categoriesReducer,
}));
