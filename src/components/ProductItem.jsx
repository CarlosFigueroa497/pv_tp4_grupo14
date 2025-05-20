function ProductItem({ producto }) {
  return (
    <div style={{ border: '1px solid gray', marginBottom: '10px', padding: '10px' }}>
      <p><strong>ID:</strong> {producto.id}</p>
      <p><strong>Descripción:</strong> {producto.descripcion}</p>
      <p><strong>Precio Unitario:</strong> ${producto.precioUnitario}</p>
      <p><strong>Descuento:</strong> {producto.descuento}%</p>
      <p><strong>Precio con Descuento:</strong> ${producto.precioConDescuento.toFixed(2)}</p>
      <p><strong>Stock:</strong> {producto.stock}</p>
    </div>
  );
}

export default ProductItem;
