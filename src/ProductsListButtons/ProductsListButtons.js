import React from "react";
import PropTypes from "prop-types";

export const ProductsListButtons = ({onAddClicked}) => {
    ProductsListButtons.propTypes = {
        onAddClicked: PropTypes.func,
    }

    return (
        <div>
            <button 
            onClick={onAddClicked}>Add product</button>
        </div>
    );
}
