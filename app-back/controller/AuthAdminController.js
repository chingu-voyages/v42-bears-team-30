const AdminUser = require('../model/AdminUser')
const {validationResult} = require('express-validator');
const bcrypt = require('bcrypt')
const Login = (req,res) => {
    res.render('login',{
        layout: 'login',
    })

}

const Register = (req,res) => {

    res.render('register',{
        layout: 'register',
    })

}
const logUser = (req,res) => {


}
const registerUser = async (req,res) => {
    const { username ,email,password,confirmPassword} = req.body;
    const saltRound = 10;
    try {
        let errors = validationResult(req)
        console.log("req.body",req.body)

        if(!errors.isEmpty()){
            console.log(errors.array());
            let resultError = errors.array().map(error =>  error)
            return res.json({ resultError})

        }else{
            bcrypt.genSalt(saltRound,(err,salt) => {
                if(err) throw err;
                bcrypt.hash(password,salt,(errorHash,hash) =>{
                    if(errorHash) throw errorHash;
                    const adminUser = new AdminUser({ username: username,email:email,password:hash});
                    adminUser
                        .save()
                        .then(user => {
                            res.redirect('/auth/login')
                        })
                        .catch(err => console.log(err))
                })
                
            })
            
            
        }
        
        
    } catch (error) {
        console.log(error.message)
    }

}




module.exports = {Login ,Register,logUser,registerUser}