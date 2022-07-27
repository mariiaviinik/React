import {
    getProductsAction,
    getProductsSuccessAction,
    getProductsFailureAction,
    addProductAction,
    addProductSuccessAction,
    addProductFailureAction,
    deleteProductAction,
    deleteProductSuccessAction,
    deleteProductFailureAction,
    editProductAction,
    editProductSuccessAction,
    editProductFailureAction,
} from './actions';

const url = 'http://127.0.0.1:8080';

export const getItems = () => {
    return async (dispatch, getState) => {
        dispatch(getProductsAction());
        try{
            const response = await fetch([url, 'goods'].join('/'));
            if(response.ok){
                const data = await response.json();
                dispatch( getProductsSuccessAction(data.goods));
            } else{
                dispatch(getProductsFailureAction('Error happened'));
            }
        } catch (error){
            dispatch(getProductsFailureAction(error.message));
        }
    }
}

export const addProduct = (product) => {
    return async (dispatch, getState) => {
        dispatch(addProductAction());
        try{
            const response = await fetch([url, 'goods'].join('/'),
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(product),
                }
            );
            if(response.ok){
                const data = await response.json();
                dispatch(addProductSuccessAction(data));
            } else{
                dispatch(addProductFailureAction('Error happened'));
            }
        } catch (error){
            dispatch(addProductFailureAction(error.message));
        }
    }
}

export const deleteProduct = (id) => {
    return async (dispatch, getState) => {
        dispatch(deleteProductAction(id));
        try{
            const response = await fetch([url, 'goods', id].join('/'),
                {method: 'DELETE'}
            );
            if(response.ok){
                const data = await response.json();
                dispatch( deleteProductSuccessAction(data.id));
            } else{
                dispatch(deleteProductFailureAction('Error happened'));
            }
        } catch (error){
            dispatch(deleteProductFailureAction(error.message));
        }
    }
}

export const editProduct = (changedProduct) => {
    return async (dispatch, getState) => {
        dispatch(editProductAction());
        try{
            const response = await fetch([url, 'goods', changedProduct.id].join('/'),
                { 
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(changedProduct),
                }
            );
            if(response.ok){
                const data = await response.json();
                dispatch(editProductSuccessAction(data.id));
            } else{
                dispatch(editProductFailureAction('Error happened'));
            }
        } catch (error){
            dispatch(editProductFailureAction(error.message));
        }
    }
}