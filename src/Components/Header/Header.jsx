import React from 'react'
import s from './Header.module.css'
import {NavLink} from 'react-router-dom'

const Header = props => {
    return (
        <header className={s.header}>
        <NavLink to='/profile'><img src="https://lever-client-logos.s3.amazonaws.com/82f46ce7-ca84-49d4-ba9b-f233bcb0b0cf-1564438005067.png" alt="logo"/></NavLink>
        <div className={s.loginBlock}>
            {props.isAuth
            ?  <div>{props.login} <button onClick={props.logout}>Logout</button></div>
            : <NavLink className={s.loginButton} to={'/login'}>Login</NavLink>}
            
        </div>
        </header>
    )
}

export default Header