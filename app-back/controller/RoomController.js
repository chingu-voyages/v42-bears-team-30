const getRoom = (req,res) => {
    //res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    console.log("sesion",req.session);
    res.render('room',{
        user: req.user.username,
        sessionId: req.sessionID,
        cookiesAge: req.session.cookie.maxAge
    })

}

module.exports = {getRoom}