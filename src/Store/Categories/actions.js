export const ADD_CATEGORY_ACTION = "ADD_CATEGORY_ACTION";
export const DELETE_CATEGORY_ACTION = "DELETE_CATEGORY_ACTION";

export const addCategory = (category) => {
    return{
        type: ADD_CATEGORY_ACTION,
        category,
    }
}

export const deleteCategory = (category) => {
    return{
        type: DELETE_CATEGORY_ACTION,
        category,
    }
}