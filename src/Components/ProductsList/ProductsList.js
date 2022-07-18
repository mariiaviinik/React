import { Product } from "../Product/Product";
import { useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { selectProducts, 
    selectTotalPrice
} from "../../Store/Products/selector";
import { useDispatch } from "react-redux";
import { countTotalPrice} from "../../Store/Products/actions";
import { useParams } from 'react-router-dom';

export const ProductsList = () => {

    const products = useSelector(selectProducts);
    const totalPrice = useSelector(selectTotalPrice);
    const [productList, setProductList] = useState(products);
    const dispatch = useDispatch();
    let { category } = useParams();

    useEffect(() => {
        if(category){
            setProductList(products.filter(product => {
                if(product.category.categoryName.indexOf(category) !== -1) return product;
                return null;
            }))
        } else{
            setProductList(products);
        }
        
        // dispatch(countTotalPrice(productList));
    }, [dispatch, category])

    useEffect(() => {
        dispatch(countTotalPrice(productList));
    }, [productList])

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
                <tr>
                    <td colSpan={2}>Total price: </td>
                    <td>
                        {totalPrice}
                    </td>
                </tr>
            </tbody>
        </table>
    );
}