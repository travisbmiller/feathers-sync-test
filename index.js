const path = require('path');
const feathers = require('feathers');
const sync = require('feathers-sync');
const socketio = require('feathers-socketio');
const rest = require('feathers-rest');
const serveStatic = require('feathers').static;
const todoService = require('./todoService');
const mongoose = require('mongoose');
const hooks = require('feathers-hooks');


var app = feathers();
app.configure(rest())
  .configure(socketio())
  .configure(sync({
    db: 'mongodb://localhost:27017/sync',
    collection: 'events'
  }))
  .use('/', serveStatic(path.resolve(__dirname, 'public')))
  .configure(hooks())
  .configure(todoService);

mongoose.connect('mongodb://localhost:27017/sync');
mongoose.Promise = global.Promise;


app.listen(3000);