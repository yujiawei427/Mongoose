const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const routes = require('./routes/routes.js')(app, fs); 
//file system is injected to the route for later use, dependency injection.
const server = app.listen(3000, () => {
  console.log('listen on port %s...', server.address().port);
  console.log(server.address().address);
  console.log(server.address().port);
});