const Booking = require('../model/Booking')
const mongoose =require('mongoose')

const saveBooking = async (req,res) => {
    console.log('booking',req.body)
    const {checkInDate,checkOutDate,userId,roomId} = req.body;
    try {
        const booking = new Booking({
            
            checkInDate: new Date(checkInDate),
            checkOutDate: new Date(checkOutDate),
            clientId: mongoose.Types.ObjectId(userId) ,
            roomId: mongoose.Types.ObjectId(roomId),
          });
         await booking
            .save((error,book) => {
                if (error) {
                    console.error(error)
                }else{
                    res.json({status: "200",message: "Booking room successfully"})
                }
            

            })
            
        

    } catch (err) {
        res.json({status: "500",message: err.message})
        
    }

}

module.exports = {saveBooking}