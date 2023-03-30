const express = require('express')
const router = express.Router()
const { createTask, getAllTask, deleteATask, updateTask, getTask } = require('../controller/task')


//create a task
router.post('/api/v1/tasks', (req, res) => {
    const data = req.body
    console.log('getting data...', data)
    const task = data.name
    createTask(data)
    res.send(data)
})

//get all tasks
router.get('/api/v1/tasks', async (req, res) => {
    const tasks = await getAllTask()    
    if (!tasks){
        return res.status(404).json({error: 'Item not found'})
    } else {
        return res.status(200).json({tasks})
    }
})
//get specific task
router.get('/api/v1/tasks/:id', async (req, res) => {
    const id = req.params.id
    if (!id){
        return res.status(404).json({error: 'id not found'})
    }
    const task = await getTask(id)
    if (!task){
        return res.status(404).json({error: 'Item not found'})
    }else {
         return res.status(200).json({task})
    } 
})
//update a task 
router.patch('/api/v1/tasks/:id', async(req, res) => {
    const id = req.params.id
    if (!id){
        return res.status(404).json({error: 'id not found'})
    }
    const data = req.body
    if (!data){
        return res.status(404).json({error: 'no data in body'})
    }
    const task = await updateTask(id, data)
    if (task.n===0){
        return res.status(404).json({error: 'item not found'})
    }
    if (task.nModified===0){
        return res.status(404).json({error: 'item not changed'})
    }
   return  res.status(200).json({success: 'item changed'});
})

//delete a task
router.delete('/api/v1/tasks/:id',async (req, res) => {
    const id = req.params.id
    if (!id){
       return  res.status(404).json({error: 'please provide id'})
    }
    const task = await deleteATask(id)
    if (task.n===0){
        return res.status(404).json({error: 'item not found'})
    }
    if (task.nModified===0){
        return res.status(404).json({error: 'item not deleted'})
    }else {
        return  res.status(200).json({success: 'item deleted'});
    }
})


module.exports = router