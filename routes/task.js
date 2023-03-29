const express = require('express')
const router = express.Router()
const {createTask, getAllTask, deleteATask} = require('../controller/task')


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
router.get('/api/v1/tasks/:id', (req, res   ) => {
    const id = req.params.id
    res.send(`geting task with id: ${id}`)
})
//update a task ??? patch.
router.patch('/api/v1/tasks/:id', (req, res) => {
    const id = req.body.id
    res.send(`patchig for id ${id}`);
})

//delete a tasś
router.delete('/api/v1/tasks/:id',async (req, res) => {
    const id = req.params.id
    await deleteATask(id)
    res.send(`deleting for id ${id}`);
})


module.exports = router