import './App.css';
import { ProductsList } from './Components/ProductsList/ProductsList';
import { ProductsListButtons } from './Components/ProductsListButtons/ProductsListButtons';
import { AddProductModal } from './Components/AddProductModal/AddProductModal';
import { ProductFilter } from './Components/ProductFilter/ProductFilter'
import { CategoriesEditor } from "./Components/CategoriesEditor/EditCategories";
import { useSelector } from 'react-redux';
import { selectModal } from "./Store/Modal/selector";

const App = () => {  
  const isAddModalVisible = useSelector(selectModal);

  return (
    <div className="App">
      <ProductFilter criterion={"name"} />
      <ProductFilter criterion={"category"} />

      <ProductsList />
      <ProductsListButtons />

      {isAddModalVisible
          ? <AddProductModal/>
          :null}
      
      <CategoriesEditor />
    </div>
  );
}

export default App;
