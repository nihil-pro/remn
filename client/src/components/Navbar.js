import React, {useContext} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'

export const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Сокращение ссылок</a>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink to="/create" className="nav-item nav-link">Создать</NavLink>
                    <NavLink to="/links" className="nav-item nav-link">Создать</NavLink>
                    <a href="/" onClick={logoutHandler} className="nav-item nav-link">Выйти</a>
                </div>
            </div>
        </nav>
    )
}