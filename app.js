const express = require('express')
const app = express()
const router = require('./routes/task')


//middlewares
app.use(express.json());
app.use(express.static('public'))

app.get('/', (req, res)=> {
    res.send('we are home')
})


//routes
app.use(router);

app.listen(3000, ()=> {
    console.log('server is listining on port: ', 3000)
})