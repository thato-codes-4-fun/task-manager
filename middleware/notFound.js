const errorNotFound = (req, res,) => {
    res.status(404).send('Resource not found')
}

module.exports = errorNotFound