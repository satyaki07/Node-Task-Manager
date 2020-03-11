const express = require('express');
require('./db/mongoose.js');

const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');
const jwt = require('jsonwebtoken');


const app = express();
const port = process.env.PORT;



app.use(express.json());
app.use(userRouter);
app.use(taskRouter);


const myFunction = async () => {
    
    const token = jwt.sign({_id: '4585116'}, 'thisismynewtoken', {expiresIn: '3 days'});
    console.log(token);
    const data = jwt.verify(token, 'thisismynewtoken');
    console.log(data);
}

myFunction();

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})

const Task = require('./models/task');
const User = require('./models/user'); 

// const main = async () => {
//     // const task = await Task.findById('5e498e401f81eb25ac31870e');
//     // await task.populate('owner').execPopulate();
//     // console.log(task.owner);

//     const user = await User.findById('5e498d52e77cfa3b80b23f52');
//     await user.populate('tasks').execPopulate();
//     console.log(user.tasks);
// }

// main();