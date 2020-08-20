import React, { useState } from 'react'
import axios from 'axios'

const Add = () => {

    const [ user, setUser ] = useState({})

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        console.log(user)
        axios.post(process.env.REACT_APP_API + 'auth/add', user)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <>
            <h2>Add User</h2>
            <label>Firstname:
                <input type="text" name="firstname" onChange={handleChange} />
            </label>
            <label>Lastname:
                <input type="text" name="lastname" onChange={handleChange} />
            </label>
            <label>Email:
                <input type="text" name="email" onChange={handleChange} />
            </label>
            <label>
                Username:
                <input type="text" name="username" onChange={handleChange} />
            </label>
            <label>
                Password:
                <input type="password" name="password" onChange={handleChange} />
            </label>
            <input type="submit" value="Add User" onClick={handleSubmit} />
        </>
    )
}

export default Add