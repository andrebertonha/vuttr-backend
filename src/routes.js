const express = require('express');
const routes = express.Router();
const ToolController = require('./controllers/ToolController');

//rota para listar as ferramentas cadastradas
routes.get('/tools', ToolController.index);
//rota para cadastrar
routes.post('/tools', ToolController.store);
//filtrar por tag
routes.get('/', ToolController.show);
//rota para deletar
routes.delete('/tools/:id', ToolController.destroy);

module.exports = routes;