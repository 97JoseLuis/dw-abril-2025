import { connectDB } from "../db";
import Item from "../item.model";

export async function PUT(request, context) {
  try {
    await connectDB();
    const { params } = await context;
    const id = params.id;
    const data = await request.json();
    if (!data.nombre || typeof data.nombre !== "string" || !data.nombre.trim()) {
      return Response.json({ error: "El campo 'nombre' es obligatorio y debe ser texto." }, { status: 400 });
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

export async function DELETE(request, context) {
  try {
    await connectDB();
    const { params } = await context;
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
