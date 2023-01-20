module.exports = {
    isLoggedIn:  (req,res,next) => {
        console.log("is logged in",req.user)
        if(req.isAuthenticated()){

            return next()
        }
        req.flash('error_message', 'Please log in to access the requested page');
        res.redirect('/auth/login')

        
    },
    isLoggedOut : (req,res,next) => {
        if(!req.isAuthenticated()){
            return next()
        }
        res.redirect('/room')
    }
}
