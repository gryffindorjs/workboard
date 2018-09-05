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
































// app.post('/api/signup', async (req, res) => {
//   try {
//     const { username, password, domain } = req.body;
//     // console.log('*********************', req.body)
//     if (!username || !password || !domain) throw new Error('Must submit all fields');
//     const foundClient = await Client.findOne({ where: { username } });
//     if (foundClient) throw new Error('User already exists');
//     const newClient = await Client.create({ username, password, domain });
//     res.json(req.body);
//   } catch (error) {
//     console.log(error);
//     res.json(req.body);
//   }
// });

// app.post('/api/login', async (req, res) => {
//   try {
//     console.log('running index.js')
//     const { username, password } = req.body;
//     const foundClient = await Client.findOne({ where: { username, password } });
//     if (!foundClient) {
//       res.send("Invalid username or password");
//     } //throw new Error('Incorrect username or password');
//     res.json(foundClient);
//     res.redirect('/api/issues');
//   } catch (error) {
//     console.log(error);
//     res.send({});
//   }
// });

// app.get('/api/issues', async (req, res) => {
//   try {
//     const issues = await Issue.findAll({});
//     res.json(issues);
//   } catch (error) {
//     console.log(error);
//     res.json({});
//   }
// });

// app.post('/api/issues', async (req, res) => {
//   try {
//     const description = req.body.description;
//     const type = req.body.issue_type;
//     const email = req.body.user_email;
//     const domain = req.headers.referer;
//     const client = await Client.find({ where: { domain } });
//     // client does not exist
//     if (!client) () => {
//       console.log('THIS IS THE DOMAIN', domain);
//       throw new Error('Unauthorized domain');
//     }

//     const user = await User.findOrCreate({ where: { email } });
//     const issue = Issue.build({
//       description,
//       type,
//       clientId: client.dataValues._id,
//       userId: user[0]._id,
//     });
//     const savedIssue = await issue.save();
//     res.redirect(domain);
//   } catch (error) {
//     console.log(error);
//     res.redirect(domain);
//   }
// });

// app.get('/api/issues/:issuesId', async (req, res) => {
//   try {
//     const issue = await Issue.findById(req.params.issuesId);
//     res.json(issue);
//   } catch (error) {
//     console.log(error);
//     res.json({});
//   }
// });

// app.get('/api/download', async (req, res) => {
//   try {
//     fs.readFile('./issues.js', (err, data) => {
//       res.setHeader( 'Content-Disposition: attachment' );
//       res.send(data);
//     })
//   } catch (error) {
//     console.log(error);
//     res.json({});
//   }
// });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
