export const GET_PRODUCTS_ACTION = "GET_PRODUCTS_ACTION";
export const GET_PRODUCTS_SUCCESS_ACTION = "GET_PRODUCTS_SUCCESS_ACTION";
export const GET_PRODUCTS_FAILURE_ACTION = "GET_PRODUCTS_FAILURE_ACTION";

export const ADD_PRODUCT_ACTION = "ADD_PRODUCT_ACTION";
export const ADD_PRODUCT_SUCCESS_ACTION = "ADD_PRODUCT_SUCCESS_ACTION";
export const ADD_PRODUCT_FAILURE_ACTION = "ADD_PRODUCT_FAILURE_ACTION";

export const DELETE_PRODUCT_ACTION = "DELETE_PRODUCT_ACTION";
export const DELETE_PRODUCT_SUCCESS_ACTION = "DELETE_PRODUCT_SUCCESS_ACTION";
export const DELETE_PRODUCT_FAILURE_ACTION = "DELETE_PRODUCT_FAILURE_ACTION";

export const EDIT_PRODUCT_ACTION = "EDIT_PRODUCT_ACTION";
export const EDIT_PRODUCT_SUCCESS_ACTION = "EDIT_PRODUCT_SUCCESS_ACTION";
export const EDIT_PRODUCT_FAILURE_ACTION = "EDIT_PRODUCT_FAILURE_ACTION";

export const SET_EDITING_PRODUCT_ACTION = "SET_EDITING_PRODUCT_ACTION";
export const CLEAR_EDITING_PRODUCT_ACTION = "CLEAR_EDITING_PRODUCT_ACTION";
export const CLEAR_FILTER_ACTION = "CLEAR_FILTER_ACTION";
export const FILTER_PRODUCT_ACTION = "FILTER_PRODUCT_ACTION";
export const COUNT_TOTAL_PRICE_ACTION = "COUNT_TOTAL_PRICE_ACTION";


export const getProductsAction = () => {
    return{
        type: GET_PRODUCTS_ACTION,
    }
}

export const getProductsSuccessAction = (products) => {
    return{
        type: GET_PRODUCTS_SUCCESS_ACTION,
        products
    }
}

export const getProductsFailureAction = (error) => {
    return{
        type: GET_PRODUCTS_FAILURE_ACTION,
        error,
    }
}

export const addProductAction = () => {
    return{
        type: ADD_PRODUCT_ACTION,
    }
}

export const addProductSuccessAction = (newProduct) => {
    return{
        type: ADD_PRODUCT_SUCCESS_ACTION,
        newProduct
    }
}

export const addProductFailureAction = (error) => {
    return{
        type: ADD_PRODUCT_ACTION,
        error,
    }
}

export const deleteProductAction = (id) => {
    return{
        type: DELETE_PRODUCT_ACTION,
        id,
    }
}

export const deleteProductSuccessAction = (id) => {
    return{
        type: DELETE_PRODUCT_SUCCESS_ACTION,
        id
    }
}

export const deleteProductFailureAction = (error) => {
    return{
        type: DELETE_PRODUCT_FAILURE_ACTION,
        error,
    }
}

export const editProductAction = () => {
    return{
        type: EDIT_PRODUCT_ACTION,
    }
}

export const editProductSuccessAction = (product) => {
    return{
        type: EDIT_PRODUCT_SUCCESS_ACTION,
        product,
    }
}

export const editProductFailureAction = (error) => {
    return{
        type: EDIT_PRODUCT_FAILURE_ACTION,
        error,
    }
}

export const setEditingProductAction = (product) => {
    return {
        type: SET_EDITING_PRODUCT_ACTION,
        product
    };
}

export const clearEditingProductAction = () => {
    return {
        type: CLEAR_EDITING_PRODUCT_ACTION,
    };
}

export const clearFilteredItems = () => {
    return{
        type: CLEAR_FILTER_ACTION
    }
}

export const filterProductAction = (criterion) => {
    return{
        type: FILTER_PRODUCT_ACTION,
        criterion,
    }
}

export const countTotalPrice = (products) => {
    return{
        type: COUNT_TOTAL_PRICE_ACTION,
        products,
    }
}