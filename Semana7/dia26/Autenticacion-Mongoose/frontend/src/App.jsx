import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import { useEffect, useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const response = await fetch('/api/auth/check', {
        method: 'GET',
        credentials: 'include',
      });
      if (response.ok) {
        setIsAuthenticated(true);
      }
    };
    checkAuth();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Login setIsAuthenticated={setIsAuthenticated} />} />
      </Routes>
    </Router>
  );
}

export default App;