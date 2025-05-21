function ProductItem({ producto, onEliminar, onEditar }) {
  return (
    <div className="producto-item">
       <p><strong>ID:</strong> {producto.id}</p>
       <p><strong>Descripción:</strong> {producto.descripcion}</p>
       <p><strong>Precio Unitario:</strong> ${producto.precioUnitario}</p>
       <p><strong>Descuento:</strong> {producto.descuento}%</p>
       <p><strong>Precio con Descuento:</strong> <span className="descuento-resaltado">${producto.precioConDescuento.toFixed(2)}</span></p>
       <p><strong>Stock:</strong> {producto.stock}</p>
      <button onClick={() => onEditar(producto)}>Editar</button>
      <button onClick={() => onEliminar(producto.id)}>Eliminar</button>
    </div>
  );
}

export default ProductItem;

