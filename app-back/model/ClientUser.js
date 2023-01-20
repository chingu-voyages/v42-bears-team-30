const mongoose = require('mongoose')

const UserClientSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email: {
        type: String,
        require: true
    },
    phoneNumber: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('ClientUser',UserClientSchema)