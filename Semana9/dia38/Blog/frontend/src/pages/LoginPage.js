import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login, setUser } from '../redux/actions/authActions';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      const response = await axios.post('/api/auth/login', { email, password });
      dispatch(login(response.data.token));
      dispatch(setUser(response.data.user));
      navigate('/');
    } catch (error) {
      setError('Credenciales incorrectas o error de servidor.');
      console.error('Error al iniciar sesión', error);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', background: '#fff', padding: '32px', borderRadius: '12px', boxShadow: '0 2px 12px rgba(34,34,59,0.07)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '24px' }}>Iniciar sesión</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Correo</label>
        <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Correo" required />
        <label htmlFor="password">Contraseña</label>
        <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Contraseña" required />
        <button type="submit" style={{ width: '100%', marginTop: '12px' }}>Iniciar sesión</button>
      </form>
    </div>
  ); 
};

export default LoginPage;
                  
