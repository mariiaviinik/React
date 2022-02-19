import "./ProductFilter.css";
import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { filterProductAction, setFilterFieldAction } from "../../Store/Products/actions"


export const ProductFilter = ({criterion}) => {
    ProductFilter.propTypes = {
        criterion: PropTypes.string,
    }

    const dispatch = useDispatch();

    const onInputChange = useCallback((e) => {
        dispatch(setFilterFieldAction(e.target.value));
        dispatch(filterProductAction(criterion));
    }, [dispatch, criterion])

    return (
        <div className="filter">
            <span>Filter by {criterion}:</span>
                <input className="input" onChange={onInputChange} />
        </div>
    );
}