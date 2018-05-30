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

    // Delete many
    // todosCol.deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // delete one
    // todosCol.deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result.result);
    // });

    // find one and delete
    // todosCol.findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // delete by ID
    todosCol.findOneAndDelete({_id: ObjectId('5b01e2c6472f2ef192777e85')}).then((result) => {
        console.log(result);
    });

    // client.close();
});