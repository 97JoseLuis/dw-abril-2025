import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductoLista from "./components/ProductoLista";
import ProductoDetalle from "./components/ProductoDetalle";
import ProductoFormNuevo from "./components/ProductoFormNuevo";
import ProductoFormEditar from "./components/ProductoFormEditar";
import Header from './components/header';
import './styles/main.css';

function App() {
  return (
    <Router>
      <>
        <Header />
        <header>
          <h1>Catálogo de Productos</h1>
          <p>Explora y administra tus productos fácilmente</p>
        </header>
        <div className="container">
          <Switch>
            <Route path="/producto/nuevo" component={ProductoFormNuevo} />
            <Route path="/producto/editar/:id" component={ProductoFormEditar} />
            <Route path="/producto/:id" component={ProductoDetalle} />
            <Route path="/" exact component={ProductoLista} />
          </Switch>
        </div>
      </>
    </Router>
  );
}

export default App;