import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./style.css";
//icons
import { FaHome } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";
import {FaUserMd} from 'react-icons/fa'
import virusIcon from '../../assets/virusIcon.png'

//Context
import langueSelectorContext from '../../context/languageSelectorContext'

const Navbar = () => {
  const languageSelector = useContext(langueSelectorContext)
  const [isActive, setIsActive] = useState(true);

  const handleToggle = () => {
    setIsActive(!isActive);
  };
  const changeLanguage = () =>{
    languageSelector.setLanguage(!languageSelector.language)
  }

  return (
    <nav>
      <div className="logo">
        <img src={virusIcon} alt="COVID-19 Icon"/>
        <h4>Covid-19</h4>
      </div>
      <ul className={isActive ? "nav-links" : "nav-links nav-active"}>
        <li>
          <Link to="/" onClick={handleToggle}>
            <FaHome className="nav-iconHome" />
            {languageSelector.languageValue.menuHome}
          </Link>
        </li>
        <li>
          <Link to="/information" onClick={handleToggle}>
          <FaUserMd className="nav-iconPrevention"/>          
          {languageSelector.languageValue.menuPreventions}
          </Link>
        </li>
        <li>
          <Link to="/stats" onClick={handleToggle}>
          <FaHeartbeat className="nav-iconHeart"/>          
          {languageSelector.languageValue.menuStats}
          </Link>
        </li>
        <li >
          <Link onClick={changeLanguage} to="#">
           <img  className="nav-iconLanguage"src={languageSelector.languageValue.Img} alt={languageSelector.languageValue.imgAlt}/>
            <p>{languageSelector.languageValue.menuLanguage}</p>
          </Link>
        </li>
      </ul>
      <div className="burger" onClick={handleToggle}>
        <div className={isActive ? "" : "line1"}></div>
        <div className={isActive ? "" : "line2"}></div>
        <div className={isActive ? "" : "line3"}></div>
      </div>
    </nav>
  );
};

export default Navbar;
