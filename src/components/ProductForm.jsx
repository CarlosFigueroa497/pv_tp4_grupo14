import { useState } from 'react';

function ProductForm({ onAddProduct }) {
  const [descripcion, setDescripcion] = useState('');
  const [precioUnitario, setPrecioUnitario] = useState('');
  const [descuento, setDescuento] = useState('');
  const [stock, setStock] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const precio = parseFloat(precioUnitario);
    const desc = parseFloat(descuento);
    const precioConDescuento = precio * (1 - desc / 100);

    const nuevoProducto = {
      id: Date.now(), // genera un id unico
      descripcion,
      precioUnitario: precio,
      descuento: desc,
      precioConDescuento,
      stock: parseInt(stock)
    };

    onAddProduct(nuevoProducto); // le pasamos el prodcto al padre
    // limpiar formulario
    setDescripcion('');
    setPrecioUnitario('');
    setDescuento('');
    setStock('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Producto</h2>
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

      <button type="submit">Agregar</button>
    </form>
  );
}

export default ProductForm;

