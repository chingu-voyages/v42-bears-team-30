const AdminUser = require('../model/AdminUser')
const {validationResult} = require('express-validator');
const passport = require('passport')
const bcrypt = require('bcrypt')
const Login = (req,res) => {
    
    res.render('login',{
        layout: 'login',
        message: req.flash('error'),
        email: req.body.email,
        password: req.body.password
    })

}

const Register = (req,res) => {

    res.render('register',{
        layout: 'register',
    
    })

}
const logUser =  (req, res, next) => {
    
    passport.authenticate('local', {
      successRedirect: '/room',
      failureRedirect: '/auth/login',
      failureFlash: true
    })(req, res, next);
    


}


const registerUser = async (req,res) => {
    const { username,password,email,confirmPassword} = req.body;
    const saltRound = 10;

    // if(username ==='' || password ===''|| email === ''){
    //     const messages = req.flash('message', 'empty fields');
    //     console.log("messsage",messages)
    //     res.render('register',{
    //         layout: 'register',
    //         message: req.flash('message')
    //     }

    //     )
    // }
    
    try {
        let errors = validationResult(req)
        console.log("req.body",req.body)
        
        if(!errors.isEmpty()){
            console.log(errors.array());
        
            res.render('register',{
                layout: 'register', 
                errors: errors.array(),
                username,
                email,
                password,
                confirmPassword
            })

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

const logoutUser =  (req, res,next) => {
    req.logout((err) => {
        if (err) return next(err); 
        req.flash('success_msg', 'You are logged out');
        res.redirect('/auth/login');
      });
    
}




module.exports = {Login ,Register,logUser,registerUser,logoutUser}