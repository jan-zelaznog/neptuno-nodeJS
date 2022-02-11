// instanciar los paquetes requeridos
var express = require('express'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	mongoose = require('mongoose');


mongoose.connect("mongodb+srv://db_user:x123y456@cluster0.pt7t5.mongodb.net/neptuno")
.then(()=>{ console.log ("Conexion a MongoDB exitosa")})
.catch(()=>{console.log ("No se pudo establecer la conexión a MongoDB")});

require("./models/Producto");
require("./models/Categoria");
require("./models/Proveedor");

// objeto global de la app
var app = express();

// agregamos los frameworks al app:
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use ("/", require("./routes"));

// Para manejar el error de urls no existentes:
app.use(function (req, res, next){
	var err = new Error("No encontré la página solicitada");
	err.status = 404;
	next(err);
});

// Configurar donde se estará ejecutando el app
var server = app.listen(3000, function (){
	console.log ("App corriendo en el puerto 3000");
})