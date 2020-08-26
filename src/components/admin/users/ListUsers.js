import React, { useState, useEffect } from 'react'
import Add from './Add'
import { axiosWithAuth } from '../../../utils/axiosWithAuth'

const ListUsers = () => {

    const [ list, setList ] = useState({})

    useEffect(() => {

        axiosWithAuth().get(process.env.REACT_APP_API + 'auth')
            .then(res => {
                setList(res.data)
            })
            .catch(err => console.log(err))
    },[])

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
                <tbody>
                    {list.length > 0 && list.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.firstname}</td>
                        <td>{item.lastname}</td>
                        <td>{item.username}</td>
                        <td>{item.created_at}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
            <Add />
        </>
    )
}

export default ListUsers