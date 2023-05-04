#Consigna del trabajo practico N1 
Curso de Node js - UTN FRT /2023

*Crear un servidor web en node js que muestre el contenido de un archivo txt denominado hola_mundo.txt (Ver ejemplo_4.js)


##Explicacion del codigo
Este código muestra cómo crear un servidor web utilizando Node.js y Express.

* Primero, el código importa los módulos necesarios de Node.js y Express mediante las siguientes líneas:

`
const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;
const http = require('http');
const fs = require('fs');
`
Aquí, express es el módulo que permite crear una aplicación web y definir rutas, dotenv es un módulo que carga variables de entorno desde un archivo .env, http es el módulo que permite crear un servidor HTTP y fs es el módulo que permite leer archivos del sistema de archivos.

A continuación, se crea un servidor HTTP y se define una función para manejar las solicitudes HTTP entrantes:

`
let server = http.createServer(function (req, res) {

    fs.readFile('files/hola_mundo.txt', 'utf-8', function (err, data) {
        if (err) {
            console.log("🚀 ~ file: server.js:13 ~ err:", err)            
        } else {
            res.end(data);
        }
    }); 
});
`

* La función recibe dos argumentos: req (la solicitud HTTP entrante) y res (la respuesta HTTP que se enviará al cliente).

Dentro de esta función, se utiliza el método fs.readFile para leer el contenido del archivo hola_mundo.txt que se encuentra dentro del directorio files. Si hay un error al leer el archivo, se muestra un mensaje de error en la consola. De lo contrario, se envía el contenido del archivo como respuesta HTTP al cliente.

Por último, se inicia el servidor y se especifica el puerto en el que se escucharán las solicitudes entrantes:

`
server.listen(port, () => {
    console.log(`Servidor corriendo en -> ${port}, http://localhost:${port}/`)
})`

* La aplicación está lista para escuchar solicitudes HTTP en el puerto especificado. Cuando se recibe una solicitud, se llama a la función fs.readFile para leer el archivo hola_mundo.txt y se envía su contenido como respuesta HTTP al cliente.

## procedimientos pára iniciar

`
npm install -y --save para crear el package.json
npm install express 
npm install nodemon
`