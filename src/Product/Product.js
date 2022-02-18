import React, { useCallback } from "react";
import PropTypes from "prop-types";

export const Product = ({product, productId, onDelete, onEdit}) => {
    Product.propTypes = {
        product: PropTypes.object,
        productId: PropTypes.string,
        onDelete: PropTypes.func, 
        onEdit: PropTypes.func, 
    }
        
    const onDeleteClick = useCallback(() => {onDelete(productId)}, [onDelete, productId])

    const onEditClick = useCallback(() => {onEdit(productId)}, [onEdit, productId])

    return (
        <tr>
            <td>{product?.name || ''}</td>
            <td>{product?.category.categoryName || ''}</td>
            <td>{product?.price || ''}</td>
            <td>
                <button onClick={onDeleteClick}>Delete</button>
            </td>
            <td>
                <button onClick={onEditClick}>Edit</button>
            </td>
        </tr>
    ); 
} 