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
    res.json({ tasks })
})
//get specific task
router.get('/api/v1/tasks/:id', async (req, res) => {
    const id = req.params.id
    const task = await getTask(id)
    res.json({task})
})
//update a task ??? patch.
router.patch('/api/v1/tasks/:id', async(req, res) => {
    const id = req.params.id
    const data = req.body
    console.log(`the body ${data}`)
    const task = await updateTask(id, data)
    res.json({task});
})

//delete a task
router.delete('/api/v1/tasks/:id',async (req, res) => {
    const id = req.params.id
    await deleteATask(id)
    res.send(`deleting for id ${id}`);
})


module.exports = router