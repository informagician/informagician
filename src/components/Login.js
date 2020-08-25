import React, { useState } from 'react'
import axios from 'axios'
import { Redirect, useHistory } from 'react-router-dom'

const Login = () => {

    const [ credential, setCredential ] = useState({})

    const history = useHistory()

    const handleChange = e => {
        setCredential({
            ...credential,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = () => {

        console.log(credential)
        axios.post(process.env.REACT_APP_API + 'auth/login', credential)
            .then(res => {
                localStorage.setItem('token', res.data)
                history.push('/dashboard')
            })
            .catch(err => console.log(err))
    }
    return (
        <>
        { window.localStorage.getItem('token') && <Redirect to='/dashboard'/>}
        <label htmlFor="username">Username
            <input type="text" name="username" onChange={handleChange} />
        </label>
        <label htmlFor="password">Password
            <input type="password" name="password" onChange={handleChange} />
        </label>
        <input type="submit" value="Login" onClick={handleSubmit} />
        </>
    )
}

export default Login