//Aquí se arranca ek servidor y es nuestra pagina principal
const express = require('express'); //se importa el modulo express y se asigna objeto a constante
const engine = require('ejs-mate');
const path = require('path');

const app = express(); //se hereda como funcion a la constante app

//settings
app.set('views',path.join(__dirname,'views'));
app.engine('ejs',engine);
app.set('view engine', 'ejs');
app.set('port', process.env.PORT||3000); //se establece el puerto en local asignamos 3000 y en deployment se obtendra el puerto que se nos asigna en el servidor alojemos la pagina

//Routes
app.use('/', require('./routes/index'));

//starting the server

app.listen(app.get('port'), ()=>{
    console.log('server on port', app.get('port'));
});//Con el metodo listen se obtiene el puerto donde está escuchando el servidor.