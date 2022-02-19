export const SHOW_MODAL_ACTION = "SHOW_MODAL_ACTION";
export const CLOSE_MODAL_ACTION = "CLOSE_MODAL_ACTION";


export const showModalAction = () => {
    return {
        type: SHOW_MODAL_ACTION,
    };
}

export const closeModalAction = () => {
    return {
        type: CLOSE_MODAL_ACTION,
    };
}

