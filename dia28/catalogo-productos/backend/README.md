# Catalogo de Productos

Este proyecto es una aplicación completa para administrar un catálogo de productos, construida utilizando React en el frontend y Express con Mongoose en el backend. A continuación se detallan las características y la estructura del proyecto.

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

## Backend

El backend está construido con Express y Mongoose, y proporciona una API RESTful para gestionar productos. Los principales componentes son:

- **app.js**: Punto de entrada de la aplicación, configura el servidor y las rutas.
- **productoController.js**: Controlador que maneja las operaciones CRUD para los productos.
- **Producto.js**: Modelo de Mongoose que define la estructura de los productos.
- **productoRoutes.js**: Define las rutas de la API para los productos.

### Endpoints

- `GET /productos`: Obtener todos los productos.
- `GET /productos/:id`: Obtener un producto específico.
- `POST /productos`: Crear un nuevo producto.
- `PUT /productos/:id`: Actualizar un producto existente.
- `DELETE /productos/:id`: Eliminar un producto.

## Frontend

El frontend está construido con React y permite a los usuarios interactuar con la API del backend. Los componentes principales son:

- **ProductoDetalle.jsx**: Muestra los detalles de un producto específico.
- **ProductoLista.jsx**: Muestra una lista de todos los productos.
- **ProductoFormNuevo.jsx**: Formulario para agregar un nuevo producto.
- **ProductoFormEditar.jsx**: Formulario para editar un producto existente.

### Navegación

Se utiliza React Router para una navegación fluida entre los diferentes componentes de la aplicación.

## Instalación

Para instalar las dependencias del backend, navega a la carpeta `backend` y ejecuta:

```
npm install
```

Para instalar las dependencias del frontend, navega a la carpeta `frontend` y ejecuta:

```
npm install
```

## Ejecución

Para iniciar el servidor backend, ejecuta:

```
npm start
```

Para iniciar la aplicación frontend, navega a la carpeta `frontend` y ejecuta:

```
npm start
```

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.