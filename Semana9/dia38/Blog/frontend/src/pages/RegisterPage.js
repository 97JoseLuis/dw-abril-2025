import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/authActions';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = {};

    // Validaciones
    if (!username) formErrors.username = 'El nombre de usuario es obligatorio';
    if (!email || !/\S+@\S+\.\S+/.test(email)) formErrors.email = 'Debe ingresar un correo válido';
    if (!password || password.length < 6) formErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    if (password !== confirmPassword) formErrors.confirmPassword = 'Las contraseñas no coinciden';

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      const response = await axios.post('/api/auth/register', { username, email, password });
      dispatch(login(response.data.token));
      navigate('/ruta-deseada');
    } catch (error) {
      console.error('Error al registrarse', error);
    }
  };

  return (
    <div>
      <h2>Registrarse</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Nombre de usuario"
        />
        {errors.username && <p className="error">{errors.username}</p>}

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo electrónico"
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirmar contraseña"
        />
        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegisterPage;
