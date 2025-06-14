import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const items = await prisma.item.findMany();
    res.json(items);
  } else if (req.method === 'POST') {
    const { nombre } = req.body;
    const nuevo = await prisma.item.create({ data: { nombre } });
    res.status(201).json(nuevo);
  }
  // Agrega PUT y DELETE según tu lógica
}