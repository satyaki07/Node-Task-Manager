// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID  = mongodb.ObjectID;
const { MongoClient, ObjectID } = require('mongodb');

//Connection url
const connectionURL = 'mongodb://127.0.0.1:27017';
// Database name
const databaseName = 'task-manager';

const id = new ObjectID();
console.log(id);
console.log(id.getTimestamp());

//USe connect method to connect to the server
MongoClient.connect(connectionURL, { useNewUrlParser:true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to the database.');
    }

    const db = client.db(databaseName);

    // db.collection('users').findOne({ _id:new ObjectID("5e1e00ff961109123877fcb3")}, (error,user) => {
    //     if (error) {
    //         return console.log('Unable to fetch!');
            
    //     }

    //     console.log(user);


    // })

    // db.collection("tasks").find({ completed: true}).toArray((error, users) => {
    //     console.log(users)
    // })


    db.collection('users').deleteMany({
        age: 21
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

   

});