const express = require('express')
const router = express.Router()


//create a task
router.post('/api/v1/tasks', (req, res) => {
    const data = req.body
    console.log('getting data...', data)
    res.send(data)
})

//get all tasks
router.get('/api/v1/tasks', (req, res) => {
    console.log('hello')
    res.json({ tasks: []
    })
})
//get specific task
router.get('/api/v1/tasks/:id', (req, res   ) => {
    const id = req.params.id
    res.send(`geting task with id: ${id
    }`)
})
//update a task ??? patch.
router.patch('/api/v1/tasks/:id', (req, res) => {
    console.log('patching item')
    const id = req.body.id
    res.send(`patchig for id ${id
    }`);
})

//delete a task
router.delete('/api/v1/tasks/:id', (req, res) => {
    console.log('deleting item')
    const id = req.body.id
    res.send(`deleting for id ${id
    }`);
})


module.exports = router