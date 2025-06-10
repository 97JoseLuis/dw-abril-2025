# Catalogo de Productos

Este proyecto es una aplicación completa para la gestión de un catálogo de productos, desarrollada utilizando React en el frontend y Express con Mongoose en el backend. A continuación se detallan las características y la estructura del proyecto.

## Estructura del Proyecto

```
catalogo-productos
├── backend
│   ├── src
│   │   ├── controllers
│   │   │   └── productoController.js
│   │   ├── models
│   │   │   └── Producto.js
│   │   ├── routes
│   │   │   └── productoRoutes.js
│   │   └── app.js
│   ├── package.json
│   └── README.md
├── frontend
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── components
│   │   │   ├── ProductoDetalle.jsx
│   │   │   ├── ProductoLista.jsx
│   │   │   ├── ProductoFormNuevo.jsx
│   │   │   └── ProductoFormEditar.jsx
│   │   ├── App.jsx
│   │   ├── api.js
│   │   ├── index.js
│   │   └── styles
│   │       └── main.css
│   ├── package.json
│   └── README.md
└── README.md
```

## Requisitos

### Backend

- **Express**: Se utiliza para crear un servidor y manejar las rutas de la API.
- **Mongoose**: Se utiliza para modelar y gestionar los datos en MongoDB.
- **Modelo de Producto**: Incluye los campos `nombre`, `descripcion`, `precio`, `stock`, `categoria` y `fechaCreacion`.
- **Endpoints**:
  - `GET /productos`: Obtener todos los productos.
  - `GET /productos/:id`: Obtener un producto específico.
  - `POST /productos`: Crear un nuevo producto.
  - `PUT /productos/:id`: Actualizar un producto existente.
  - `DELETE /productos/:id`: Eliminar un producto.

### Frontend

- **React**: Se utiliza para construir la interfaz de usuario.
- **Componentes**:
  - **ProductoDetalle**: Muestra los detalles de un producto específico.
  - **ProductoLista**: Muestra una lista de todos los productos.
  - **ProductoFormNuevo**: Permite agregar un nuevo producto.
  - **ProductoFormEditar**: Permite editar un producto existente.
- **Navegación**: Utiliza React Router para una navegación organizada.
- **Manejo de Errores**: Implementación de manejo de errores tanto en el backend como en el frontend.
- **Estilos**: Diseño atractivo utilizando CSS.

## Instalación

1. Clona el repositorio.
2. Navega a la carpeta `backend` y ejecuta `npm install` para instalar las dependencias del backend.
3. Navega a la carpeta `frontend` y ejecuta `npm install` para instalar las dependencias del frontend.
4. Configura la base de datos MongoDB y actualiza la configuración en `backend/src/app.js`.
5. Inicia el servidor backend con `npm start` en la carpeta `backend`.
6. Inicia la aplicación frontend con `npm start` en la carpeta `frontend`.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.