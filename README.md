# SKELETON

-Express
-PostgreSQL
-Sequelize ORM
-Autenticacion con Tokens
-Bcrypt para hashear contraseñas
-Uso de Json Web Token

---

-Rutas de Login y creacion de usuarios
-Heeramienta para publicar imagenes de perfil
-CRUD de usuarios con autenticacion y manejo de permisos

-/users/:id DELETE, PUT
-/users/me

Orden de creacion de archivos
1. app.js
2. .env
3. config.js
4. database.js
5. modelos
6. controladores
7. servicios
8. rutas

Librerias para Iniciar Skeleton

npm init --y
npm i express
npm i uuid
npm install dotenv --save
npm i --save sequelize
npm i --save pg pg-hstore # postgres

npm i -D nodemon

Librerias para Autenticacion y Verificacion

npm install passport passport-jwt jsonwebtoken
npm i bcrypt

Rutas para Ingresar

Post => localhost:9000/api/v1/auth/register ==> aqui se ingresan los datos para dar de alta un nuevo usuario

Post => localhost:9000/api/v1/auth/login ==> aqui se ingresa email y password para generar el token para la autorizacion

Get => localhost:9000/api/v1/users/id ==> esta ruta es para ver los datos de usuario por uuid - id


