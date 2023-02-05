const mongoose = require('mongoose')

const BookingSchema = mongoose.Schema({
    checkInDate: {
        type:Date,
        require:true
    },
    checkOutDate: {
        type:Date,
        require:true
    },
    clientId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ClientUser',
        required: true
    },
    roomId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Booking', BookingSchema)