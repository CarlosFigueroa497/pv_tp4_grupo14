import { useState, useEffect } from 'react';

function ProductForm({ onAddProduct, productoParaEditar, onUpdateProduct }) {
  const [descripcion, setDescripcion] = useState('');
  const [precioUnitario, setPrecioUnitario] = useState('');
  const [descuento, setDescuento] = useState('');
  const [stock, setStock] = useState('');
  const [id, setId] = useState(null);

  useEffect(() => {
    if (productoParaEditar) {
      setId(productoParaEditar.id);
      setDescripcion(productoParaEditar.descripcion);
      setPrecioUnitario(productoParaEditar.precioUnitario);
      setDescuento(productoParaEditar.descuento);
      setStock(productoParaEditar.stock);
    }
  }, [productoParaEditar]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const precio = parseFloat(precioUnitario);
    const desc = parseFloat(descuento);
    const precioConDescuento = precio * (1 - desc / 100);

    const nuevoProducto = {
      id: id || Date.now(),
      descripcion,
      precioUnitario: precio,
      descuento: desc,
      precioConDescuento,
      stock: parseInt(stock)
    };

    if (id) {
      onUpdateProduct(nuevoProducto);
    } else {
      onAddProduct(nuevoProducto);
    }

    // limpiar el formulario
    setDescripcion('');
    setPrecioUnitario('');
    setDescuento('');
    setStock('');
    setId(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{id ? 'Editar Producto' : 'Agregar Producto'}</h2>
      <input
        type="text"
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      /><br />

      <input
        type="number"
        placeholder="Precio Unitario"
        value={precioUnitario}
        onChange={(e) => setPrecioUnitario(e.target.value)}
      /><br />

      <input
        type="number"
        placeholder="Descuento %"
        value={descuento}
        onChange={(e) => setDescuento(e.target.value)}
      /><br />

      <input
        type="number"
        placeholder="Stock"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
      /><br />

      <button type="submit">{id ? 'Actualizar' : 'Agregar'}</button>
    </form>
  );
}

export default ProductForm;
