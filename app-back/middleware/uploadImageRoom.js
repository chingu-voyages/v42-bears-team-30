const multer = require("multer");

var storage = multer.diskStorage({
    destination : (req,file,cb) =>{
        cb(null,"public/uploads/images");
    },
    filename : (req,file,cb) =>{
        var ext = file.originalname.substr(file.originalname.lastIndexOf('.'));
        cb(null, file.fieldname + '-' + Date.now() + ext);
    },

});

var stores = multer({ 
    storage: storage,
  
 });
module.exports = stores;