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

    // Fetch all Todos
    // db.collection('Todos').find().toArray().then((docs) => {
    //     console.log('TODOs');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch Todos', err);
    // });

    // Fetch all Todos with not completed
    // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
    //     console.log('TODOs');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch Todos', err);
    // });

    // Fetch Todos by ID: 5b0086702f0e315094a321cb
    // db.collection('Todos').find({
    //     _id: new ObjectId('5b0086702f0e315094a321cb')
    // }).toArray().then((docs) => {
    //     console.log('TODOs');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch Todos', err);
    // });

    // Fetch Todos count
    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`TODOs count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to count Todos', err);
    // });

    // Fetch all Todos with specific name
    var usersCol = db.collection('Users');
    usersCol.find({name: 'Shailja'}).toArray().then((docs) => {
        console.log('User Shailja Found?');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to find user Shailja', err);
    });

    // client.close();
});