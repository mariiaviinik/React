import React from "react";
import { Product } from "../Product/Product";

export const ProductsList = (props) => {
    return (
        <table>
            <tbody>
                { 
                    props.products.map((product) => {
                        return (
                            < Product 
                                key={product.id}
                                product={product}
                                onDelete={() => {props.onDeleteProduct(product.id)}}
                                onEdit={() => {props.onEditProduct(product.id)}}
                            />
                        );
                    })
                }
            </tbody>
        </table>
    );
}