import React from 'react';

export interface Usuario {
    id: number;
    nombre: string;
    email: string;
}

const UsuarioItem: React.FC<{ usuario: Usuario }> = ({ usuario }) => (
    <li>
        <strong>{usuario.nombre}</strong> - {usuario.email}
    </li>
);

interface ListaUsuariosProps {
    usuarios: Usuario[];
}

const ListaUsuarios: React.FC<ListaUsuariosProps> = ({ usuarios }) => (
    <ul>
        {usuarios.map((usuario) => (
            <UsuarioItem key={usuario.id} usuario={usuario} />
        ))}
    </ul>
);

export default ListaUsuarios;