import React from 'react'
import Sidebar from './Sidebar'

const Dashboard = () => {

    return(
        <div className="row">
            <div className="col-2 sidebar">
                <Sidebar />
            </div>
            <div className="col-10">
                <h1>Dashboard</h1>
            </div>
        </div>
    )
}

export default Dashboard