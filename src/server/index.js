const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');


const app = express();
const port = process.env.PORT || 8080;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * Routes
 */









app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
