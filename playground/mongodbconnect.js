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

    // Insert a Todo
    // db.collection('Todos').insertOne({
    //     text: 'Sonething to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err)
    //         return console.log('Unable to insert', err);

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // Insert a user
    // db.collection('Users').insertOne({
    //     name: 'Amitabh Arora',
    //     age: 57,
    //     location: 'Pleasanton'
    // }, (err, result) => {
    //     if (err)
    //         return console.log('Unable to insert user', err);
        
    //     console.log(JSON.stringify(result.ops, undefined, 2));

    //     console.log(result.ops[0]._id.getTimestamp());
// });

    client.close();
});