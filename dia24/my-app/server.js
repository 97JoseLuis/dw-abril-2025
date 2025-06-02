const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

let items = [];
let idCounter = 1;

app.get("/items", (_req, res) => {
  res.json(items);
});

app.post("/items", (req, res) => {
  const newItem = { id: idCounter++, ...req.body };
  items.push(newItem);
  res.status(201).json(newItem);
});

app.put("/items/:id", (req, res) => {
  const { id } = req.params;
  const index = items.findIndex(item => item.id == id);
  
  if (index !== -1) {
    items[index] = { id: Number(id), ...req.body };
    res.json(items[index]);
  } else {
    res.status(404).json({ message: "Elemento no encontrado" });
  }
});

app.delete("/items/:id", (req, res) => {
  const { id } = req.params;
  items = items.filter(item => item.id != id);
  res.json({ message: "Elemento eliminado" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});