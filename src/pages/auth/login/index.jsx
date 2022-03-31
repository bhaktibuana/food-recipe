import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, FormFeedback, Input } from 'reactstrap';
import axios from 'axios';

import './style.scss'

const validationSchema = yup.object().shape({
    email: yup.string().email().required("Required field"),
    password: yup.string().min(8).required("Required field")
})

export default function Login() {

    const handleLogin = async () => {
        const data = formik.values
        await axios('http://localhost:8080/login', data)
        .then(res => {
            localStorage.setItem('access_token', res.data.accessToken)
        })        
        .catch(err => {
        // Fake Auth
            localStorage.setItem('access_token', "abcdefghi")
            window.location = "/home"
            console.error(err)
        })
    }

    const formik = useFormik({
        initialValues: {
            'Email': '',
            'Password': ''
        },
        validationSchema: validationSchema,
        onSubmit: () => handleLogin()
    })

    console.log(formik.set)

    return (
        <div className="login-page">
            <form className="form-container" onSubmit={formik.handleSubmit}>
                <h1 className="title">MealMe</h1>
                <p className="desc">Log in With Your Email Address and Password</p>
                {
                    Object.keys(formik.initialValues).map((key, idx) => (
                        <div key={idx} className="row-input">
                            <Input
                                type={key === "password" ? "password" : "text"}
                                id={key}
                                name={key}
                                placeholder={key}
                                value={formik.values[key]}
                                onChange={formik.handleChange}
                                invalid={formik.touched[key] && Boolean(formik.errors[key])}
                            />
                            {
                                formik.touched[key] && Boolean(formik.errors[key]) &&
                                <FormFeedback className="error-feedback">{formik.errors[key]}</FormFeedback>
                            }
                        </div>
                    ))
                }
                <br/>
                <input type="checkbox" name="checkbox" value="remember"/> 
        <label for="checkbox"> Remember Me</label>
                <Button className="btn-submit" type="submit">Login</Button>
                <p className="signup">Do not have an account? <a href="/register">Register</a></p>
            </form>
        </div>
    )
}