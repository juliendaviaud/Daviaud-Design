import React, { useEffect, useRef, useState } from "react";
/* import classNames from "classnames"; */
import { HashLink as Link } from 'react-router-hash-link';
import "./MainMenu.css";
import logo from "../../assets/images/Daviaud-Design-Logo.svg";
import burgerMenuIcon from "../../assets/images/Burger-Menu.svg";
import closeIcon from "../../assets/images/white-cross.svg";

const MainMenu = ({isAbsolute}) => {
  /* const mainMenu = useRef(null); */

  /* useEffect(() => {
    if (isAbsolute) {
      mainMenu.current.classList.add("absolute");
    } else {
      if (mainMenu.current.classList.contains("absolute") && !isAbsolute) {
        mainMenu.current.classList.remove("absolute");
      }
    }
  }, [isAbsolute]); */

  const [menuIcon, setMenuIcon] = useState(burgerMenuIcon);

  const [burgerMenuOpenned, setburgerMenuOpenned] = useState(false);

  const refNavLinks = useRef(null);

  const openCloseBurgerMenu = () => {
    if (burgerMenuOpenned) {
      setburgerMenuOpenned(false);
      refNavLinks.current.classList.remove("main-menu-openned");
      setMenuIcon(burgerMenuIcon);
    } else {
      setburgerMenuOpenned(true);
      refNavLinks.current.classList.add("main-menu-openned");
      setMenuIcon(closeIcon);
    }
  };

  return (
    <div
      /* ref={mainMenu} */ /* className={props.history.location.pathname === '/' || props.history.location.pathname === '/about' ? "main-menu absolute":""} */ /* className="main-menu" */ /* className={classNames(
        "main-menu",
        {
          absolute: isAbsolute,
        }
      )} */
      className={isAbsolute ? "main-menu absolute" : "main-menu"}
    >
      <div className="main-menu-container">
        <a href="/">
          <img
            id="main-logo"
            width="70.59"
            height="78.28"
            src={logo}
            alt="Logo Daviaud Design"
          />
        </a>
        <div className="nav-links nav-links-desktop">
          <ul>
            <li>
              <Link to="/mes-realisations" onClick={openCloseBurgerMenu}>Réalisations</Link>
            </li>
            <li>
              <Link to="/#pricesPacks" onClick={openCloseBurgerMenu}>Prix</Link>
            </li>
            <li>
              <Link to="/#skills" onClick={openCloseBurgerMenu}>Compétences</Link>
            </li>
            <li>
              <Link to="/a-propos" onClick={openCloseBurgerMenu}>À propos de moi</Link>
            </li>
            <li>
              <Link to="/#contact" onClick={openCloseBurgerMenu}>Contact</Link>
            </li>
          </ul>
        </div>
        <div ref={refNavLinks} className="nav-links nav-links-mobile">
          <ul>
            <li>
              <Link to="/#projects" onClick={openCloseBurgerMenu}>Réalisations</Link>
            </li>
            <li>
              <Link to="/#pricesPacks" onClick={openCloseBurgerMenu}>Prix</Link>
            </li>
            <li>
              <Link to="/#skills" onClick={openCloseBurgerMenu}>Compétences</Link>
            </li>
            <li>
              <Link to="/a-propos" onClick={openCloseBurgerMenu}>À propos de moi</Link>
            </li>
            <li>
              <Link to="/#contact" onClick={openCloseBurgerMenu}>Contact</Link>
            </li>
          </ul>
        </div>
        <img
          onClick={openCloseBurgerMenu}
          id="burger-menu-icon"
          width="32"
          height="13"
          src={menuIcon}
          alt=""
        />
        {/* <button className='nav-toggler' type="button" aria-label='toggle curtain navigation'>
          <span className='line l1'></span>
          <span className='line l2'></span>
          <span className='line l3'></span>
        </button> */}
      </div>
    </div>

    /* const menuHamburger = document.querySelector(".menu-hamburger")
        const navLinks = document.querySelector(".nav-links")
 
        menuHamburger.addEventListener('click',()=>{
        navLinks.classList.toggle('mobile-menu')
        })*/
  );
};

export default MainMenu;
