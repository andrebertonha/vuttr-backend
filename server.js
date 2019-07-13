const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
require('dotenv').config()

// iniciar app
const app = express();
app.use(express.json());

try {
  mongoose.connect(process.env.MADB_URI, {useNewUrlParser: true});
}catch(e){ console.log(e.error) }

requireDir('./src/models');

// rotas
app.use('/api', require('./src/routes'));

app.listen(3000);
