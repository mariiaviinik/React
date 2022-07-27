import React from "react";
import "./CategoriesEditor.css";
import { useDispatch } from "react-redux";
import { useCallback, useState } from "react";
import { addCategory, deleteCategory } from "../../Store/Categories/actions"
import { SelectProductCategory } from "../SelectProductCategory/SelectProductCategory"
import { Button, TextField } from '@mui/material';

const  style = {
    display: 'flex', 
    alignItems: 'flex-end'
}

export const CategoriesEditor = () => {

    const [addCategoryName, setAddCategoryName] = useState("");
    const [deleteCategoryName, setDeleteCategoryName] = useState("");

    const dispatch = useDispatch();

    const onSelectChangeCategory = useCallback((cat) => {
        setDeleteCategoryName(cat)
    }, [])

    const getValue = useCallback((e) => {
        setAddCategoryName(e.target.value)
    }, [])

    const cleanField = useCallback(() => {
        setAddCategoryName("");
    }, [])

    const onAddCategory = useCallback(() => {
        dispatch(addCategory(addCategoryName));
        cleanField();
    }, [dispatch, cleanField, addCategoryName])

    const onDeleteCategory = useCallback(() => {
        dispatch(deleteCategory(deleteCategoryName));
    }, [dispatch, deleteCategoryName])

    return (
        <div className="holder">
            <div style={style}>
                <TextField 
                    label="Category name" 
                    variant="standard" 
                    value={addCategoryName} 
                    onChange={getValue}
                />
                <Button variant="text" size="middle" onClick={onAddCategory}>Add category</Button>
            </div>
            <div style={style}>
            <SelectProductCategory 
                selectedItem={''}
                getCategory={onSelectChangeCategory}
            />
                <Button variant="text" size="middle" onClick={onDeleteCategory}>Delete category</Button>
            </div>
        </div>
    );
}