const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

// Load User model
const AdminUser = require('../model/AdminUser');
module.exports = function(passport) {
    passport.use(
        new LocalStrategy({ 
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true,
        
        },(req,email, password, done) => {
        
            email = email.toString().trim();
            password = password.toString().trim()
            if(email === '' || password ==='' ) return done(null,false,req.flash('error','Fill in the entire field'));

            // Match user
            AdminUser.findOne({email: req.body.email},(err,user) =>{
                if (err) throw err;
                if(!user) return done(null,false,req.flash('error','This email does not exist'));
                
                bcrypt.compare(password,user.password, (err,isMatch) =>{
                    
                    if (err) throw err;
                    //if the password is not match
                    if(isMatch === false){
                        
                        return done(null,false,req.flash('error','Incorrect password'))
                    };
                    return done(null,user)
                })
                
            })
        })
    );

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        AdminUser.findById(id, function(err, user) {
            done(err, user);
        });
    });
};