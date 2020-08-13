import React from 'react'

const Nav = () => {

    return (
        <div className="top">
            <div className="nav-bar">
                <div className="logo">
                    <h1>Milo Rastgoo</h1>
                </div>
                <nav>
                    <a href="/">Home</a>
                    <a href="/projects">Projects</a>
                    <a href="/blog">Blog</a>
                    <a href="/login">Admin</a>
                </nav>
            </div>
        </div>
    )
}

export default Nav