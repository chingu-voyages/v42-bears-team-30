const AdminUser = require('../model/AdminUser')

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
    try {
        console.log("req.body",req.body)
        const user = new AdminUser(req.body);
        await user.save();
        res.redirect('/room')
        
    } catch (error) {
        console.log(error.message)
    }

}




module.exports = {Login ,Register,logUser,registerUser}