import { ADD_CATEGORY_ACTION,
    DELETE_CATEGORY_ACTION } from "./actions"
import { v4 as uuidv4 } from "uuid";

const initialSatete = {
    categories: [
        {
            categoryId: uuidv4(),
            categoryName: "technics",
        },
        {
            categoryId: uuidv4(),
            categoryName: "cosmetic",
        },
        {
            categoryId: uuidv4(),
            categoryName: "book",
        },
        {
            categoryId: uuidv4(),
            categoryName: "for home",
        },
    ],
}

export const categoriesReducer = (state=initialSatete, action) => {
    switch(action.type) {
        case ADD_CATEGORY_ACTION:
            return {...state,
                categories: [
                ...state.categories,
                {
                    categoryId: uuidv4(),
                    categoryName: action.categoryName,
                }]
            };
        case DELETE_CATEGORY_ACTION:
            return {...state,
                categories: state.categories.filter((category) => {
                    if(category.categoryName !== action.categoryName) return category;
                })
            };
        default: return state;
    }
}