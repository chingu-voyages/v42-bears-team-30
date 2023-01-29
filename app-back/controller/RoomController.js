const Room = require("../model/Room");

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

const addRoom = (req,res) => {
    const {roomNumber,description,guest,rent} = req.body;
    //const {filename} = req.file;
    const errors = []
    if(roomNumber === ''){
        errors.push({message : "Error "})
    }
    if(errors.length > 0){
        res.render('room/room',{
            errors:errors
        })
    }else{
        let imgRoom = req.files.map(img =>{
            let result = `/uploads/images/${img.filename}`
            return result
        }  )
        console.log("img Room",imgRoom);
        const room = new Room({
            roomNumber: roomNumber,
            description:description,
            guest:guest,
            rent:rent,
            img: imgRoom
    
        })
    
         room.save();
         res.render('room/room')
    }
        console.log("body room",req.body);
        //console.log("file",req.files)

    
    
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

module.exports = {getRoom,addRoom,getRoomApi,getOneRoom}