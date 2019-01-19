const express = require('express');
const path = require('path'); //unimos directorios
const morgan = require('morgan');
const mysql = require('mysql'); //base de datos
const myConnection = require('express-myconnection'); //base de datos con express
const app = express();
//importando rutas
const customerRoutes = require('./routes/rutas')

// configuracion
	app.set('port', process.env.PORT||3000);
	app.set('view engine', 'ejs');
	app.set('views', path.join(__dirname, 'views')); //para obtener la direccion de la ruta de views

//middlewares  (funciones)

	//vemos las peticiones que llegan
	app.use(morgan('dev'));

	//mysql
	app.use(myConnection(mysql, {
		host: 'localhost',
		user: 'root',
		password: '',
		port: 3306,
		database: 'estados_db'
	},'single'));
	//cuando recibimos un dato
	app.use(express.urlencoded({extended: false}));

	//Rutas
	app.use('/', customerRoutes);

	//Archivos Estaticos
	app.use(express.static(path.join(__dirname, 'public')));

	//Comenzando el servidor
	app.listen(app.get('port'), () => {
		console.log('Server en puerto 3000');
});