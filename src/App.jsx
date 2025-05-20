import './App.css';
import { useState } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';

function App() {
  const [productos, setProductos] = useState([]);

  const agregarProducto = (nuevoProducto) => {
    setProductos([...productos, nuevoProducto]);
  };

  return (
    <div className="App">
      <h1>Gestión de Productos</h1>
      <SearchBar />
      <ProductForm onAddProduct={agregarProducto} />
      <ProductList productos={productos} />
    </div>
  );
}

export default App;
