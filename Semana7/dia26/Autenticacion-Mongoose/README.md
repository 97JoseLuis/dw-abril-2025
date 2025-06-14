# Mi App de Autenticación

Este proyecto es una aplicación de autenticación que utiliza un backend en Express y una interfaz frontend construida con Vite y React. La aplicación permite a los usuarios registrarse, iniciar sesión y acceder a una página protegida.

## Estructura del Proyecto

El proyecto está dividido en dos partes principales: `backend` y `frontend`.

### Backend

El backend está construido con Express y utiliza Mongoose para interactuar con una base de datos MongoDB. La estructura de carpetas es la siguiente:

- `src/app.js`: Punto de entrada de la aplicación backend. Configura el servidor y las rutas.
- `src/controllers/`: Contiene los controladores para manejar la lógica de autenticación y la página protegida.
  - `authController.js`: Maneja el registro y el inicio de sesión de usuarios.
  - `dashboardController.js`: Maneja las solicitudes a la ruta protegida `/dashboard`.
- `src/middlewares/`: Contiene middleware para la autenticación.
  - `authMiddleware.js`: Verifica si el usuario está autenticado antes de permitir el acceso a la ruta `/dashboard`.
- `src/models/`: Define el modelo de usuario utilizando Mongoose.
  - `User.js`: Esquema del usuario con propiedades como `username` y `password`.
- `src/routes/`: Define las rutas de la aplicación.
  - `authRoutes.js`: Rutas para el registro y el inicio de sesión.
  - `dashboardRoutes.js`: Ruta protegida `/dashboard`.
- `package.json`: Configuración de npm para el backend.

### Frontend

El frontend está construido con React y Vite. La estructura de carpetas es la siguiente:

- `src/App.jsx`: Componente principal que configura las rutas y el estado global.
- `src/main.jsx`: Punto de entrada de la aplicación frontend.
- `src/pages/`: Contiene los componentes de las diferentes páginas.
  - `Login.jsx`: Componente para el formulario de inicio de sesión.
  - `Register.jsx`: Componente para el formulario de registro.
  - `Dashboard.jsx`: Componente para la página protegida `/dashboard`.
- `src/services/`: Contiene funciones para hacer solicitudes HTTP al backend.
  - `api.js`: Funciones para `login`, `register` y `fetchDashboard`.
- `index.html`: Plantilla HTML principal.
- `package.json`: Configuración de npm para el frontend.

## Instalación

Para instalar y ejecutar el proyecto, sigue estos pasos:

1. Clona el repositorio:
   ```
   git clone <URL_DEL_REPOSITORIO>
   cd mi-app-autenticacion
   ```

2. Instala las dependencias del backend:
   ```
   cd backend
   npm install
   ```

3. Instala las dependencias del frontend:
   ```
   cd ../frontend
   npm install
   ```

4. Configura la base de datos MongoDB y actualiza la configuración en `backend/src/app.js`.

5. Inicia el servidor backend:
   ```
   cd backend
   npm start
   ```

6. Inicia el servidor frontend:
   ```
   cd ../frontend
   npm run dev
   ```

## Uso

- Accede a la aplicación en tu navegador en `http://localhost:3000`.
- Regístrate como un nuevo usuario o inicia sesión con un usuario existente.
- Una vez autenticado, podrás acceder a la página protegida `/dashboard`.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.