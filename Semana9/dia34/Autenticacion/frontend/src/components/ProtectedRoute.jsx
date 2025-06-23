import { Navigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

export default function ProtectedRoute({ children, adminOnly = false }) {
  const token = localStorage.getItem('token');
  if (!token) return <Navigate to="/login" replace />;

  try {
    const payload = jwtDecode(token);
    if (adminOnly && !payload.isAdmin) return <Navigate to="/dashboard" replace />;
  } catch {
    return <Navigate to="/login" replace />;
  }

  return children;
}