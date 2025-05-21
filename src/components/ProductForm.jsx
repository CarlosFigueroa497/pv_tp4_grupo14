import { useState, useEffect } from 'react';

function ProductForm({ onAddProduct, productoParaEditar, onUpdateProduct }) {
  const [descripcion, setDescripcion] = useState('');
  const [precioUnitario, setPrecioUnitario] = useState('');
  const [descuento, setDescuento] = useState('');
  const [stock, setStock] = useState('');
  const [id, setId] = useState(null);

  // controlar errores por campo
  const [errores, setErrores] = useState({
    descripcion: false,
    precioUnitario: false,
    descuento: false,
    stock: false,
  });

  useEffect(() => {
    if (productoParaEditar) {
      setId(productoParaEditar.id);
      setDescripcion(productoParaEditar.descripcion);
      setPrecioUnitario(productoParaEditar.precioUnitario);
      setDescuento(productoParaEditar.descuento);
      setStock(productoParaEditar.stock);
      // Limpiar errores al cargar producto para editar
      setErrores({
        descripcion: false,
        precioUnitario: false,
        descuento: false,
        stock: false,
      });
    }
  }, [productoParaEditar]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de campos: true = error, false = ok
    const nuevosErrores = {
      descripcion: descripcion.trim() === '',
      precioUnitario: precioUnitario === '' || isNaN(precioUnitario) || Number(precioUnitario) <= 0,
      descuento: descuento === '' || isNaN(descuento) || Number(descuento) < 0 || Number(descuento) > 100,
      stock: stock === '' || isNaN(stock) || Number(stock) < 0,
    };

    setErrores(nuevosErrores);

    // Si hay al menos un error, no continuar
    const hayError = Object.values(nuevosErrores).some((error) => error);
    if (hayError) {
      return;
    }

    const precio = parseFloat(precioUnitario);
    const desc = parseFloat(descuento);
    const precioConDescuento = precio * (1 - desc / 100);

    const nuevoProducto = {
      id: id || Date.now(),
      descripcion,
      precioUnitario: precio,
      descuento: desc,
      precioConDescuento,
      stock: parseInt(stock),
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

    // limpiar errores
    setErrores({
      descripcion: false,
      precioUnitario: false,
      descuento: false,
      stock: false,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{id ? 'Editar Producto' : 'Agregar Producto'}</h2>
      <input
        type="text"
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        className={errores.descripcion ? 'input-error' : ''}
      />
      <br />

      <input
        type="number"
        placeholder="Precio Unitario"
        value={precioUnitario}
        onChange={(e) => setPrecioUnitario(e.target.value)}
        className={errores.precioUnitario ? 'input-error' : ''}
      />
      <br />

      <input
        type="number"
        placeholder="Descuento %"
        value={descuento}
        onChange={(e) => setDescuento(e.target.value)}
        className={errores.descuento ? 'input-error' : ''}
      />
      <br />

      <input
        type="number"
        placeholder="Stock"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
        className={errores.stock ? 'input-error' : ''}
      />
      <br />

      <button type="submit">{id ? 'Actualizar' : 'Agregar'}</button>
    </form>
  );
}

export default ProductForm;

