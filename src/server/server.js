const express = require('express');
const app = express();
const path = require('path');
const Sequelize = require('sequelize');
const db = require('../../keys')

const sequelize = new Sequelize(db.key);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));

})

app.post('/workspace', (req, res) => {

})



const port = 8000

app.listen(port, () => {
  console.log(
    `listening on port ${port}`
  );
});