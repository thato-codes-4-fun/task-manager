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
const deleteATask = (id)=> {
    const data = task.deleteOne({_id: id})
    return data
}

module.exports = {
    createTask,
    getAllTask,
    deleteATask
}


