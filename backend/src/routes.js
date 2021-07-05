import express from 'express'
import noticiaController from './controllers/noticiaController'
import pessoaController from './controllers/pessoaController'

const routes = express.Router()

routes.get('/noticia', noticiaController.index)
routes.get('/noticia/:id', noticiaController.index)
routes.post('/noticia', noticiaController.create)
routes.put('/noticia/:id', noticiaController.update)
routes.delete('/noticia/:id', noticiaController.delete)

routes.get('/pessoa', pessoaController.index)
routes.get('/pessoa/:id', pessoaController.index)
routes.post('/pessoa', pessoaController.create)
routes.put('/pessoa/:id', pessoaController.update)
routes.delete('/pessoa/:id', pessoaController.delete)

export default routes
