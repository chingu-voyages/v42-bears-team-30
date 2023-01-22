const AdminUser = require('../model/AdminUser')
const {validationResult} = require('express-validator');
const passport = require('passport')
const bcrypt = require('bcrypt')
const Login = (req,res) => {
    //res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    
    res.render('login',{
        layout: 'login',
    })

}

const Register = (req,res) => {
    //res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    res.render('register',{
        layout: 'register',
    
    })

}
const logUser =  (req, res,next) => {

    const {email,password} = req.body;

    passport.authenticate('local',(err,user,info) => {
        
        if(err) return next(err)
        if(!user) return res.render('login', {
            layout: 'login',
            message : req.flash('error'),
            email:email.toString().trim(),//trim() remove spaces before and after the letter
            password:password.toString().trim()// trim() remove spaces before and after the letter
        })
        req.login(user, err => {
            if(err) return next(err)
            return res.redirect('/room')
            
        })
    })(req,res,next)


}

const registerUser = async (req,res) => {
    const { username,password,email,confirmPassword} = req.body;
    const saltRound = 10;
    
    try {
        let errors = validationResult(req)
        const newError = errors.array().map((error,index) => {
            error.id = index;
            return error;
        
        })
        console.log("new eroor",newError)
        if(!errors.isEmpty()){

        res.render('register',{
                layout: 'register', 
                errors: newError,
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
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
        req.flash('success_msg', 'You are logged out');

        res.redirect('/auth/login');
      });
  
}




module.exports = {Login ,Register,logUser,registerUser,logoutUser}