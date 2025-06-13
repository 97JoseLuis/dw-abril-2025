let items = [
  { id: 1, nombre: "Item 1" },
  { id: 2, nombre: "Item 2" },
];

// GET /api/items
export async function GET() {
  return Response.json(items);
}

// POST /api/items
export async function POST(request) {
  const data = await request.json();
  const nuevo = {
    id: items.length ? Math.max(...items.map(i => i.id)) + 1 : 1,
    nombre: data.nombre || "Sin nombre",
  };
  items.push(nuevo);
  return Response.json(nuevo, { status: 201 });
}

// PUT /api/items
export async function PUT(request, { params }) {
  const id = parseInt(params.id);
  const data = await request.json();
  const idx = items.findIndex(i => i.id === id);
  if (idx === -1) {
    return Response.json({ error: "No encontrado" }, { status: 404 });
  }
  items[idx] = { ...items[idx], ...data };
  return Response.json(items[idx]);
}

// DELETE /api/items
export async function DELETE(request, { params }) {
  const id = parseInt(params.id);
  const idx = items.findIndex(i => i.id === id);
  if (idx === -1) {
    return Response.json({ error: "No encontrado" }, { status: 404 });
  }
  const eliminado = items.splice(idx, 1)[0];
  return Response.json(eliminado);
}