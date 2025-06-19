import { connectDB } from "./db";
import Item from "./item.model";

export async function GET() {
  try {
    await connectDB();
    const items = await Item.find();
    return Response.json(items);
  } catch (error) {
    return Response.json({ error: "Error al obtener los items" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const data = await request.json();
    if (!data.nombre || typeof data.nombre !== "string" || !data.nombre.trim()) {
      return Response.json({ error: "El campo 'nombre' es obligatorio y debe ser texto." }, { status:400 });
    }
    const nuevo = new Item({ nombre: data.nombre.trim() });
    await nuevo.save();
    return Response.json(nuevo, { status: 201 });
  } catch (error) {
    console.error("Error en POST /api/items:", error);
    return Response.json({ error: error.message || "Error al crear el item" }, { status: 500 });
  }
}