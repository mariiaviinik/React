import React, { useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

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

export const SelectProductCategory = ({selctedItem, getCategory}) => {
    SelectProductCategory.propTypes = {
        selctedItem: PropTypes.string,
        getCategory: PropTypes.func,
    }

    const [categories, setCategories] = useState(categoriesState.categories);
     
    const onSelectChange =useCallback((e) => {
        getCategory(e.target.value);
    }, [getCategory])

    return (
        <select 
            value={selctedItem}
            onChange={onSelectChange} 
        >
            <option hidden>Select category</option>
            { 
                categories.map(category => {
                    return(
                        <option
                            value={category.categoryName} 
                            key={category.categoryId}
                        >
                            {category.categoryName}
                        </option>
                    );
                })
            }
        </select>
    );
}