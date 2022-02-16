import React from "react";


export const ProductFilter = (props) => {
    return (
        <div>
            <p>{props.text}</p>
                <input onChange={(e) => {
                    props.filterProduct(e.target.value, 
                    props.criterion)}} 
                />
        </div>
    );
}