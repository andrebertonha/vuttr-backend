const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

// iniciar app
const app = express();
app.use(express.json());

app.use(cors());

mongoose.connect(
  'mongodb+srv://andrebertonha:andre@cluster0-kflaj.mongodb.net/vuttr?retryWrites=true&w=majority',
  { useNewUrlParser: true }
);

requireDir('./src/models');

// rotas
app.use('/api', require('./src/routes'));

app.listen(3000);
