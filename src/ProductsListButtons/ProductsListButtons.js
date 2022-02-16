import React from "react";
import PropTypes from "prop-types";

export const ProductsListButtons = (props) => {
    // static propTypes = {
    //     onAddClicked: PropTypes.func,
    // }

    return (
        <div>
            <button 
            onClick={props.onAddClicked}>Add product</button>
        </div>
    );
}
