export const ADD_CATEGORY_ACTION = "ADD_CATEGORY_ACTION";
export const DELETE_CATEGORY_ACTION = "DELETE_CATEGORY_ACTION";

export const addCategory = (categoryName) => {
    return{
        type: ADD_CATEGORY_ACTION,
        categoryName,
    }
}

export const deleteCategory = (categoryName) => {
    return{
        type: DELETE_CATEGORY_ACTION,
        categoryName,
    }
}