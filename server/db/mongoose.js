var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://AndyShen:c3b4ucme@ds233531.mlab.com:33531/todo-app-database');

module.exports = {
    mongoose
};