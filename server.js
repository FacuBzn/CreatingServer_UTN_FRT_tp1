
const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;
const http = require('http');
const fs = require('fs');

let server = http.createServer(function (req, res) {

    fs.readFile('files/hola_mundo.txt', 'utf-8', function (err, data) {
        if (err) {
            console.log("🚀 ~ file: server.js:13 ~ err:", err)            
        } else {
            res.end(data);
        }
    }); 
});

server.listen(port, () => {
    console.log(`Servidor corriendo en -> ${port}, http://localhost:${port}/`)
})









