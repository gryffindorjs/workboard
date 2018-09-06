const models = require('./modelController');
const Workspace = models.workspace;
const User = models.user;
const Task = models.task;
const TaskUser = models.taskUser;
const WorkspaceTask = models.workspaceTask;
const WorkspaceUser = models.workspaceUser;

// console.log(model);
// console.log(workspace);

const databaseController = {
  createUser: (req, res) => {
    const user = User.create({ email: req.body.email, firstName: req.body.firstName, lastName: req.body.lastName, username: req.body.username, password: req.body.password })
    res.status(200);
    res.send("User Created");
  },
  createWorkspace: (req, res) => {
    console.log(req.body);
    Workspace.create({ title: req.body.title, description: req.body.description }).then((newWorkspace) => { WorkspaceUser.create({ user: req.body.user, workspace: newWorkspace.id, admin: true }) });
    res.status(200);
    res.send('Workspace & Join Created');
  },
  createTask: (req, res) => {
    Task.create({ title: req.body.title, description: req.body.description, createdBy: req.body.user }).then((newTask) => {
      TaskUser.create({ user: req.body.user, task: newTask.id, admin: true })
      WorkspaceTask.create({ task: newTask.id, workspace: req.body.workspace })
    })
    res.status(200);
    res.send('Task & Joins Created');
  },

  login: (req, res) => {
    // console.log('REQUEST', req.headers);
    User.findOne({
      where: {
        username: req.headers.username,
        password: req.headers.password
      }
    }).then((record) => {
      console.log(record);
      res.status(200);
      res.send(record);
    })

  },
  getUser: (req, res) => {
    User.findOne({
      where: {
        id: req.params.id
      }
    }).then((record) => {
      res.status(200);
      res.send(record);
    })
  },
  getWorkspace: (req, res) => {
    Workspace.findOne({
      where: {
        id: req.params.id
      }
    }).then((record) => {
      res.status(200);
      res.send(record);
    })
  },
  getTask: (req, res) => {
    Task.findOne({
      where: {
        id: req.params.id
      }
    }).then((record) => {
      res.status(200);
      res.send(record);
    })
  },

  patchWorkspace: (req, res) => {
    Workspace.update(
      req.body,
      { returning: true, where: { id: req.params.id } }
    ).then(function ([rows, [updated]]) {
      res.json(updated)
    })
  }
  ,
  patchTask: () => { },
  patchUser: () => { },
  deleteWorkspace: () => { },
  deleteTask: () => { },
  deleteUser: () => { },
  modifyOwnershipTask: () => { },
  modifyOwnershipWorkspace: () => { }
}


module.exports = databaseController;