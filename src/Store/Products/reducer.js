import {
  GET_PRODUCTS_ACTION,
  GET_PRODUCTS_SUCCESS_ACTION,
  GET_PRODUCTS_FAILURE_ACTION,

  // ADD_PRODUCT_ACTION,
  ADD_PRODUCT_SUCCESS_ACTION,
  ADD_PRODUCT_FAILURE_ACTION,

  DELETE_PRODUCT_ACTION,
  DELETE_PRODUCT_SUCCESS_ACTION,
  DELETE_PRODUCT_FAILURE_ACTION,

  // EDIT_PRODUCT_ACTION,
  EDIT_PRODUCT_SUCCESS_ACTION,
  EDIT_PRODUCT_FAILURE_ACTION,

  SET_EDITING_PRODUCT_ACTION,
  CLEAR_EDITING_PRODUCT_ACTION,

  FILTER_PRODUCT_ACTION,
  CLEAR_FILTER_ACTION,
} from "./actions";

const initialState = {
    filteredItems: null,
    editingProduct: null,
    totalPrice: 0,
    products: [],
    deletingProducts:{},
    isLoadingProductsList: false,
    error: null,
  }

  export const productsReducer = (state = initialState, action) => {
    switch(action.type){
      case GET_PRODUCTS_ACTION: 
        return{...state,
          isLoadingProductsList: true,
        };
      case GET_PRODUCTS_SUCCESS_ACTION: 
        return{...state,
          isLoadingProductsList: false,
          products: action.products,
        };
      case GET_PRODUCTS_FAILURE_ACTION:
        return { ...state, 
          isLoadingProductsList: false, 
          error: action.error,
        }; 
      case ADD_PRODUCT_SUCCESS_ACTION:
        return {...state,
          products: [
            ...state.products,
            action.newProduct
          ]
        };
      case ADD_PRODUCT_FAILURE_ACTION:
        return { ...state, 
          error: action.error,
        }; 
      case DELETE_PRODUCT_ACTION:
        return{...state,
          deletingProducts: {...state.deletingProducts,
            [action.id]: true,
          }
        }
      case DELETE_PRODUCT_SUCCESS_ACTION:
        return {...state,
          products: state.products.filter(product => {
            if(product.id !== action.id) return product;
            return null;
          }),
          deletingProducts: {...state.deletingProducts,
            [action.id]: null,
          }
        };
      case DELETE_PRODUCT_FAILURE_ACTION: 
        return { ...state, 
          error: action.error,
        }; 
      case EDIT_PRODUCT_SUCCESS_ACTION:
        return {...state,
          products: state.products.map(stateProduct => {
            if(stateProduct.id === action.product.id){
              return action.product;
            }
            return stateProduct;
          })
        };
      case EDIT_PRODUCT_FAILURE_ACTION: 
        return { ...state, 
          error: action.error,
        }; 
      case SET_EDITING_PRODUCT_ACTION:
        return {...state,
          editingProduct: action.product,
        };
      case CLEAR_EDITING_PRODUCT_ACTION:
      return {...state,
        editingProduct: null,
      }
      case CLEAR_FILTER_ACTION:
        return{
          ...state,
          filteredItems: null,
        }
      case FILTER_PRODUCT_ACTION:
        return {...state,
          filteredItems: state.products.filter(product => {
            if(product.category.indexOf(action.criterion) !== -1){
              return product;
            } else {
              return null;
            }
          })
        };
      default: return state;
    }
  }
