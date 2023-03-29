const task = require('../model/task')

//create a task
const createTask = (tasktoadd)=> {
    const data = new task({ name: `${tasktoadd.name}` });
    return  data.save();
}

//get all task
const getAllTask =  ()=> {
    const data = task.find()
    return data

}

//update a task
const updateTask = ()=> {
    
}

//delete a task
const deleteATask = ()=> {
    
}

module.exports = {
    createTask,
    getAllTask,
}


