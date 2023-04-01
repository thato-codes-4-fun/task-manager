const express = require('express')
const app = express()
const task = require('./routes/task')
require('dotenv').config()
const PORT = process.env.PORT || 3000
const connectDB = require('./db/connect')
const MONGO_URI = process.env.MONGO_URI
const errorNotFound = require('./middleware/notFound')
const errorHandler = require('./middleware/error')

//middlewares
app.use(express.json());
app.use(express.static('public'))
app.use('/api/v1/tasks', task);
app.use(errorNotFound)
app.use(errorHandler)


//routes
app.get('/', (req, res)=> {
    res.send('we are home')
})

//Fire up server
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
