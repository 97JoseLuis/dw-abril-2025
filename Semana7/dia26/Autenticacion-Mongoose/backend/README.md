# Backend Authentication App

Este proyecto es una aplicación de autenticación que utiliza Express y Mongoose para manejar el registro y el inicio de sesión de usuarios, así como una ruta protegida para acceder a un dashboard.

## Estructura del Proyecto

- **backend/**: Contiene el código del servidor.
  - **src/**: Código fuente del backend.
    - **app.js**: Punto de entrada de la aplicación.
    - **controllers/**: Controladores para manejar la lógica de negocio.
      - **authController.js**: Maneja el registro y el inicio de sesión.
      - **dashboardController.js**: Maneja la lógica para la ruta protegida.
    - **middlewares/**: Middleware para la autenticación.
      - **authMiddleware.js**: Verifica si el usuario está autenticado.
    - **models/**: Modelos de datos.
      - **User.js**: Define el modelo de usuario.
    - **routes/**: Rutas de la aplicación.
      - **authRoutes.js**: Rutas para autenticación.
      - **dashboardRoutes.js**: Ruta protegida para el dashboard.
  - **package.json**: Configuración de dependencias y scripts del backend.
  
## Instalación

1. Clona el repositorio:
   ```
   git clone <URL_DEL_REPOSITORIO>
   cd mi-app-autenticacion/backend
   ```

2. Instala las dependencias:
   ```
   npm install
   ```

3. Configura la conexión a la base de datos MongoDB en `app.js`.

## Uso

Para iniciar el servidor, ejecuta:
```
npm start
```

El servidor estará disponible en `http://localhost:3000`.

## Rutas

- **POST /register**: Registra un nuevo usuario.
- **POST /login**: Inicia sesión y devuelve un token de autenticación.
- **GET /dashboard**: Ruta protegida que solo puede ser accedida si el usuario está autenticado.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.