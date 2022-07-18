import "./ProductFilter.css";
import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";


export const ProductFilter = () => {
    ProductFilter.propTypes = {
        criterion: PropTypes.string,
    }

    const navigate = useNavigate();

    const onFilterSearch = useCallback((e) => {
        navigate("/filter/" + e.target.previousElementSibling.value);
    }, [navigate])

    return (
        <div className="filter">
            <span>Filter by category:</span>
                <input className="input" />
            <button onClick={onFilterSearch}>Search</button>
        </div>
    );
}