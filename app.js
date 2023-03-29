const express = require('express')
const app = express()


//middlewares
app.use(express.json());
// app.use(express.static('public'))


//routes
app.get('/', (req, res)=> {
    res.send('we are home')
})

//create a task
app.post('/api/v1/tasks', (req, res)=> {
    const data = req.body
    console.log('getting data...', data)
    res.send(data)
})

//get all tasks
app.get('/api/v1/tasks', (req, res)=> {
    console.log('hello')
    res.send('getting all taks')
})
//get specific task
app.get('/api/v1/tasks/:id', (req, res)=> {
   const id = req.params.id
    res.send(`geting task with id: ${id}`)
})
//update a task ??? patch.
app.patch('/api/v1/tasks/:id', (req, res)=> {
    const id = req.body.id
    res.send(`patchig for id ${id}`);
})

//delete a task
app.delete('/api/v1/tasks/:id', (req, res)=> {
    const id = req.body.id
    res.send(`deleting for id ${id}`);
})

app.listen(3000, ()=> {
    console.log('server is listining on port: ', 3000)
})