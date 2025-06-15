import { connectDB } from "./db";
import Item from "./item.model";

// GET /api/items
export async function GET() {
  try {
    await connectDB();
    const items = await Item.find();
    return Response.json(items);
  } catch (error) {
    return Response.json({ error: "Error al obtener los items" }, { status: 500 });
  }
}

// POST /api/items
export async function POST(request) {
  try {
    await connectDB();
    const data = await request.json();
    if (!data.nombre || typeof data.nombre !== "string" || !data.nombre.trim()) {
      return Response.json({ error: "El campo 'nombre' es obligatorio y debe ser texto." }, { status: 400 });
    }
    const nuevo = await Item.create({ nombre: data.nombre.trim() });
    return Response.json(nuevo, { status: 201 });
  } catch (error) {
    return Response.json({ error: "Error al crear el item" }, { status: 500 });
  }
}

// PUT /api/items/:id
export async function PUT(request, { params }) {
  try {
    await connectDB();
    const id = params.id;
    const data = await request.json();
    if (!data.nombre || typeof data.nombre !== "string" || !data.nombre.trim()) {
      return Response.json({ error: "El campo 'nombre' es obligatorio y debe ser texto." }, { status:400 });
    }
    const actualizado = await Item.findByIdAndUpdate(id, { nombre: data.nombre.trim() }, { new: true });
    if (!actualizado) {
      return Response.json({ error: "No encontrado" }, { status: 404 });
    }
    return Response.json(actualizado);
  } catch (error) {
    return Response.json({ error: "Error al actualizar el item" }, { status: 500 });
  }
}

// DELETE /api/items/:id
export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const id = params.id;
    const eliminado = await Item.findByIdAndDelete(id);
    if (!eliminado) {
      return Response.json({ error: "No encontrado" }, { status: 404 });
    }
    return Response.json(eliminado);
  } catch (error) {
    return Response.json({ error: "Error al eliminar el item" }, { status: 500 });
  }
}