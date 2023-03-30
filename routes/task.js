const express = require('express')
const router = express.Router()
const { createTask, getAllTask, deleteATask, updateTask, getTask } = require('../controller/task')


//create a task
router.post('/api/v1/tasks', createTask)

//get all tasks
router.get('/api/v1/tasks', getAllTask);

//get specific task
router.get('/api/v1/tasks/:id', getTask);

//update a task 
router.patch('/api/v1/tasks/:id', updateTask);

//delete a task
router.delete('/api/v1/tasks/:id', deleteATask)


module.exports = router