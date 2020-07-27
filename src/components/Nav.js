import React from 'react'

const Nav = () => {

    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Projects</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/blog">Blog</a>
            </li>

        </ul>
    )
}

export default Nav