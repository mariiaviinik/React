import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { selectCategories } from "../../Store/Categories/selector";

export const SelectProductCategory = ({selectedItem, getCategory}) => {
    SelectProductCategory.propTypes = {
        selctedItem: PropTypes.string,
        getCategory: PropTypes.func,
    }

    const categories = useSelector(selectCategories);

    const onSelectChange = useCallback((e) => {
        getCategory(e.target.value);
    }, [getCategory])

    return (
        <select 
            value={selectedItem}
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