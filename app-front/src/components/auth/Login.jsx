import React,{useState} from 'react'
import { Formik } from "formik";
import * as Yup from "yup";
import {loginUserRoute} from '../../utils/ApiRoute';
import axios from 'axios';

const Login = () => {

    const schema = Yup.object().shape({
        email: Yup.string()
            .required("Email is a required field")
            .email("Invalid email format"),
        password: Yup.string()
            .required("Password is a required field")
            
    });
    const handleSubmit = async (values,actions) =>{
        // alert(JSON.stringify(values))
        try {
            const {data} = await axios.post(loginUserRoute,values);
            console.log("data",data)
        
            //console.log("status",status)
            //alert(data.message)
        } catch (error) {
            alert(error)
        }
        

    }
    return (
        <>
            <Formik 
                validationSchema={schema}
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => handleSubmit(values)}
                
            >{(
                {
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    status
    
                }
            ) => (
                <form onSubmit={handleSubmit}>
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
                        <span className="error-info-input">{errors.password && touched.password && errors.password}</span>
                    </div>
              
                    <button className='btn-login' type="submit">Log In</button>
                    
            </form>
            )}

            </Formik>
            
        </>
    )
}

export default Login