import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext';
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";


function Header() {
  const {isDark, setIsDark} = useContext(ThemeContext);
  return (
    <header className= {`header ${isDark? "dark": "light"}`}>
        <Link  to = "/">
          <h1>Web Dev Roadmap</h1>
        </Link>

        <button className = 'theme' onClick={() => {
          setIsDark(isDark => !isDark)
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
        </ul>
      </header>
  )
}

export default Header