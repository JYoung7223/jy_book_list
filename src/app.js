const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require("mongoose");

require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use([
  express.urlencoded({ extended: true }), 
  express.json()
]);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks", 
  {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
  }
);

app.use('/api', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

app.get('/', (req, res) => {
  res.status(400).json({
    message: 'Bad Request: 🦄🌈✨👋🌎🌍🌏✨🌈🦄'
  });
});

module.exports = app;
