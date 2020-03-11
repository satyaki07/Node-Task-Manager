require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('5e287d8691b6017f304d2435').then((task) => {
//     console.log(task);

//     return Task.countDocuments( {status:false});
// }).then((count) => {
//     console.log(count);
// }).catch((e) => {
//     console.log(e);
// });

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({status: false});
    return count;
}

deleteTaskAndCount('5e287df79974610edc66a941').then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
})