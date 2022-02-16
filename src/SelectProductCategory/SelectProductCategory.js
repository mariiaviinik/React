import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const categoriesState = {
    categories: [
        {
            categoryId: uuidv4(),
            categoryName: "technics",
        },
        {
            categoryId: uuidv4(),
            categoryName: "cosmetic",
        },
        {
            categoryId: uuidv4(),
            categoryName: "book",
        },
        {
            categoryId: uuidv4(),
            categoryName: "for home",
        },
    ],
}

export const SelectProductCategory = (props) => {
    const [categories, setCategories] = useState(categoriesState.categories);

    return (
        <select 
            value={props.selctedItem}
            onChange={(e) => {props.getCategory(e.target.value)}} 
        >
            <option hidden>Select category</option>
            { 
                categories.map(category => {
                    return(
                        <option value={category.categoryName} key={category.categoryId}>{category.categoryName}</option>
                    );
                })
            }
        </select>
    );
}