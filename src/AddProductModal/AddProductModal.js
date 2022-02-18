import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import {SelectProductCategory} from "../SelectProductCategory/SelectProductCategory";

export const AddProductModal = ({onAddItemClick, onCloseAddProductModalClick, onEditItemClick, product}) => {
    AddProductModal.propTypes = {
        onAddItemClick: PropTypes.func,
        onEditItemClick: PropTypes.func,
        onCloseAddProductModalClick: PropTypes.func,
        product: PropTypes.bool,
    }

    const [name, setName] = useState(product?.name || "")
    const [category, setCategory] = useState(product?.category || "")
    const [price, setPrice] = useState(product?.price || "")

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
        onCloseAddProductModalClick();
    }, [onCloseAddProductModalClick])

    return (
        <form onSubmit={(e) => { 
            e.preventDefault(); 
            product?.id ?
            onEditItemClick({name, category, price, id: product.id}):
            onAddItemClick({name, category, price})
        }}>
            <p>Name:</p>
                <input value={name} onChange={onNameInputChange} />

            <p>Category:</p>
            <p>
                <SelectProductCategory 
                    selctedItem={category.categoryName}
                    getCategory={onSelectChangeCategory}
                />
            </p>
            <p>Price:</p>
                <input value={price}  onChange={onPriceInputChange} />
            
            <button type="submit">{product?.id ? "Edit" : "Add"}</button>
            <button onClick={onButtonClose}>Close
            </button>
        </form>
    );
}