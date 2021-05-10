console.log('Server booted ...');

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const MongoClient = require('mongodb').MongoClient;
const config = require('./config/config');

const app = express();
app.use(morgan('combined'));
app.use(express.json());
app.use(cors());

require('./routes')(app)

MongoClient.connect(`mongodb://${config.host}:${config.port}`, (err, client) => {
  if (err) {
    throw err;
  }

  console.log('Connected to MongoDB instance.')

  app.listen(process.env.PORT || 8081);
})