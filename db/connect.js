const mongoose = require('mongoose');

const connect =async (uri) =>  {
    try {
        console.log('connecting...')
       return  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true  })
    } catch (error) {
        console.log('connecting failed...')
        console.log(error)
        return {error}
    }
}

module.exports = connect