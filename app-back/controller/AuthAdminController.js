

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



module.exports = {Login ,Register,logUser}