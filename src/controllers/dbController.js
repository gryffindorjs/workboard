const models = require('./modelController');
const Workspace = models.workspace;
const User = models.user;
const Task = models.task;
// console.log(model);
// console.log(workspace);

const databaseController = {
  createWorkspace: (req, res) => {
    console.log(req.body);
    const workspace = Workspace.create({ title: req.body.title, description: req.body.description });
    res.status(200);
    res.send('hello');
    res.end();
  },
  createTask: () => { },
  createUser: () => { },
  getWorkspace: () => { },
  getTask: () => { },
  getUser: () => { },
  patchWorkspace: () => { },
  patchTask: () => { },
  patchUser: () => { },
  deleteWorkspace: () => { },
  deleteTask: () => { },
  deleteUser: () => { },
  modifyOwnershipTask: () => { },
  modifyOwnershipWorkspace: () => { }
}


module.exports = databaseController;