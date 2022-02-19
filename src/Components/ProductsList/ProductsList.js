import { Product } from "../Product/Product";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectProducts, 
    selectFilteredItems,
    selectFilterField
} from "../../Store/Products/selector";

export const ProductsList = () => {

    const products = useSelector(selectProducts);
    const filteredItems = useSelector(selectFilteredItems);
    const filterField = useSelector(selectFilterField);
    const [productList, setProductList] = useState(products);

    useEffect(() => {
        filterField 
        ? setProductList(filteredItems)
        : setProductList(products)
    }, [filterField, products, filteredItems])

    return (
        <table>
            <tbody>
                { 
                    productList.map((product) => {
                        return (
                            < Product 
                                key={product.id}
                                product={product}
                            />
                        );
                    })
                }
            </tbody>
        </table>
    );
}