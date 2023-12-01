const mongoose = require('mongoose')

function connect() {
    mongoose.connect('mongodb://0.0.0.0:8080/api-restful')

    const db = mongoose.connection
    
    db.once('open', () => {
        console.log('Connected to database!')
    })

    db.on('error', console.error.bind(console, 'connection error: '))
}

module.exports = {
    connect
}