import "./ProductFilter.css";
import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from '@mui/material';

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
            <TextField 
                id="standard-basic" 
                label="Filter by category" 
                variant="standard" 
            />
                <Button variant="text" size="middle" onClick={onFilterSearch}>Search</Button>
            {/* <span>Filter by category:</span>
                <input className="input" />
            <button onClick={onFilterSearch}>Search</button> */}
        </div>
    );
}