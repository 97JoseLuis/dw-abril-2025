# Catalogo de Productos

Este proyecto es una aplicación completa para administrar un catálogo de productos, construida con React en el frontend y Express con Mongoose en el backend. A continuación se detallan las instrucciones para configurar y ejecutar la aplicación.

## Estructura del Proyecto

```
catalogo-productos
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── models
│   │   ├── routes
│   │   └── app.js
│   ├── package.json
│   └── README.md
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── App.jsx
│   │   ├── api.js
│   │   └── styles
│   ├── package.json
│   └── README.md
└── README.md
```

## Requisitos

- Node.js
- MongoDB

## Configuración del Backend

1. Navega a la carpeta `backend`.
2. Instala las dependencias:
   ```
   npm install
   ```
3. Configura la conexión a la base de datos MongoDB en `app.js`.
4. Inicia el servidor:
   ```
   npm start
   ```

## Configuración del Frontend

1. Navega a la carpeta `frontend`.
2. Instala las dependencias:
   ```
   npm install
   ```
3. Inicia la aplicación React:
   ```
   npm start
   ```

## Endpoints de la API

- `GET /productos`: Obtener todos los productos.
- `GET /productos/:id`: Obtener un producto específico.
- `POST /productos`: Crear un nuevo producto.
- `PUT /productos/:id`: Actualizar un producto existente.
- `DELETE /productos/:id`: Eliminar un producto.

## Componentes del Frontend

- **ProductoDetalle**: Muestra los detalles de un producto específico.
- **ProductoLista**: Muestra una lista de todos los productos.
- **ProductoFormNuevo**: Permite agregar un nuevo producto.
- **ProductoFormEditar**: Permite editar un producto existente.

## Estilos

Los estilos de la aplicación se encuentran en `frontend/src/styles/main.css`.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.