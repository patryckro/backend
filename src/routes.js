const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');

const routes = express.Router();

/* rota para listar todas as ongs do banco de dados*/
routes.get('/ongs', OngController.index);
/* rota para listar e criar o id das ongs */
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

/* rota para listar todos os incidentes do banco de dados*/
routes.get('/incidents', IncidentController.index);
/* rota para listar e criar o id dos incidentes */
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;

