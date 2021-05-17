import React from 'react'

export const Navbar = () => {
    return (
        <nav >
            <ul className="nav justify-content-center top-fixed">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">
                        <img src="assets/img/logo.png" alt="..." className="img-logo"/>
                    </a>
                </li>
            </ul>
        </nav>
    )
}
