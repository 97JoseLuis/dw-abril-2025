import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="header">
      <ul>
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