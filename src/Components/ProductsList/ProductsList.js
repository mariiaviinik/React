import './ProductsList.css';
import { Product } from "../Product/Product";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { getItems } from "../../Store/Products/thunks";
import { 
    selectProducts, 
    selectFilteredItems,
    selectIsLoadingProductsList,
    selectDeletingProducts
} from "../../Store/Products/selector";
import { 
    filterProductAction,
    clearFilteredItems,
} from "../../Store/Products/actions";
import {
    Table,
    TableBody,
    TableContainer,
    TableHead,
    Paper,
    TableRow,
    TableCell,
    CircularProgress
} from '@mui/material';

export const ProductsList = () => {

    const products = useSelector(selectProducts);
    const filteredItems = useSelector(selectFilteredItems);
    const isLoadingProductsList  = useSelector(selectIsLoadingProductsList);
    const deletingProducts  = useSelector(selectDeletingProducts);

    const dispatch = useDispatch();
    let [ list, setList] = useState(products);
    let { category } = useParams();

    useEffect(() =>{
        dispatch(getItems());
    }, [dispatch])


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

    if(isLoadingProductsList){
        return(
            <div className='circular-container'>
                <CircularProgress size={40} color="primary" />
            </div>
        );
    }

    return (
        <TableContainer component={Paper} sx={{ width: 600 }}>
            <Table sx={{ width: 600 }} aria-label="simple table" >
            <TableHead>
                <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell align="center">Category</TableCell>
                    <TableCell align="center">Weight</TableCell>
                    <TableCell align="center">Description</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                    { 
                        list.map((product) => {
                            return (
                                < Product 
                                    key={product.id}
                                    product={product}
                                    isDeleting = {deletingProducts[product.id]}
                                />
                            );
                        })
                    }
            </TableBody>
        </Table>
      </TableContainer>
    );
}