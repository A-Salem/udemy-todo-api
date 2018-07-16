const { ObjectID } = require('mongodb');


const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// }).catch((e) => console.log(e));

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '5b4cdb2a5a981df3897a7b4a'}).then((todo) => {
//   console.log(todo);
// });

Todo.findByIdAndRemove('5b4cdb2a5a981df3897a7b4a').then((todo) => {
  console.log(todo);
});
