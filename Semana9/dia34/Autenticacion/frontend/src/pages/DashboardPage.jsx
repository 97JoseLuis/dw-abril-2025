import { jwtDecode } from 'jwt-decode';

export default function DashboardPage() {
  const token = localStorage.getItem('token');
  const user = token ? jwtDecode(token) : null;

  return (
    <div>
      <h2>Bienvenido, {user?.email}</h2>
      {user?.isAdmin ? (
        <a href="/admin">Ir al panel admin</a>
      ) : (
        <p>No tienes privilegios de administrador</p>
      )}
    </div>
  );
}
