# Mi Aplicación de Autenticación

Este proyecto es una aplicación de autenticación que utiliza un backend en Express y un frontend en Vite. La aplicación permite a los usuarios registrarse, iniciar sesión y acceder a una página protegida.

## Estructura del Proyecto

El proyecto está dividido en dos partes principales: `backend` y `frontend`.

### Backend

- **`backend/src/app.js`**: Punto de entrada de la aplicación backend. Configura el servidor Express y conecta a la base de datos MongoDB.
- **`backend/src/controllers/authController.js`**: Maneja el registro y el inicio de sesión de usuarios.
- **`backend/src/controllers/dashboardController.js`**: Proporciona la lógica para la ruta protegida `/dashboard`.
- **`backend/src/middlewares/authMiddleware.js`**: Middleware que verifica si el usuario está autenticado.
- **`backend/src/models/User.js`**: Define el modelo de usuario utilizando Mongoose.
- **`backend/src/routes/authRoutes.js`**: Rutas para la autenticación (`/register` y `/login`).
- **`backend/src/routes/dashboardRoutes.js`**: Ruta protegida `/dashboard`.
- **`backend/package.json`**: Configuración de npm para el backend.
- **`backend/README.md`**: Documentación del backend.

### Frontend

- **`frontend/src/App.jsx`**: Componente principal que configura las rutas de la aplicación.
- **`frontend/src/main.jsx`**: Punto de entrada de la aplicación frontend.
- **`frontend/src/pages/Login.jsx`**: Componente para el formulario de inicio de sesión.
- **`frontend/src/pages/Register.jsx`**: Componente para el formulario de registro.
- **`frontend/src/pages/Dashboard.jsx`**: Componente que muestra la página protegida `/dashboard`.
- **`frontend/src/services/api.js`**: Funciones para hacer solicitudes HTTP al backend.
- **`frontend/index.html`**: Plantilla HTML principal.
- **`frontend/package.json`**: Configuración de npm para el frontend.
- **`frontend/README.md`**: Documentación del frontend.

## Instalación

Para instalar las dependencias del backend y frontend, sigue estos pasos:

1. Navega a la carpeta `backend` y ejecuta:
   ```
   npm install
   ```

2. Navega a la carpeta `frontend` y ejecuta:
   ```
   npm install
   ```

## Ejecución

Para ejecutar la aplicación, sigue estos pasos:

1. Inicia el servidor backend:
   ```
   cd backend
   npm start
   ```

2. Inicia la aplicación frontend:
   ```
   cd frontend
   npm run dev
   ```

Ahora puedes acceder a la aplicación en tu navegador en `http://localhost:3000` (o el puerto que esté configurado en el frontend).

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.