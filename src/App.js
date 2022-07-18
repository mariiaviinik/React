import './App.css';
import { ProductsList } from './Components/ProductsList/ProductsList';
import { AddProductModal } from './Components/AddProductModal/AddProductModal';
import { ProductFilter } from './Components/ProductFilter/ProductFilter';
import { CategoriesEditor } from "./Components/CategoriesEditor/EditCategories";
import { useSelector } from 'react-redux';
import { selectModal } from "./Store/Modal/selector";
import { Routes, Route, Link } from 'react-router-dom';

const style = {
  width: '400px',
  display: 'flex',
  marginBottom: '10px',
  justifyContent: 'space-around',
}

const App = () => {  
  const isAddModalVisible = useSelector(selectModal);

  return (
    <div className="App">
      <nav >
        <div style={style}>
          <Link to="/">List</Link>
          <Link to="/addItem">Add product</Link>
          <Link to="/editCategories">Edit categories</Link>
          <Link to="/filter">Filter</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/*" element={<ProductsList />} />
        <Route path="/filter/:category" element={<ProductsList />} />
        <Route path="/filter" element={<ProductFilter />} />
        <Route path="/addItem" element={<AddProductModal/>} />
        <Route path="/editItem" element={<AddProductModal/>} />
        <Route path="/editCategories" element={<CategoriesEditor />} />
      </Routes>
    </div>
  );
}

export default App;
