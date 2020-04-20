const express = require('express');
const cors = require('cors');
const routes = require('./routes')
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Métodos HTTP
 * 
 * GET: Buscar informaçao do back-end
 * POST: Criar uma informaçao no back-end
 * PUT: Alterar uma informaçao no back-end
 * DELETE: deletar uma informaçao do back-end
 * 
 * 
 * Tipos de parametros
 * 
 * Query Parms:Parametros nomeados enviados na rota após o simbolo de ? servem para (filtros, paginaçao)
 * Route Parms: Parametros utilizados para identificar recursos(:id)
 * Request Body: Corpo da requisiçao , utilizado para criar recursos
 * 
 */




app.listen(3333);