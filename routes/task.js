const express = require('express')
const router = express.Router()
const { createTask, getAllTask, deleteATask, updateTask, getTask } = require('../controller/task')

router.route('/').get(getAllTask).post(createTask)

router.route('/:id').get(getTask).patch(updateTask).delete(deleteATask)

module.exports = router