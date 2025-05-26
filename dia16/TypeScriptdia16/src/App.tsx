import React from "react";
import "./App.css";
import "./index.css";
import Saludo from "./components/Saludo";
import Contador from "./components/Contador";
import Formulario from "./components/Formulario";
import Suma from "./components/Suma";
import ListadeTareas from "./components/ListadeTareas";
import UsuarioCard from "./components/UsuarioCard";
import BotonCambio from "./components/Migracion";
import ListaUsuarios from "./components/ListaUsuarios";

interface Usuario {
  nombre: string;
  edad: number;
  activo: boolean;
}

const App: React.FC = () => {
  const usuarioEjemplo: Usuario = { nombre: "José", edad: 27, activo: true };
  return (
    <div>
      <h1>¡Mi Pagina Web!</h1>
      <Saludo nombre= "José Luis" />
      <Contador />
      <Formulario />
      <Suma />
      <ListadeTareas />
      <UsuarioCard usuario={usuarioEjemplo} />
      <BotonCambio />
      <ListaUsuarios usuarios={[]} />
      
    </div>
  );
};
      
export default App;