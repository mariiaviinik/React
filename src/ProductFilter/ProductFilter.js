import React, { Component } from "react";


export class ProductFilter extends Component{
    render(){
        return (
            <div>
                <p>{this.props.text}</p>
                    <input onChange={(e) => {
                        this.props.filterProduct(e.target.value, 
                        this.props.criterion)}} 
                    />
            </div>
        );
    }
}