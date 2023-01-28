const mongoose = require('mongoose')

const Room = new mongoose.Schema({
    roomNumber:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    guest:{
        type:Number,
        require:true
    },
    rent:{
        type:Number,
        require:true
    },
    avalaible:{
        type:Boolean,
        default:true
    },
    booked:{
        type:Boolean,
        default:false

    },

    bookedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ClientUser',
        required: false
    },
    img:[ {
        type:String,
        require:true
    }],

   
})

module.exports = mongoose.model('Room',Room)