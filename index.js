const path = require('path');
const feathers = require('feathers');
const sync = require('feathers-sync');
const socketio = require('feathers-socketio');
const rest = require('feathers-rest');
const serveStatic = require('feathers').static;
const todoMongooseService = require('./todoService');
const mongoose = require('mongoose');
const hooks = require('feathers-hooks');

mongoose.connect('mongodb://localhost:27017/sync');
mongoose.Promise = global.Promise;

var app = feathers();

app.configure(rest())
  .configure(socketio())
  .configure(sync({
    db: 'mongodb://localhost:27017/sync',
    collection: 'events'
  }))
  .use('/', serveStatic(path.resolve(__dirname, 'public')))
  .configure(hooks())
  .configure(todoMongooseService)
  .use('/todo', {
    find(params ) {},
    get(id, params ) {},
    create(data, params ) {
      console.log('CREATED')
      return Promise.resolve(data);
    },
    update(id, data, params) {},
    patch(id, data, params ) {},
    remove(id, params ) {},
    setup(app, path) {}
  });



app.listen(3000);