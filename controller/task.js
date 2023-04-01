const taskSchema = require('../model/task')
const asyncWrapper = require('../middleware/async')


//get specific task
const getTask = asyncWrapper(async (req, res) => {
    const id = req.params.id
    if (!id){
        return res.status(404).json({error: 'id not found'})
    }
    const task = await taskSchema.findById({_id : id})
    if (!task){
        return next()
    }else {
         return res.status(200).json({task})
    } 
})

//create a task
const createTask =asyncWrapper( async (req, res)=> {
    const tasktoadd = req.body
    const saveData = new taskSchema({ name: `${tasktoadd.name}` });
    const task  = await saveData.save();
    if (!task){
        return res.status(404).json({error: 'Item not found'})
    }else {
         return res.status(200).json({task})
    } 
})

//get all task
const getAllTask = asyncWrapper( async (req, res)=> {
    const tasks = await  taskSchema.find()
    return res.status(200).json({tasks})
})

//update a task
const updateTask = asyncWrapper(async (req, res) => {
    const id = req.params.id
    if (!id){
        return res.status(404).json({error: 'id not found'})
    }
    const data = req.body
    if (!data){
        return res.status(404).json({error: 'no data in body'})
    }
    const task = await taskSchema.updateOne({_id: id}, data);
   return res.status(200).json({task});
})

//delete a task
const deleteATask = asyncWrapper( async (req, res)=> {
    const id = req.params.id
    if (!id){
       return  res.status(404).json({error: 'please provide id'})
    }
    const task = await taskSchema.deleteOne({_id: id})
    if (task.n===0){
        return res.status(404).json({error: 'item not found'})
    }
    if (task.nModified===0){
        return res.status(404).json({error: 'item not deleted'})
    }else {
        return  res.status(200).json({success: 'item deleted'});
    }
})

module.exports = {
    createTask,
    getAllTask,
    deleteATask,
    updateTask,
    getTask,
}


