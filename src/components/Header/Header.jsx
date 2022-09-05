import React from "react";
import "./Header.css";
import logoImage from "../../assets/image/logo.png"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className="header">
            <img src={logoImage} alt="logo"/>
            <div className="login-block">
                {props.isAuth ? props.login
                    : <NavLink to="/login">Login</NavLink>}
            </div>
        </header>
    )
};

export default Header;