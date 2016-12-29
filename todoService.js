// const myService = {
//   find(params ) {},
//   get(id, params ) {},
//   create(data, params ) {
//     console.log('CREATED')
//     return Promise.resolve('dd');
//   },
//   update(id, data, params) {},
//   patch(id, data, params ) {},
//   remove(id, params ) {},
//   setup(app, path) {}
// }

'use strict';

const service = require('feathers-mongoose');
const todo = require('./todoModel');

module.exports = function () {
  const app = this
  const options = {
    Model: todo,
  };

  // Initialize our service with any options it requires
  app.use('/todos', service(options));

  // Get our initialize service to that we can bind hooks
  const todoService = app.service('/todos');

  // Set up our before hooks
  todoService.before({
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  });

  // Set up our after hooks
  todoService.after({
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  });
};


