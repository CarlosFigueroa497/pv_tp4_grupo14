import './App.css';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import { useState, useMemo, useCallback, useEffect } from 'react';

function App() {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [productoParaEditar, setProductoParaEditar] = useState(null);

  const agregarProducto = useCallback((nuevoProducto) => {
    setProductos((prev) => [...prev, nuevoProducto]);
  }, []);

  const eliminarProducto = useCallback((id) => {
    setProductos((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const actualizarProducto = useCallback((productoEditado) => {
    setProductos((prev) =>
      prev.map((p) => (p.id === productoEditado.id ? productoEditado : p))
    );
    setProductoParaEditar(null); // salir del modo edición
  }, []);

  const productosFiltrados = useMemo(() => {
    return productos.filter((prod) => {
      const texto = busqueda.toLowerCase();
      return (
        prod.descripcion.toLowerCase().includes(texto) ||
        prod.id.toString().includes(texto)
      );
    });
  }, [productos, busqueda]);

  // Para seguir lo que pasa en consola (useEffect)
  useEffect(() => {
    console.log('Productos actualizados:', productos);
  }, [productos]);

  return (
    <div className="App">
    <h1>Gestión de Productos</h1>

    <div className="contenedor-principal">
      <div className="columna-izquierda">
        <h2>Buscar Producto</h2>
        <SearchBar terminoBusqueda={busqueda} onBuscar={setBusqueda} />
        <h2>Formulario de producto</h2>
        <ProductForm
          onAddProduct={agregarProducto}
          onUpdateProduct={actualizarProducto}
          productoParaEditar={productoParaEditar}
        />
      </div>

      <div className="columna-derecha">
        <ProductList
          productos={productosFiltrados}
          onEliminar={eliminarProducto}
          onEditar={setProductoParaEditar}
        />
      </div>
    </div>
  </div>
  );
}


export default App;

