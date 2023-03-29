console.log('Task Manager App')

const express = require('express')
const app = express()

// app.use(express.static('public'))

app.get('/', (req, res)=> {
    res.send('we are home')
})

app.listen(3000, ()=> {
    console.log('server is listining on port: ', 3000)
})