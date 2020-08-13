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

    const handleSubmit = e => {
        axios.post()
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <>
            <h2>Add User</h2>
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