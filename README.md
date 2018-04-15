## Almundo Frontend test

Esta es una app desarrollada con el stack MERN (Mongo, Express, React y Node). Se utilizó también Redux para obtener un mejor control del estado de la aplicación pensando en la escabilidad de la misma. Ayuda también a separar responsabilidades y a tener todo más componentizado.

Se utilizó también webpack para generar los bundles que van a servir a la app. Estos se concatenan y minifican entre otras mejoras como el uso de source maps.

## Setup

Dentro de la carpeta `source` van a encontrar otras dos carpetas
- client (react app)
- server (node app)

Necesitamos antes de empezar tener instalado:
- node v8.11.1
- npm
- mongodb

Luego de esto vamos a la carpeta `/source/server` y en la terminal corremos:

```bash
$ npm install
$ npm install -g nodemon
```

Una vez esto termine podemos correr el servidor, vamos a necesitar dos terminales, en la primera debemos correr el servidor de mongo (puede variar según el SO, en linux se hace mediante `mongod` por ejemplo) y en la segunda debemos correr `npm start`
Debería mostrarse algo como:

```bash
> nodemon app_hooked.js

[nodemon] 1.9.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node app_hooked.js`
Almundo Server Listening at 3001
```

Ahora necesitamos iniciar el cliente, para eso, en otra terminal vamos a la carpeta `/source/client` y hacemos:

```bash
$ npm install
```

Luego de eso corremos en la misma terminal `npm start`, comenzará a correr webpack creando los assets y se abrirá automáticamente en un browser la app. Si no lo hace probar con `http://localhost:3000/`.

## Api test

Con el server corriendo como expliqué antes podemos probar las acciones CRUD de la api. Se puede usar por ejemplo [postman](https://www.getpostman.com/) para lograrlo.

**GET:** `http://localhost:3001/api`
**POST:** `http://localhost:3001/api`
**PUT:** `http://localhost:3001/api`
**DELETE:** `http://localhost:3001/api/:id` (hotel id)

Usando postman, para POST y PUT deben mandar el body usando raw -> application/json y si lo hacen con cURL pueden probarlo de esta manera:

`curl -H "Content-Type: application/json" -X PUT -d '{"id": "249942", "name": "Stefanos Spa Hotel"}' http://localhost:3001/api/`