import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="header-nav">
      <ul className="header-list">
        <li>
          <Link to="/">Lista de Productos</Link>
        </li>
        <li>
          <Link to="/producto/nuevo">Nuevo Producto</Link>
        </li>
      </ul>
    </nav>
  );
}