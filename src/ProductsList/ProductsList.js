import React, { useCallback } from "react";
import { Product } from "../Product/Product";
import PropTypes from "prop-types";

export const ProductsList = ({products, onDeleteProduct, onEditProduct}) => {
    ProductsList.propTypes = {
        products: PropTypes.array,
        onDeleteProduct: PropTypes.func,
        onEditProduct: PropTypes.func, 
    }

    const onDelete = useCallback((productItem) => {onDeleteProduct(productItem)}, [onDeleteProduct])

    const onEdit = useCallback((productItem) => {onEditProduct(productItem)}, [onDeleteProduct])

    return (
        <table>
            <tbody>
                { 
                    products.map((product) => {
                        return (
                            < Product 
                                key={product.id}
                                product={product}
                                productId={product.id}
                                onDelete={onDelete}
                                onEdit={onEdit}
                            />
                        );
                    })
                }
            </tbody>
        </table>
    );
}