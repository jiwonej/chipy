import React from 'react';
import { useState } from "react"
import './Nav.css';
import menuIcon from '../../assets/icons/menu.svg';

const Nav: React.FC<{}> = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=<device-width>, initial-scale=1.0" />
      <meta name="author" content="Jiwon Shin" />
      <title>Navigation bar</title>
    </head>
    <body>
      <nav className="navbar">
        <a href="/" className="logo">Chipy</a>
        <button className="menu-button" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>
          <img src={menuIcon} className="menuIcon" alt="menu" />
        </button>
        <div className={isNavExpanded ? "nav-menu expanded" : "nav-menu"}>
          <ul>
            <li><a href="/collection">Collection</a></li>
            <li><a href="/about-us">About Us</a></li>
          </ul>
        </div>
      </nav>
    </body>
    </html>
  )
}

export default Nav