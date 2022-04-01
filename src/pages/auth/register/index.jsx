import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, FormFeedback, Input } from 'reactstrap';
import axios from 'axios';

import './style.scss'

const validationSchema = yup.object().shape({
    fullName: yup.string().min(5).required("Required field"),
    email: yup.string().email().required("Required field"),
    password: yup.string().min(8).required("Required field")
})

export default function Register() {

    const handleRegister = async () => {
        const data = formik.values
        await axios('http://localhost:8080/register', data)
        .then(res => {
            localStorage.setItem('access_token', res.data.accessToken)
        })        
        .catch(err => {
        // Fake Auth
            localStorage.setItem('access_token', "abcdefghi")
            window.location = "/register"
            console.error(err)
        })
    }

    const formik = useFormik({
        initialValues: {
            'Full Name' : '',
            'Email': '',
            'Password': ''
        },
        validationSchema: validationSchema,
        onSubmit: () => handleRegister()
    })

    console.log(formik.set)

    return (
        <div className="register-page">
            <form className="form-container" onSubmit={formik.handleSubmit}>
                <h1 className="title">Create Your Free Account</h1>
                <p className="desc">Register Now to Get More Recipes!</p>
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
                <Button className="btn-submit" type="submit">Register</Button>                
                <p className="signup">Already have an account? <a href="/login">Login</a></p>
            </form>
        </div>
    )
}