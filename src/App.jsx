import './App.css';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <h1>Gestión de Productos</h1>
      <SearchBar />
      <ProductForm />
      <ProductList />
    </div>
  );
}

export default App;

