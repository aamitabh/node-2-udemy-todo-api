var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
app.use(bodyParser.json());    // Custom middleware returns a fn

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.listen(3000, () => {
    console.log('Server started @ port 3000');
});


// From previous example
// var newTodo;
// var newUser;

// newTodo = new Todo({text: '    Edit this page    '});
// newTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (err) => {
//     console.log('UNABLE to save zero todo');
//     console.log(err);
// });

// newTodo = new Todo({
//     text: 'Cook Dinner'
// });
// newTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (err) => {
//     console.log('UNABLE to save first todo');
// });

// newTodo = new Todo({
//     text: 'Buy Wine',
//     completed: true,
//     completedAt: 123
// });
// newTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (err) => {
//     console.log('UNABLE to save second todo');
//     console.log(err);
// });

// newUser = new User({
//     email: "  amitabh.arora@gmail.com   "
// });
// newUser.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (err) => {
//     console.log(`UNABLE to save user ${newUser.email}`);
//     console.log(err);
// });
