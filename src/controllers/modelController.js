const Workspace = sequelize.define('workspace', {
  id: { type: Sequelize.INTEGER, autoIncrement: true },
  title: Sequelize.STRING,
  description: Sequelize.TEXT,
  private: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
  createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW }
})

const Task = sequelize.define('task', {
  id: { type: Sequelize.INTEGER, autoIncrement: true },
  title: Sequelize.STRING,
  description: Sequelize.TEXT,
  deadline: Sequelize.DATE,
  createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
  lastModified: Sequelize.DATE,
  createdBy: Sequelize.INTEGER,
  lastModifiedBy: Sequelize.INTEGER,
  started: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
  finished: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false }
})

const User = sequelize.define('user', {
  id: { type: Sequelize.INTEGER, autoIncrement: true },
  email: Sequelize.STRING,
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW }
})


User.hasMany(Workspace, { through: 'Workspace' });
Task.hasMany(User, { through: 'User' });
Task.hasOne(Workspace, { foreignKey: 'id' });
Workspace.hasMany(User, { through: 'User' });
Woskspace.hasMany(Task, { through: 'Task' });



// const TaskUser = sequelize.define('taskUser', {
//   id: { type: Sequelize.INTEGER, autoIncrement: true },
//   task: Sequelize.INTEGER,
//   user: Sequelize.INTEGER,
//   admin: Sequelize.BOOLEAN
// })

// const WorkSpaceUser = sequelize.define('workspaceUser', {
//   id: { type: Sequelize.INTEGER, autoIncrement: true },
//   workspace: Sequelize.INTEGER,
//   user: Sequelize.INTEGER,
//   admin: Sequelize.BOOLEAN
// })

// const WorkspaceTask = sequelize.define('workspaceTask', {
//   id: { type: Sequelize.INTEGER, autoIncrement: true },
//   workspace: Sequelize.INTEGER,
//   task: Sequelize.INTEGER
// })


// Workspace.hasMany(User, {foreignKey: 'senderId'});
// Room.hasMany(Message, {foreignKey: 'roomId'});
// Room.belongsToMany(User, {
//     through: 'user_room_link'
// });
// User.belongsToMany(Room, {
//     through: 'user_room_link'
// });
// Room.create({name: 'Main'});

sequelize.sync();

exports.module = {
  workspace: Workspace,
  task: Task,
  user: User
}