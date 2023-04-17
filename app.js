//npm init -y
//npm i express
//servidor en Node.js y express
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
//Configuración
app.use(express.static('public'));
/*app.get("/",(req, res)=>{
    res.send('Index')
})*/
app.get('*',(req, res)=>{
    res.send('404 | Pagina no encontrada')
})
app.listen(port,()=>{
    console.log('Servidor corriendo en el puerto',port);
})