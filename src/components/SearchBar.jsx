function SearchBar({ terminoBusqueda, onBuscar }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Buscar por descripción o ID"
        value={terminoBusqueda}
        onChange={(e) => onBuscar(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
