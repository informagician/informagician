import React, { useState, useEffect } from 'react'
import Add from './Add'
import axios from 'axios'

const ListUsers = () => {

    const [ list, setList ] = useState({})

    useEffect(() => {

        axios.get(process.env.REACT_APP_API + 'auth')
            .then(res => {
                setList(res.data)
            })
            .catch(err => console.log(err))
    },[])
    console.log(list)

    return (
        <>
            <h2>Users</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Username</th>
                        <th>Creation Date</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
            <Add />
        </>
    )
}

export default ListUsers