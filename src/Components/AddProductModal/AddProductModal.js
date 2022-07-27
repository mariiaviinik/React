import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {SelectProductCategory} from "../SelectProductCategory/SelectProductCategory";
import { selectEditingProduct } from "../../Store/Products/selector";
import { v4 as uuidv4 } from "uuid";
import { useNavigate, useParams } from 'react-router-dom';
import { addProduct, editProduct } from '../../Store/Products/thunks';
import { 
    Box, 
    TextField,
    Stack,
    Button
} from '@mui/material';
import { 
    setEditingProductAction,
    clearEditingProductAction
} from "../../Store/Products/actions";

export const AddProductModal = () => {
    const editingProduct = useSelector(selectEditingProduct);
    const [title, setTitle] = useState(editingProduct?.title || "");
    const [category, setCategory] = useState(editingProduct?.category || "");
    const [weight, setWeight] = useState(editingProduct?.weight || "");
    const [description, setDescription] = useState(editingProduct?.description || "");
    
    const dispatch = useDispatch();
    const navigate = useNavigate();   
    
    const { addItem } = useParams();
    
    if(addItem && editingProduct){
        dispatch(clearEditingProductAction());
    }
    
    console.log(editingProduct);

    const onNameInputChange = useCallback((e) => {
        setTitle(e.target.value)
    }, [])

    const onWeightInputChange = useCallback((e) => {
        setWeight(e.target.value)
    }, [])

    const onDescriptionInputChange = useCallback((e) => {
        setDescription(e.target.value)
    }, [])

    const onSelectChangeCategory = useCallback((cat) => {
        setCategory(cat)
    }, [])

    const onButtonClose = useCallback((e) => {
        e.preventDefault();
        dispatch(setEditingProductAction(""))
        navigate("/");
    }, [dispatch, navigate])

    const onAddOrEditItem = useCallback((product) => {
        console.log(JSON.stringify(product));

        editingProduct?.id
        ? dispatch(editProduct({...product, id: editingProduct.id}))
        : dispatch(addProduct({...product, id: uuidv4()}));

        dispatch(setEditingProductAction(""));
        navigate("/");
    }, [dispatch, navigate, editingProduct])

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
                display: 'flex',
                flexDirection: 'column'
            }}
            autoComplete="off"
            onSubmit={(e) => { 
                e.preventDefault(); 
                onAddOrEditItem({title, category, weight, description})
            }}
        >
            <TextField 
                id="standard-basic" 
                label="Title" 
                variant="standard" 
                value={title} 
                onChange={onNameInputChange}
                required
            />
            <SelectProductCategory 
                selectedItem={category}
                getCategory={onSelectChangeCategory}
            />
            <TextField 
                id="standard-basic" 
                label="Weight" 
                variant="standard" 
                value={weight} 
                onChange={onWeightInputChange}
                required
            />
            <TextField 
                id="standard-basic" 
                label="Description" 
                variant="standard" 
                value={description} 
                onChange={onDescriptionInputChange}
                required
            />

            <Stack spacing={3} direction="row">
                <Button variant="outlined" type="submit">{!addItem ? "Edit" : "Add"}</Button>
                <Button variant="outlined" onClick={onButtonClose}>Close</Button>
            </Stack>
        </Box>
    );
}