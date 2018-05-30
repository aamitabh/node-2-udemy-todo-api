// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectId} = require('mongodb');

// var objid = new ObjectId();
// console.log(objid);


// ES6 destructuring example
// const user = {name: 'Amitabh', age: 57};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://mongodb:27017/TodoApp', {
    useNewUrlParser: true
}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongodb');
    }

    console.log('Connected to mongodb server');
    const db = client.db('TodoApp');

    var todosCol = db.collection('Todos');

    // delete by ID
    todosCol.findOneAndUpdate(
        {_id: new ObjectId('5b01e3af472f2ef192777ee4')}, {
            $set: {
                completed: true
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        });

    // client.close();
});