import React,{useState} from 'react'
import { Formik } from "formik";
import * as Yup from "yup";
import axios from 'axios'
import {registerUserRoute} from '../../utils/ApiRoute'
const Register = ({setShowRegister}) => {

    const schema = Yup.object().shape({
        username: Yup.string()
            .required("Email is a required field")
            .min(4, "Username must be at least 4 characters"),
        email: Yup.string()
            .required("Email is a required field")
            .email("Invalid email format"),
        phoneNumber: Yup.string()
            .required("Phone number is required")
            .min(10, "Number must be at least 10 characters"),
        password: Yup.string()
            .required("Password is a required field")
            .min(8, "Password must be at least 8 characters"),
        confirmPassword: Yup.string()
            .required("Password is a required field")
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
       

    });

    const handleSubmit = async (values,actions) => {
        try {
            const {data} = await axios.post(registerUserRoute,values)
            console.log("data",data);
            
            alert(data.message)
            setShowRegister(false)
        } catch (error) {
            if(error) throw error
        }
        
            
            

    }

    return (
        <>
            <Formik 
                validationSchema={schema}
                initialValues={{ username:"",email: "",phoneNumber: "", password: "" ,confirmPassword: ""}}
                onSubmit={(values,actions) =>handleSubmit(values,actions)}
                
            >{(
                {
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                  
    
                }
            ) => (
                <form onSubmit={handleSubmit}>
                    <div className="input-from">

                        <input
                            className='form-control'
                            type="text"
                            name='username'
                            placeholder="Username"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.username}
                            autoComplete='off'
                        />
                        <span className="error-info-input">
                            {errors.username && touched.username && errors.username}
                        </span>
                    </div>

                    <div className="input-from">

                        <input
                            className='form-control'
                            type="text"
                            name='phoneNumber'
                            placeholder="Phone Number"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.phoneNumber}
                            autoComplete='off'
                        />
                        <span className="error-info-input">
                            {errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}<br/>
                            
                        </span>
                    </div>

                    <div className="input-from">
                        <input
                            className='form-control'
                            type="email"
                            name='email'
                            placeholder="Email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            autoComplete='off'
                        />
                        
                        <span className="error-info-input">
                            {errors.email && touched.email && errors.email}
                        </span>

                    </div>
                    
                    <div className="input-from">

                        <input
                            className='form-control'
                            type="password"
                            name='password'
                            placeholder="Password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            autoComplete='off'
                        />
                        <span className="error-info-input">
                            {errors.password && touched.password && errors.password}
                        </span>
                    </div>

                    <div className="input-from">
                        <input
                            className='form-control'
                            type="password"
                            name='confirmPassword'
                            placeholder="Confirm Password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.confirmPassword}
                            autoComplete='off'
                        />
                        <span className="error-info-input">{errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}</span>
                    
                    </div>
                    

                    <button className='btn-login' type="submit">Register</button>
                    
            </form>
            )}

            </Formik>
            
        </>
    )
}

export default Register