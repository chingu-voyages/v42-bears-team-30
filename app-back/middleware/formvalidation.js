const {body} = require('express-validator');


const registerCheck = () => {
    retrun [
        body('name').trim().notEmpty().isLength({min: 6}),
        body('email').trim().isEmail()
    ]
}