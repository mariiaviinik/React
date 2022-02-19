import { SHOW_MODAL_ACTION } from "./actions";
import { CLOSE_MODAL_ACTION } from "./actions";

const initialState = {
    isAddModalVisible: false,
}

export const modalReducer = (state=initialState, action) => {
    switch(action.type){
        case SHOW_MODAL_ACTION:
            return {...initialState,
                isAddModalVisible: true,
            }
        case CLOSE_MODAL_ACTION:
            return {...initialState,
                isAddModalVisible: false,
            }
        default: return state;
    }
}