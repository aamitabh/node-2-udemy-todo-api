var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mongodb:27017/TodoApp');

module.exports = {mongoose};