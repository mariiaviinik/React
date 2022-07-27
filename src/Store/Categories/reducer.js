import { 
    ADD_CATEGORY_ACTION,
    DELETE_CATEGORY_ACTION 
} from "./actions"

const initialSatete = {
    categories: ["technics", "cosmetic", "book", "for home", "food"]
}

export const categoriesReducer = (state=initialSatete, action) => {
    switch(action.type) {
        case ADD_CATEGORY_ACTION:
            return {...state,
                categories: [
                    ...state.categories,
                    action.category,
                ]
            };
        case DELETE_CATEGORY_ACTION:
            return {...state,
                categories: state.categories.filter((category) => {
                    if(category !== action.category) return category;
                    return null;
                })
            };
        default: return state;
    }
}