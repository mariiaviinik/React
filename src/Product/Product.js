import React from "react";

export const Product = (props) => {
    return (
        <tr>
            <td>{props.product?.name || ''}</td>
            <td>{props.product?.category.categoryName || ''}</td>
            <td>{props.product?.price || ''}</td>
            <td>
                <button onClick={props.onDelete}>Delete</button>
            </td>
            <td>
                <button onClick={props.onEdit}>Edit</button>
            </td>
        </tr>
    ); 
} 