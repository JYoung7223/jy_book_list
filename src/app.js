const express = require('express');
const mongoose = require("mongoose");
const path = require("path");
const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

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
app.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
// app.use(middlewares.notFound);
// app.use(middlewares.errorHandler);

// app.get('/', (req, res) => {
//   res.status(400).json({
//     message: 'Bad Request: 🦄🌈✨👋🌎🌍🌏✨🌈🦄'
//   });
// });

module.exports = app;
