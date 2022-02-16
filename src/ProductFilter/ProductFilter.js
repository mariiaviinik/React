import React, { useCallback } from "react";
import PropTypes from "prop-types";


export const ProductFilter = ({text, criterion, filterProduct}) => {
    ProductFilter.propTypes = {
        text: PropTypes.string,
        criterion: PropTypes.string,
        filterProduct: PropTypes.func, 
    }

    const onInputChange = useCallback((e) => {
        filterProduct(e.target.value, criterion)
    }, [filterProduct])

    return (
        <div>
            <p>{text}</p>
                <input onChange={onInputChange} 
                />
        </div>
    );
}