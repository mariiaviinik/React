import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { showModalAction } from "../../Store/Modal/actions";
import { deleteProductAction, setEditingProductAction } from "../../Store/Products/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

export const Product = ({product}) => {
    Product.propTypes = {
        product: PropTypes.object,
    }
    
    const dispatch = useDispatch();
    const navigate = useNavigate(); 

    const onEdit = useCallback(() => {
        navigate("/editItem");
        
        dispatch(setEditingProductAction(product))
        dispatch(showModalAction());
    }, [dispatch, product])

    const onDelete = useCallback(() => {
        dispatch(deleteProductAction(product.id));
    }, [dispatch, product.id])

    return (
        <tr>
            <td>{product?.name || ''}</td>
            <td>{product?.category.categoryName || ''}</td>
            <td>{product?.price || ''}</td>
            <td>
                <button onClick={onDelete}>Delete</button>
            </td>
            <td>
                <button onClick={onEdit}>Edit</button>
            </td>
        </tr>
    ); 
} 