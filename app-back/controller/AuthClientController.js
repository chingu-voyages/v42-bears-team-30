const ClientUser = require('../model/ClientUser');
const bcrypt = require('bcrypt')
const getAllUserClient = (req,res) => {
    console.log("sesion",req.session.passport);
    res.render('userClient',{
        user: req.user.username,
        sessionId: req.sessionID,
        cookiesAge: req.session.cookie.maxAge
    })

}
const loginUserClient = (req,res) => {
    console.log('user',req.body)
}

const registerUserClient = (req,res) => {
    const {username,email,phoneNumber,password} =req.body;
    const saltRound = 10;
    try{
        ClientUser.findOne({email: email},(err,user) => {
            if(err) return res.json({staus: '500',message: "An error occured"});
            if(user) return res.json({staus: '400',message: "Email already existed"});
            bcrypt.genSalt(saltRound,(err,salt) => {
                if(err) throw err;
                bcrypt.hash(password,salt,(errorHash,hash) =>{
                    if(errorHash) throw errorHash;
                    const clientUser = new ClientUser({ username: username,email:email,phoneNumber:phoneNumber,password:hash});
                    clientUser
                        .save()
                        .then(() => {
                            return res.json({status: '200',message: "ajout avec success"})
                        })
                        .catch(err => res.json({status: '500',message:err}))
                })
                
            })

        })

    }catch(error){
        return res.json({status: "500",message: error.message})
    }
    

}
module.exports = {loginUserClient,registerUserClient,getAllUserClient}