export default function handler(req, res) {
    try {
      res.status(200).json({ message: '¡Hola desde la API de Express (Vercel)!' });
    } catch (error) {
      res.status(500).json({ error: 'Error interno del servidor' });
      console.error(error);
    }
  }