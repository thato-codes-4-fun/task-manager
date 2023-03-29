const task = require('../model/task')


//get specific task
const getTask = (id) => {
    return task.findById({_id : id})
}

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
const updateTask = (id, body)=> {
    const data = task.updateOne({_id: id}, body)
    return data
}

//delete a task
const deleteATask = (id)=> {
    const data = task.deleteOne({_id: id})
    return data
}

module.exports = {
    createTask,
    getAllTask,
    deleteATask,
    updateTask,
    getTask,
}


