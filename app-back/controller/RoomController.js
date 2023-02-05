const Room = require("../model/Room");
const Booking = require('../model/Booking')
const {validationResult} = require('express-validator');
const fs = require('fs')

const getRoom =  (req,res) => {
    Room.find({},null,{sort: { createdAt: -1 }})
        .lean()// to get a json object (instead of a mongoose one)
        .exec((err,data) =>{
            if (err) throw err
            
            res.render('room/room',{
                title: 'Book room',
                user: req.user.username,
                email: req.user.email,
                data:data
            })

        })

}

const goToFormRoom = (req,res) => {
    res.render('room/formRoom',{
        title:"Add Room",
        action: 'Add',
        routeAction: `room/add`
    })

}

const addRoom = (req,res) => {
    const {roomNumber,description,guest,rent} = req.body;
    //const {filename} = req.file;
    // const errors = ["this is an error","if error"]
    // if(roomNumber === ''){
    //     errors.push("Error ")
    // }
    
    const errors = validationResult(req)
    let error = req.flash('error-file')
    
    if(!errors.isEmpty()){
        
        res.render('room/formRoom',{
            title: 'Add Room',
            roomNumber,description,guest,rent,
            errors:errors.array(),
            error

        })
        
        //res.json({ errors: errors.array() });
    }else{

        let imgRoom = req.files.map(img =>{

            let result = `/uploads/images/${img.filename}`
            return result
        })
        
        const room = new Room({
            roomNumber: roomNumber,
            description:description,
            guest:guest,
            rent:rent,
            img: imgRoom
        
        })
        
        room.save();
        res.redirect('/room')
     
    }
    
   
        console.log("body room",req.body);
        console.log("file",req.files)

    
    
}

const deleteRoom = (req,res) => {
    const {id} = req.params;
    
    Room.findByIdAndRemove(id,(err,data) => {
        
        data.img.forEach(image => {
            fs.unlink(`public/${image}`,(fsError) => {
                if(fsError){
                    console.log("file error")
                }else{
                    console.log('Delete successfully')
                }
            })
        })
        if(err) throw err
        res.redirect('/room');
    })
}


const goEditRoom = (req,res) => {
    const {id} =req.params;
    Room.findById(id,(err,data) =>{ 
        if(err) res.redirect('/room')
        if(!data){
            res.redirect('/room')
        }else{
            const {_id,roomNumber,description,guest,rent} = data;
            res.render('room/formRoom',{

                roomNumber,description,guest,rent,
                action: 'Edit',
                routeAction: `/room/edit/${_id}`

            })
        }
    })

}

const updateRoom = (req,res) => {
    
   
    const errors = validationResult(req);
    let error = req.flash('error-file');
    const  {id} =req.params;
    
    // if(!errors.isEmpty()){
    //     const {roomNumber,description,guest,rent} = req.body;
        
    //     res.render('room/formRoom',{
    //         title: 'Add Room',
    //         roomNumber,description,guest,rent,
    //         errors:errors.array(),
    //         error

    //     })
        
    //     //res.json({ errors: errors.array() });
    // }else{
        console.log('Id',id)
        console.log('body',req.body)
        console.log('body number',req.body.roomNumber)

        Room.findByIdAndUpdate(id,req.body,(err,room) => {
            if(err){
                console.log("err update",err);
            }else{
                res.redirect('/room')
            }
                
            
        })
    
} 

//API 

const getRoomApi =  (req,res) => {
    Room.find({})
        .lean()// to get a json object (instead of a mongoose one)
        .exec((err,data) =>{
            if (err) throw err
            res.json({"status": "200",data:data})

        })

}

const getOneRoom = (req,res) => {
    
    try {
        Room.findById(req.params.id,(err,room) => {
            if(err) res.json({status: "500",message: err.message})
            if(room){
                res.json({status:"200",data: room})
            }else{
                res.json({status: "404",message: "room not found"})
            }
        })
    } catch (error) {
        res.json({status: "500",message: error.message})
    }
}

const getAllRoomAvalaible = async (req,res) => {
    const { checkInDate, checkOutDate, guests } = req.query;
    
    try {
        

        const bookedRooms = await Booking.find({
            $and: [
                { checkInDate: { $lt: checkOutDate } },
                { checkOutDate: { $gt: checkInDate } },
            ],
        }); 
        // Get the room IDs for all booked rooms
        const bookedRoomIds = bookedRooms.map(booking => booking.roomId);

        const availableRooms = await Room.find({
            $and: [
                { _id: { $nin: bookedRoomIds } },
                { guest: { $gte: guests } },
                { avalaible: true },
            ],
        });
        
        res.json({status: "201",data :availableRooms});

        
    } catch (error) {
        res.json({status: "500",error : error.message})
    }
}

module.exports = {
    getRoom,
    addRoom,
    getRoomApi,
    getOneRoom,
    goToFormRoom,
    deleteRoom,
    goEditRoom,
    updateRoom,
    getAllRoomAvalaible
}