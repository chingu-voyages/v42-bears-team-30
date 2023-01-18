const mongoose = require('mongoose')

const UserAdminSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email: {
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

module.exports = mongoose.model('AdminUser',UserAdminSchema)