import { useEffect, useState } from 'react';

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ email: '', password: '', isAdmin: false });
  const [editId, setEditId] = useState(null);

  const token = localStorage.getItem('token');

  // Cargar usuarios
  useEffect(() => {
    fetch('http://localhost:3001/api/admin/users', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => res.json())
      .then(setUsers);
  }, []);

  // Crear o actualizar usuario
  async function handleSubmit(e) {
    e.preventDefault();

    const url = editId
      ? `http://localhost:3001/api/admin/users/${editId}`
      : 'http://localhost:3001/api/admin/users';

    const method = editId ? 'PUT' : 'POST';

    const res = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert(editId ? 'Usuario actualizado' : 'Usuario creado');
      setForm({ email: '', password: '', isAdmin: false });
      setEditId(null);
      // recargar lista
      const resUsers = await fetch('http://localhost:3001/api/admin/users', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(await resUsers.json());
    } else {
      alert('Error');
    }
  }

  function startEdit(user) {
    setEditId(user._id);
    setForm({ email: user.email, password: '', isAdmin: user.isAdmin });
  }

  async function handleDelete(id) {
    if (!confirm('Seguro que quieres borrar?')) return;
    await fetch(`http://localhost:3001/api/admin/users/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });
    setUsers(users.filter(u => u._id !== id));
  }

  return (
    <div>
      <h3>{editId ? 'Editar usuario' : 'Crear usuario'}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={e => setForm({ ...form, password: e.target.value })}
          required={!editId} // obligatorio solo si se crea usuario
        />
        <label>
          Admin
          <input
            type="checkbox"
            checked={form.isAdmin}
            onChange={e => setForm({ ...form, isAdmin: e.target.checked })}
          />
        </label>
        <button type="submit">{editId ? 'Actualizar' : 'Crear'}</button>
        {editId && <button onClick={() => { setEditId(null); setForm({ email: '', password: '', isAdmin: false }); }}>Cancelar</button>}
      </form>

      <h3>Lista de usuarios</h3>
      <table border="1" cellPadding="4">
        <thead>
          <tr>
            <th>Email</th>
            <th>Admin</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u._id}>
              <td>{u.email}</td>
              <td>{u.isAdmin ? 'Sí' : 'No'}</td>
              <td>
                <button onClick={() => startEdit(u)}>Editar</button>
                <button onClick={() => handleDelete(u._id)}>Borrar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
