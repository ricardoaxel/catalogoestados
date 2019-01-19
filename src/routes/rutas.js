const router = require('express').Router();
const controladorDeEstados = require('../controllers/controladorDeEstados');

//Rutas ESTADOS
	router.get('/', controladorDeEstados.list);
	router.post('/add', controladorDeEstados.save);
	router.get('/update/:id', controladorDeEstados.edit);
	router.post('/update/:id', controladorDeEstados.update);
	router.get('/delete/:id', controladorDeEstados.delete);

//Rutas MUNICIPIOS
	router.post('/addmun', controladorDeEstados.savemun);
	router.get('/updatemun/:id', controladorDeEstados.editmun);
	router.post('/updatemun/:id', controladorDeEstados.updatemun);
	router.get('/deletemun/:id', controladorDeEstados.deletemun);
	router.get('/mostrarmunicipios/:id',controladorDeEstados.mostrarmunicipios)

module.exports = router;
