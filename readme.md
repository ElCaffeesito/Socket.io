# Tarea sockets

Para instalar todas las dependencias utiliza el siguiente comando

`npm run dev`

### Para la primer tarea es dentro de la carpeta **TypeScript**

Esta tarea consiste en entrar al [este enlace](http://localhost:3000)
colocando la ruta de "/usuarios", con esto te mandará a forbidden porque falta el rol deseado.

Para poder acceder a la tarea, es necesario colocar alguno de los roles (admin o gerente), con el query param de role

[ejemplo correcto](http://localhost:3000/usuarios?role=admin)

[ejemplo alternativo](http://localhost:3000/usuarios?role=gerente)

[ejemplo incorrecto](http://localhost:3000/usuarios?role=aaaaa)

