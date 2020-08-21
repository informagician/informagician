import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {

    const [ credential, setCredential ] = useState({})

    const handleChange = e => {
        setCredential({
            ...credential,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = () => {

        console.log(credential)
        axios.post(process.env.REACT_APP_API + 'auth/login', credential)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    return (
        <>
        <label for="username">Username
            <input type="text" name="username" onChange={handleChange} />
        </label>
        <label for="password">Password
            <input type="password" name="password" onChange={handleChange} />
        </label>
        <input type="submit" value="Login" onClick={handleSubmit} />
        </>
    )
}

export default Login