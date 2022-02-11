import React, { Component } from "react";
import { Product } from "../Product/Product";

export class ProductsList extends Component{
    render(){
        return (
            <table>
                <tbody>
                    { 
                        this.props.products.map((product) => {
                            return (
                                < Product 
                                    key={product.id}
                                    product={product}
                                    onDelete={() => {this.props.onDeleteProduct(product.id)}}
                                    onEdit={() => {this.props.onEditProduct(product.id)}}
                                />
                            );
                        })
                    }
                </tbody>
            </table>
        ); 
    }
}