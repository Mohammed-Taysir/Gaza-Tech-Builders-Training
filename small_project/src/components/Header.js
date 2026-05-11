import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { auth } from "../firebase/Config";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

function Header() {
  const [user, loading, error] = useAuthState(auth);
  const { isDark, setIsDark } = useContext(ThemeContext);
  const navigate = useNavigate();
  const theme = isDark ? "dark" : "light";
  console.log(`User loged: ${user}`);
  useEffect(() => {
    localStorage.setItem("theme", theme);
    console.log(localStorage.getItem("theme"));
  }, [isDark]);

  const setTheme = () => {
    setIsDark((isDark) => !isDark);
  };
  return (
    <header className={`header ${theme}`} style = {{
      display: 'flex',
      alignItems: "center"
    }}>
      <Link to="/">
        <h1>Web Dev Roadmap</h1>
      </Link>

      <button
        className="theme"
        onClick={() => {
          setTheme();
        }}
      >
        {!isDark ? <CiLight /> : <MdDarkMode />}
      </button>

      <ul className="flex">
        {user && (
          <>
            <li className="main-list">
              <NavLink className={"main-link"} end to="/basics">
                Basics
              </NavLink>
            </li>
            <li className="main-list">
              <NavLink className="main-link" to="framework">
                Frameworks
              </NavLink>
            </li>
            <li className="main-list">
              <NavLink className="main-link" to="tips">
                Tips
              </NavLink>
            </li>
          </>
        )}
        {!user ? (
          <>
            <li className="main-list">
              <NavLink className="main-link" to="signin">
                Sign In
              </NavLink>
            </li>
            <li className="main-list">
              <NavLink className="main-link" to="register">
                Register
              </NavLink>
            </li>
          </>
        ) : (
          <li className="main-list">
            <button
              onClick={() => {
                signOut(auth)
                  .then(() => {
                    //signed out successs
                    navigate("/signin")
                    console.log("Signed out Success");
                    
                  })
                  .catch((error) => {
                    //An error happened
                    console.log("Signed out failed");
                  });
              }}
              className="main-link"
            >
              Sign Out
            </button>
          </li>
        )}
      </ul>
    </header>
  );
}

export default Header;
