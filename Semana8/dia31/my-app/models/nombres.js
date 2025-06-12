let listaNombres = [];
let nextId = 1;

export function obtenerNombres() {
  return listaNombres;
}

export function agregarNombre(nombre) {
  const nuevo = { id: nextId++, nombre };
  listaNombres.push(nuevo);
  return nuevo;
}

export function eliminarNombrePorId(id) {
  const index = listaNombres.findIndex((n) => n.id === id);
  if (index === -1) return null;
  const eliminado = listaNombres.splice(index, 1)[0];
  return eliminado;
}