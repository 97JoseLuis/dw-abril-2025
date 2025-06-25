import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/authActions';
import api from '../axios'; // 👈 nuestra instancia personalizada

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!email || !password) {
      setErrorMsg('Debes ingresar correo y contraseña');
      return;
    }

    try {
      const response = await api.post('/auth/login', { email, password });
      dispatch(login(response.data.token));
      navigate('/ruta-protegida'); // actualiza con la ruta real
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setErrorMsg('Credenciales incorrectas o error del servidor');
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo electrónico"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
        />
        {errorMsg && <p className="error">{errorMsg}</p>}
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default LoginPage;
