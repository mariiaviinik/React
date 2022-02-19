import React from "react";
import "./CategoriesEditor.css";
import { useDispatch } from "react-redux";
import { useCallback, useState } from "react";
import { addCategory, deleteCategory } from "../../Store/Categories/actions"
import { SelectProductCategory } from "../SelectProductCategory/SelectProductCategory"

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
            <div>
                <input value={addCategoryName} onChange={getValue} />
                    <button onClick={onAddCategory}>Add category</button>
            </div>
            <div>
                <SelectProductCategory getCategory={onSelectChangeCategory}/>
                    <button onClick={onDeleteCategory}>Delete category</button>
            </div>
        </div>
    );
}