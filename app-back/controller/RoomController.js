const getRoom = (req,res) => {
    res.header('Cache-Control', 'no-cache');
    console.log("sesion",req.session);
    res.render('room',{
        user: req.user.username,
        sessionId: req.sessionID,
        cookiesAge: req.session.cookie.maxAge
    })

}

module.exports = {getRoom}