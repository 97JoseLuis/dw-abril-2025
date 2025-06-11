import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductoLista from './components/ProductoLista';
import ProductoDetalle from './components/ProductoDetalle';
import ProductoFormNuevo from './components/ProductoFormNuevo';
import ProductoFormEditar from './components/ProductoFormEditar';
import './styles/main.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={ProductoLista} />
          <Route path="/producto/nuevo" component={ProductoFormNuevo} />
          <Route path="/producto/:id" component={ProductoDetalle} />
          <Route path="/producto/editar/:id" component={ProductoFormEditar} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;