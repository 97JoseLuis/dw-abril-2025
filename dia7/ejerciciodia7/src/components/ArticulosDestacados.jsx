const ArticulosDestacados = ({ articulos }) => {

    const articulos = [
        { titulo: "Funda", descripcion: "Movil", destacado: true },
        { titulo: "Cargador", descripcion: "Pintar", destacado: false },
        { titulo: "Destornillador", descripcion: "atornillar", destacado: true },
      ];

    const articulosDestacados = articulos.filter(articulo => articulo.destacado);
  
    return (
      <div>
        <h2>Artículos Destacados</h2>
        {articulosDestacados.length === 0 ? (
          <p>No hay artículos destacados en este momento.</p>
        ) : (
          <ul>
            {articulosDestacados.map((articulo, index) => (
              <li key={index}>
                <h3>{articulo.titulo}</h3>
                <p>{articulo.descripcion}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default ArticulosDestacados;