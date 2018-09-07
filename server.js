const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

// create application/json parser
const jsonParser = bodyParser.json();

// parse application/x-www-form-urlencoded
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// Body parser middleware: required to pass params in 'body'
app.use(urlencodedParser);

// parse application/json
app.use(jsonParser);

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('server-js: MongoDB Connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello!');
});

// Use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server-js: Server running on port ${port}`);
});
