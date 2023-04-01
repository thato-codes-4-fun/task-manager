
const errorHandlingMiddleWare = (error , req, res, next)=> {
    console.log('error handling here')
    res.status(500).send('Internal server error')
}

module.exports = errorHandlingMiddleWare