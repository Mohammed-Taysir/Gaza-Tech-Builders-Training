import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

function Footer() {
  const {isDark} = useContext(ThemeContext);
  return (
    <footer className = {isDark? "dark": "light"}>
        React Course - Level 1 (session 1)
        <span>🧡</span>
      </footer>
  )
}

export default Footer