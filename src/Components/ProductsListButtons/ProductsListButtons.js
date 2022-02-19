import React from "react";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { showModalAction } from "../../Store/Modal/actions";

export const ProductsListButtons = () => {
    const dispatch = useDispatch();

    const onAddProduct = useCallback(() => {
        dispatch(showModalAction());
    }, [dispatch])

    return (
        <div>
            <button onClick={onAddProduct}>Add product</button>
        </div>
    );
}
