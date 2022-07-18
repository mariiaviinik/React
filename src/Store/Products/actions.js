export const DELETE_PRODUCT_ACTION = "DELETE_PRODUCT_ACTION";
export const ADD_PRODUCT_ACTION = "ADD_PRODUCT_ACTION";
export const SET_EDITING_PRODUCT_ACTION = "SET_EDITING_PRODUCT_ACTION";
export const EDIT_PRODUCT_ACTION = "EDIT_PRODUCT_ACTION";
export const SET_FILTER_FIELD_ACTION = "SET_FILTER_FIELD_ACTION";
export const FILTER_PRODUCT_ACTION = "FILTER_PRODUCT_ACTION";
export const COUNT_TOTAL_PRICE_ACTION = "COUNT_TOTAL_PRICE_ACTION";

export const deleteProductAction = (id) => {
    return{
        type: DELETE_PRODUCT_ACTION,
        id
    }
}

export const addProductAction = (newProduct) => {
    return{
        type: ADD_PRODUCT_ACTION,
        newProduct
    }
}

export const setEditingProductAction = (product) => {
    return {
        type: SET_EDITING_PRODUCT_ACTION,
        product
    };
}

export const editProductAction = (product) => {
    return{
        type: EDIT_PRODUCT_ACTION,
        product,
    }
}

export const countTotalPrice = (products) => {
    return{
        type: COUNT_TOTAL_PRICE_ACTION,
        products,
    }
}