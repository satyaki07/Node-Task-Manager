const mongoose = require('mongoose');



mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true

})


// const me = new User({
//     name: '  Louis ',
//     email: 'louiseMAILme@gmail.COM ',
//     password: 'helothisismypass'
    
// });

// me.save().then(() => {
//     console.log(me);
// }).catch((error) => {
//     console.log('Error', error);
// })





// const task1 = new Task({
//     name: 'Outscore coming  '

// })

// task1.save().then(() => {
//     console.log(task1);
// }).catch((error) => {
//     console.log('Error', error);
// });