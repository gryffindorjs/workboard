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
    res.send('Workspace Created');
  },
  createTask: (req, res) => {
    const task = Task.create({ title: req.body.title, description: req.body.description, })
    res.status(200);
    res.send('Task Created');
  },
  createUser: (req, res) => {
    const user = User.create({ email: req.body.email, firstName: req.body.firstName, lastName: req.body.lastName })
    res.status(200);
    res.send("User Created");
  },
  getWorkspace: () => { },
  getTask: () => { },
  getUser: (req, res) => { },
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