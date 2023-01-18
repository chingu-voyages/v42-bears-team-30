const {body} = require('express-validator');
//load user modal
const adminUser = require('../model/AdminUser')

const registerCheck = () => {
    return [
        body('username')
            .trim().notEmpty().withMessage('username field is required')
            .isLength({min: 4}).withMessage('the username lenght is at least 4 '),
        body('email')
            .isEmail().withMessage('This is not an email')
            .notEmpty().withMessage('Email field is required')
            .custom(async value => {
                const user = await adminUser.findOne({ value });
                if (user) {
                    return Promise.reject('email already exist');
                }
                
            }),
        body('password')
            .notEmpty().withMessage('Password field is required')
            .isLength({min: 6}),
        body('confirmPassword')
            .notEmpty().withMessage('Confirm password is required')
            .custom((value,{req}) =>{
            if(value !== req.body.password){
                throw new Error('Password not equal to confirm password');
            }

            // Indicates the success of this synchronous custom validator
            return true;
        })
    ]
}

module.exports = {registerCheck}