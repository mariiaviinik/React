import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {SelectProductCategory} from "../SelectProductCategory/SelectProductCategory";
import { closeModalAction } from "../../Store/Modal/actions";
import { selectEditingProduct } from "../../Store/Products/selector";
import { v4 as uuidv4 } from "uuid";
import { addProductAction, editProductAction, 
    setEditingProductAction } from "../../Store/Products/actions";

export const AddProductModal = () => {
    const editingProduct = useSelector(selectEditingProduct);
    const [name, setName] = useState(editingProduct?.name || "");
    const [category, setCategory] = useState(editingProduct?.category || "");
    const [price, setPrice] = useState(editingProduct?.price || "");

    const dispatch = useDispatch();
    
    
    const onNameInputChange = useCallback((e) => {
        setName(e.target.value)
    }, [])

    const onSelectChangeCategory = useCallback((cat) => {
        setCategory({...category, categoryName:  cat})
    }, [category])
    
    const onPriceInputChange = useCallback((e) => {
        setPrice(e.target.value)
    }, [])

    const onButtonClose = useCallback((e) => {
        e.preventDefault();
        dispatch(closeModalAction());
        dispatch(setEditingProductAction(""))
    }, [dispatch])

    const onAddOrEditItem = useCallback((product) => {
        editingProduct?.id
        ? dispatch(editProductAction({...product, id: editingProduct.id}))
        : dispatch(addProductAction({...product, id: uuidv4()}));

        dispatch(setEditingProductAction(""));
        dispatch(closeModalAction());
    }, [dispatch, editingProduct])

    return (
        <form onSubmit={(e) => { 
            e.preventDefault(); 
            onAddOrEditItem({name, category, price})
        }}>
            <p>Name:</p>
                <input value={name} onChange={onNameInputChange} />

            <p>Category:</p>
            <p>
            <SelectProductCategory 
                    selectedItem={category.categoryName}
                    getCategory={onSelectChangeCategory}
                />
            </p>
            <p>Price:</p>
                <input value={price}  onChange={onPriceInputChange} />
            
            <button type="submit">{editingProduct?.id ? "Edit" : "Add"}</button>
            <button onClick={onButtonClose}>Close</button>
        </form>
    );
}