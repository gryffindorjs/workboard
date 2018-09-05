const express = require('express');
const app = express();
const path = require('path');
const Sequelize = require('sequelize');
const db = require('../../keys')
const sequelize = new Sequelize(db.key);

const models = require('../controllers/modelController');
const databaseController = require('../controllers/dbController')

const bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));

})

app.post('/workspace', databaseController.createWorkspace);
app.post('/user', databaseController.createUser);
app.post('/task', databaseController.createTask);

app.get('/user/:id', databaseController.getUser);
app.get('/workspace/:id', databaseController.getWorkspace);
app.get('/task/:id', databaseController.getTask);

app.patch('/user/:id', databaseController.patchUser);
app.patch('/task/:id', databaseController.patchTask);
app.patch('/workspace/:id', databaseController.patchWorkspace);
app.patch('/workspaceAdmin/:id', databaseController.modifyOwnershipWorkspace);
app.patch('/taskAdmin/:id', databaseController.modifyOwnershipTask);

app.delete('/task/:id', databaseController.deleteTask);
app.delete('/user/:id', databaseController.deleteUser);
app.delete('/workspace/:id', databaseController.deleteWorkspace);


const port = 8000

app.listen(port, () => {
  console.log(
    `listening on port ${port}`
  );
});