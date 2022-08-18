import React from "react";
import "./Header.css";
import logoImage from "../../assets/image/logo.png"

const Header = () => {
    return (
        <header className="header">
            <img src={logoImage} alt="logo"/>
        </header>
    )
};

export default Header;