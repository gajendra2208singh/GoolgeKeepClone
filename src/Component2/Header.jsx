import React from "react";
import logo from './Images/Logo (2).png';
import './Header.css';
const Header = ()=> {
return(
    <>
       <div className="header">
       <img className = "headerImage" src={logo}  alt="logo" width={70} />  
       </div>
    </>
)
}

export default Header;