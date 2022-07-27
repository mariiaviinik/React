import './App.css';
import { ProductsList } from './Components/ProductsList/ProductsList';
import { AddProductModal } from './Components/AddProductModal/AddProductModal';
import { ProductFilter } from './Components/ProductFilter/ProductFilter';
import { CategoriesEditor } from "./Components/CategoriesEditor/EditCategories";
import { Routes, Route, Link } from 'react-router-dom';


const App = () => {  
  return (
    <div className="App">
      <nav >
        <div className='link-container'>
          <Link className='link' to="/">List</Link>
          <Link className='link' to="/addItem">Add product</Link>
          <Link className='link' to="/editCategories">Edit categories</Link>
          <Link className='link' to="/filter">Filter</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/*" element={<ProductsList />} />
        <Route path="/filter/:category" element={<ProductsList />} />
        <Route path="/filter" element={<ProductFilter />} />
        <Route path="/:addItem" element={<AddProductModal/>} />
        <Route path="/editItem" element={<AddProductModal/>} />
        <Route path="/editCategories" element={<CategoriesEditor />} />
      </Routes>
    </div>
  );
}

export default App;
