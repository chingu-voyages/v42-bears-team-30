const Room = require("../model/Room");
const {validationResult} = require('express-validator');

const getRoom =  (req,res) => {
    Room.find({})
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
        title:"Add Room"
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
    console.log('file error',error)
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
        console.log("img Room",imgRoom);
        const room = new Room({
            roomNumber: roomNumber,
            description:description,
            guest:guest,
            rent:rent,
            img: imgRoom
        
        })
        
        room.save();
        res.redirect('/room')
        // Room.find({})
        //     .lean()// to get a json object (instead of a mongoose one)
        //     .exec((err,data) =>{
        //         if (err) throw err
        //         res.render('room/room',{
        //             title: 'Book room',
        //             user: req.user.username,
        //             email: req.user.email,
        //             data:data
        //         })

        //     })
            
    }
    
   
        console.log("body room",req.body);
        console.log("file",req.files)

    
    
}

const deleteRoom = (req,res) => {
    const {id} = req.params;
    Room.findByIdAndRemove(id,(err) => {
        if(err) throw err
        res.redirect('/room');
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

module.exports = {getRoom,addRoom,getRoomApi,getOneRoom,goToFormRoom,deleteRoom}