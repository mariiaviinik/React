import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { showModalAction } from "../../Store/Modal/actions";
import { setEditingProductAction } from "../../Store/Products/actions";
import { deleteProduct } from "../../Store/Products/thunks";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton';
import { 
    TableRow,
    TableCell,
    Stack,
    Button
} from '@mui/material';


export const Product = ({product, isDeleting}) => {
    Product.propTypes = {
        product: PropTypes.object,
    }
    
    const dispatch = useDispatch();
    const navigate = useNavigate(); 

    const onEdit = useCallback(() => {
        navigate("/editItem");
        
        dispatch(setEditingProductAction(product))
        dispatch(showModalAction());
    }, [dispatch, navigate, product])

    const onDelete = useCallback(() => {
        dispatch(deleteProduct(product.id));
    }, [dispatch, product.id])

    return (
        <TableRow
            key={product.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell>{product?.title || ''}</TableCell>
            <TableCell align="center">{product?.category || '---'}</TableCell>
            <TableCell align="center">{product?.weight || ''}</TableCell>
            <TableCell align="center">{product?.description || ''}</TableCell>
            <TableCell align="center">
                <Stack spacing={1} direction="row">
                    <Button variant="outlined" size="small" onClick={onEdit}>Edit</Button>
                    {
                        isDeleting 
                        ?
                          <LoadingButton loading variant="outlined" size="small">
                          </LoadingButton>
                        : <Button variant="outlined" color="error" size="small" onClick={onDelete}>Delete</Button>
                    }   
                    {/* <button onClick={onEdit}>Edit</button> */}
                </Stack>
            </TableCell>
        </TableRow>
    ); 
} 