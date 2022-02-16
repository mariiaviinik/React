import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import {SelectProductCategory} from "../SelectProductCategory/SelectProductCategory";

export const AddProductModal = (props) => {
    // static propTypes = {
    //     onAddItemClick: PropTypes.func,
    //     onEditItemClick: PropTypes.func,
    //     onCloseAddProductModalClick: PropTypes.func,
    // }

    const [currentProduct, setCurrentProduct] = useState(
        {
            name: props.product?.name || "",
            category: props.product?.category || "",
            price: props.product?.price || "",
        }
    );

    return (
        <form onSubmit={(e) => { 
            e.preventDefault(); 
            props.product?.id ?
            props.onEditItemClick({...currentProduct, id: props.product.id}):
            props.onAddItemClick(currentProduct)
        }}>
            <p>Name:</p>
                <input value={currentProduct.name} onChange={(e) => {setCurrentProduct({...currentProduct, name: e.target.value})}} />
            <p>Category:</p>
            <p>
                <SelectProductCategory 
                    selctedItem={currentProduct.category}
                    getCategory={(cat) => {setCurrentProduct({ ...currentProduct, category: {categoryName:  cat}})}}
                />
            </p>
            <p>Price:</p>
                <input value={currentProduct.price}  onChange={(e) => {setCurrentProduct({ ...currentProduct, price: e.target.value }) }} />
            
            <button type="submit">{props.product?.id ? "Edit" : "Add"}</button>
            <button onClick={(e) => {
                    e.preventDefault();
                    props.onCloseAddProductModalClick();
                }}>Close
            </button>
        </form>
    );
}