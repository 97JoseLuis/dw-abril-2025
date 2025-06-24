import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../redux/actions/authActions';

const Navbar = () => {

  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();

  // Log para depuración
  console.log('NAVBAR: token =', token);
  console.log('NAVBAR: user =', user);

  return (
    <nav style={{
      backgroundColor: '#333',
      padding: '15px 20px',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div>
        <Link to="/" style={{ 
          color: 'white', 
          textDecoration: 'none', 
          fontSize: '24px',
          fontWeight: 'bold'
        }}>
          Mi Blog
        </Link>
      </div>
      
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
          Inicio
        </Link>
        
        {token ? (
          <>
            <Link to="/create" style={{ color: 'white', textDecoration: 'none' }}>
              Crear Post
            </Link>
            <span>Usuario: {user && user.username ? user.username : 'Usuario'}</span>
            <span>Token: {token ? 'Activo' : 'No disponible'}</span>
            <button
              style={{
                marginLeft: '16px',
                background: '#b00020',
                border: 'none',
                color: 'white',
                borderRadius: '5px',
                padding: '8px 16px',
                cursor: 'pointer'
              }}
              onClick={() => {
                dispatch(logout());
                window.location.href = '/';
              }}
            >
              Cerrar sesión
            </button>
          </>
        ) : (
          <>
            <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>
              Iniciar Sesión
            </Link>
            <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>
              Registrarse
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
