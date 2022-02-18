import './App.css';
import React, { useCallback, useState } from 'react';
import { ProductsList } from './ProductsList/ProductsList';
import { ProductsListButtons } from './ProductsListButtons/ProductsListButtons';
import { AddProductModal } from './AddProductModal/AddProductModal';
import { ProductFilter } from './ProductFilter/ProductFilter'
import { v4 as uuidv4 } from "uuid";

const initialState = {
  isAddModalVisible: false,
  filteredItems: [],
  isFilterField: false,
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

const App = () => {
  const [products, setProducts] = useState(initialState.products);
  const [isAddModalVisible, setIsAddModalVisible] = useState(initialState.isAddModalVisible);
  const [filteredItems, setFilteredItems] = useState(initialState.filteredItems);
  const [isFilterField, setIsFilterField] = useState(initialState.isFilterField);
  const [editingProduct, setEditingProduct] = useState(initialState.editingProduct);

  const onAddItem = useCallback(( {name, category, price} ) => {
    setIsAddModalVisible(false);
    setProducts(
      [
        ...products,
        { 
          id: uuidv4(),
          name,
          category,
          price,
        }
      ]
    );
  }, [setIsAddModalVisible, setProducts, products])

  const filterProducts = useCallback((substr, criterion) => {
    if(!substr){
      setIsFilterField(false);
    } else{
      setIsFilterField(true);
      setFilteredItems(
        products.filter(product => {
          let currentCriterion = criterion === "name" 
          ? product[criterion] 
          : product[criterion].categoryName;
          
          if(currentCriterion.indexOf(substr) !== -1){
            return product;
          }
        })
      );
    }
  }, [setIsFilterField, setFilteredItems, products])

  const onDeleteProduct = useCallback((id) => {
    setProducts(products.filter(product => product.id !== id));
  }, [setProducts, products])
  
  const onEditProduct = useCallback((id) => {
    const product = products.find(product => product.id === id);
    setIsAddModalVisible(true);
    setEditingProduct(product);
  }, [setIsAddModalVisible, products])
  
  const onModalClose = useCallback(() => {
    setIsAddModalVisible(false);
    setEditingProduct(null);
  }, [setIsAddModalVisible])
  
  const onApplyEditProduct = useCallback((product) => {
    setProducts(
      products.map(stateProduct => {
        if(stateProduct.id === product.id){
          return product;
        }
        return stateProduct;
      })
    );
    onModalClose(); 
  }, [setProducts, onModalClose, products])

  const onModalVisible = useCallback(() => {setIsAddModalVisible(true)}, [setIsAddModalVisible])

  return (
    <div className="App">
      <ProductFilter 
        text={"Filter by name"}
        criterion={"name"}
        filterProduct={filterProducts}
      />
      <ProductFilter 
        text={"Filter by category"}
        criterion={"category"}
        filterProduct={filterProducts}
      />
      <ProductsList 
        products={isFilterField ? filteredItems : products}
        onDeleteProduct={onDeleteProduct}
        onEditProduct={onEditProduct}
      />
      <ProductsListButtons onAddClicked={onModalVisible} />
      {isAddModalVisible ?
        <AddProductModal 
          onAddItemClick={ onAddItem } 
          onCloseAddProductModalClick={onModalClose}
          onEditItemClick={onApplyEditProduct}
          product={editingProduct}
        /> 
        : null
      }
    </div>
  );
}

export default App;
