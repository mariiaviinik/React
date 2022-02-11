import './App.css';
import React, { Component } from 'react';
import { ProductsList } from './ProductsList/ProductsList';
import { ProductsListButtons } from './ProductsListButtons/ProductsListButtons';
import { AddProductModal } from './AddProductModal/AddProductModal';
import { ProductFilter } from './ProductFilter/ProductFilter'
import { v4 as uuidv4 } from "uuid";

class App extends Component {

  constructor(props){
    super(props);

    this.onAddItem = ( {name, category, price} ) => {
      this.setState({
        isAddModalVisible: false,
        products: [
          ...this.state.products,
          { 
            id: uuidv4(),
            name,
            category,
            price,
          }
        ]
      });
    }

    this.filterProducts = (substr, criterion) => {
      if(!substr){
        this.setState(
          {
            isFilterField: false,
          }
        )
      } else{
        this.setState({
          isFilterField: true,
          filteredItems: this.state.products.filter(product => {

            let currentCriterion = criterion === "name" 
            ? product[criterion] 
            : product[criterion].categoryName;
            
            if(currentCriterion.indexOf(substr) !== -1){
              return product;
            }
          }),
        })
      }
    }

    this.onDeleteProduct = (id) => {
      this.setState({
        products: this.state.products.filter(product => product.id !== id),
      });
    }

    this.onApplyEditProduct = (product) => {
      this.setState({
        products: this.state.products.map(stateProduct => {
          if(stateProduct.id === product.id){
            return product;
          }
          return stateProduct;
        }),
      })
      this.onModalClose();
    }

    this.onEditProduct = (id) => {
      const product = this.state.products.find(product => product.id === id);
      this.setState({
        isAddModalVisible: true,
        editingProduct: product,
      });
    }

    this.onModalClose = () => {
      this.setState({
         isAddModalVisible: false, 
         editingProduct: null,
      });
    }
    
    this.state = {
      isAddModalVisible: false,
      filteredItems: [],
      isFilterField: false,
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
  }
  
  render(){
    return (
      <div className="App">
        <ProductFilter 
          text={"Filter by name"}
          criterion={"name"}
          filterProduct={this.filterProducts}
        />
        <ProductFilter 
          text={"Filter by category"}
          criterion={"category"}
          filterProduct={this.filterProducts}
        />
        <ProductsList 
          products={this.state.isFilterField ? this.state.filteredItems : this.state.products}
          onDeleteProduct={this.onDeleteProduct}
          onEditProduct={this.onEditProduct}
        />
        <ProductsListButtons onAddClicked={() => {this.setState({isAddModalVisible: true})}} />
        {this.state.isAddModalVisible ?
          <AddProductModal 
            onAddItemClick={ this.onAddItem } 
            onCloseAddProductModalClick={ this.onModalClose}
            onEditItemClick={this.onApplyEditProduct}
            product={this.state.editingProduct}
          /> 
          : null
        }
      </div>
    );
  }
}

export default App;
