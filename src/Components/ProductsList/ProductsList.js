import { Product } from "../Product/Product";
import { useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { selectProducts, 
    selectTotalPrice,
    selectFilteredItems
} from "../../Store/Products/selector";
import { useDispatch } from "react-redux";
import { filterProductAction,
    clearFilteredItems,
    countTotalPrice
} from "../../Store/Products/actions";
import { useParams } from 'react-router-dom';

export const ProductsList = () => {

    const products = useSelector(selectProducts);
    const totalPrice = useSelector(selectTotalPrice);
    const filteredItems = useSelector(selectFilteredItems);

    let [ list, setList] = useState(products);
    const dispatch = useDispatch();
    let { category } = useParams();

    useEffect(() => {
        if(category){
            dispatch(filterProductAction(category));
        } else{
            dispatch(clearFilteredItems());
        }
    }, [dispatch, category, products])

    useEffect(() => {
        filteredItems
        ? setList(filteredItems) 
        : setList(products);
    }, [filteredItems, products])

    useEffect(() => {
        dispatch(countTotalPrice(list));
    }, [list])

    return (
        <table>
            <tbody>
                { 
                    list.map((product) => {
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