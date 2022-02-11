import React, { Component } from "react";
import PropTypes from "prop-types";
import {SelectProductCategory} from "../SelectProductCategory/SelectProductCategory";

export class AddProductModal extends Component{
    static propTypes = {
        onAddItemClick: PropTypes.func,
        onEditItemClick: PropTypes.func,
        onCloseAddProductModalClick: PropTypes.func,
    }

    constructor(props){
        super(props);
        this.state = {
            name: props.product?.name || "",
            category: props.product?.category || "",
            price: props.product?.price || "",
        }
    }

    render(){
        return (
            <form onSubmit={(e) => { 
                e.preventDefault(); 
                this.props.product?.id ?
                this.props.onEditItemClick({...this.state, id: this.props.product.id}):
                this.props.onAddItemClick(this.state)
            }}>
                <p>Name:</p>
                    <input value={this.state.name} onChange={(e) => {this.setState({ name: e.target.value })}} />
                <p>Category:</p>
                <p>
                  <SelectProductCategory 
                        selctedItem={this.state.category}
                        getCategory={(cat) => {this.setState({ category: {categoryName:  cat}})}}
                  />
                </p>
                <p>Price:</p>
                    <input value={this.state.price}  onChange={(e) => {this.setState({ price: e.target.value }) }} />
                
                <button type="submit">{this.props.product?.id ? "Edit" : "Add"}</button>
                <button onClick={(e) => {
                        e.preventDefault();
                        this.props.onCloseAddProductModalClick();
                    }}>Close
                </button>
            </form>
        );
    }
}