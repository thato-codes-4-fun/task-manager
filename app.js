const express = require('express')
const app = express()
const task = require('./routes/task')
require('dotenv').config()
const PORT = process.env.PORT || 3000
const connectDB = require('./db/connect')
const MONGO_URI = process.env.MONGO_URI

//middlewares
app.use(express.json());
app.use(express.static('public'))


app.get('/', (req, res)=> {
    res.send('we are home')
})

//routes
app.use('/api/v1/tasks', task);

const start = async () => {
    console.log('server starting...')
    app.listen(PORT, ()=> {
        console.log('server is listining on port: ', PORT)
    })
    try {
        await connectDB(MONGO_URI)

    } catch (error) {
        console.log(error)
    }
}

start()
