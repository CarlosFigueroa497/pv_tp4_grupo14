import './App.css';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import { useState, useMemo } from 'react';

function App() {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  const agregarProducto = (nuevoProducto) => {
    setProductos([...productos, nuevoProducto]);
  };

  const productosFiltrados = useMemo(() => {
    return productos.filter((prod) => {
      const texto = busqueda.toLowerCase();
      return (
        prod.descripcion.toLowerCase().includes(texto) ||
        prod.id.toString().includes(texto)
      );
    });
  }, [productos, busqueda]);

  return (
    <div className="App">
      <h1>Gestión de Productos</h1>
      <SearchBar terminoBusqueda={busqueda} onBuscar={setBusqueda} />
      <ProductForm onAddProduct={agregarProducto} />
      <ProductList productos={productosFiltrados} />
    </div>
  );
}


export default App;

