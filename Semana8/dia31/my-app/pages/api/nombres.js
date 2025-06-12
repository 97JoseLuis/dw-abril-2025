let listaNombres = [];

let nextId = 1;

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ nombres: listaNombres });
  } else if (req.method === "POST") {
    const { nombre } = req.body;
    if (nombre) {
      const nuevo = { id: nextId++, nombre };
      listaNombres.push(nuevo);
      res.status(200).json({ recibido: true, nombre: nuevo });
    } else {
      res.status(400).json({ error: "Falta el nombre" });
    }
  } else if (req.method === "DELETE") {
    const { id } = req.body;
    if (typeof id !== "number") {
      res.status(400).json({ error: "Falta el id numérico" });
      return;
    }
    const index = listaNombres.findIndex((n) => n.id === id);
    if (index === -1) {
      res.status(404).json({ error: "No encontrado" });
      return;
    }
    const eliminado = listaNombres.splice(index, 1)[0];
    res.status(200).json({ eliminado });
  } else {
    res.status(405).json({ error: "Método no permitido" });
  }
}