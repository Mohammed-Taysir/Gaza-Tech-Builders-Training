import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext';
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";


function Header() {
  const {isDark, setIsDark} = useContext(ThemeContext);
  const theme = isDark? "dark": "light";

  useEffect(() => {    
    localStorage.setItem("theme", theme);
    console.log(localStorage.getItem('theme'))
  }, [isDark]);

  const setTheme = () => {
    setIsDark(isDark => !isDark);  
  }
  return (
    <header className= {`header ${theme}`}>
        <Link  to = "/">
          <h1>Web Dev Roadmap</h1>
        </Link>

        <button className = 'theme' onClick={() => {
          setTheme()
        }}>
          {!isDark? <CiLight />: <MdDarkMode />}
        </button>

        <ul className="flex">
          <li className="main-list">
            <NavLink className= {"main-link"} end to = '/basics'>Basics</NavLink>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to = 'framework' >
              Frameworks
            </NavLink>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to = 'tips'>
              Tips
            </NavLink>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to = 'signin'>
              Sign In
            </NavLink>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to = 'register'>
              Register
            </NavLink>
          </li>
        </ul>
      </header>
  )
}

export default Header