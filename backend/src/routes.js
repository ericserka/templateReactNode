const express = require('express')

const noticiaController = require('./controllers/noticiaController')

const routes = express.Router()

routes.get('/noticia', noticiaController.index);
routes.get('/noticia/:id', noticiaController.index);
routes.post('/noticia', noticiaController.create);
routes.post('/noticia/:id_noticia', noticiaController.update);
routes.delete('/noticia/:id_noticia', noticiaController.delete);

module.exports = routes;