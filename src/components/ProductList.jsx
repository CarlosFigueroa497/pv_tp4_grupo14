import ProductItem from './ProductItem';

function ProductList({ productos }) {
  if (productos.length === 0) {
    return <p>No hay productos para mostrar.</p>;
  }

  return (
    <div>
      <h2>Lista de Productos</h2>
      {productos.map((prod) => (
        <ProductItem key={prod.id} producto={prod} />
      ))}
    </div>
  );
}

export default ProductList;
