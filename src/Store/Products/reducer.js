import { DELETE_PRODUCT_ACTION,
  ADD_PRODUCT_ACTION, 
  FILTER_PRODUCT_ACTION,
  SET_EDITING_PRODUCT_ACTION,
  SET_FILTER_FIELD_ACTION,
  EDIT_PRODUCT_ACTION } from "./actions";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    filteredItems: [],
    filterField: false,
    editingProduct: null,
    products: [
      {
        id: uuidv4(),
        name: "product1",
        category: {
          categoryId: uuidv4(),
          categoryName: "technics",
        },
        price: "200"
      },
      {
        id: uuidv4(),
        name: "product2",
        category: {
          categoryId: uuidv4(),
          categoryName: "technics",
        },
        price: "200"
      },
      {
        id: uuidv4(),
        name: "product3",
        category: {
          categoryId: uuidv4(),
          categoryName: "technics",
        },
        price: "200"
      },
      {
        id: uuidv4(),
        name: "product4",
        category: {
          categoryId: uuidv4(),
          categoryName: "cosmetic",
        },
        price: "200"
      },
      {
        id: uuidv4(),
        name: "product5",
        category: {
          categoryId: uuidv4(),
          categoryName: "book",
        },
        price: "200"
      },
    ],
  }

  export const productsReducer = (state = initialState, action) => {
    switch(action.type){
      case DELETE_PRODUCT_ACTION:
        return {...state,
          products: state.products.filter(product => {
            if(product.id !== action.id) return product;
          })
        };
      case ADD_PRODUCT_ACTION:
        return {...state,
          products: [
            ...state.products,
            action.newProduct
          ]
        };
        case SET_EDITING_PRODUCT_ACTION:
          return {...state,
            editingProduct: action.product,
          };
        case EDIT_PRODUCT_ACTION:
          return {...state,
            products: state.products.map(stateProduct => {
              if(stateProduct.id === action.product.id){
                return action.product;
              }
              return stateProduct;
            })
          };
        case SET_FILTER_FIELD_ACTION:
          return {...state,
            filterField: action.substr,
          };
        case FILTER_PRODUCT_ACTION:
          return {...state,
            filteredItems: state.products.filter(product => {
              
              let currentCriterion = action.criterion === "name" 
            ? product[action.criterion] 
            : product[action.criterion].categoryName;

              if(currentCriterion.indexOf(state.filterField) !== -1) return product;
            })
          };
        default: return state;
    }
  }
