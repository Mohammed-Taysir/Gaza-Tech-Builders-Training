import React from "react";
import { Link } from "react-router-dom";

function AuthForm({ page, handleEmail, handlePassword,error, errorMessage, children }) {
  return (
    <div className = 'form-container'>
      
      <form>
        <input required placeholder="email" type="email" 
        onChange = {(e) => { 
          handleEmail(e.target.value)
         }}
          />

        <input required placeholder="password" type="password"
        onChange={(e) => { 
          handlePassword(e.target.value)
         }}
          />
        {children}
        <p className="account">
          <Link to= {page === "Sign In"? "/register": '/signin'}>{page === "Sign In"? "Sign Up": 'Sign In'}</Link>
        </p>
        {error && <p style = {{
          color: "red",
          fontSize: '18px'
        }}>{errorMessage.replace("auth/", "").replace("-", " ")}</p>}
      </form>
    </div>
  );
}

export default AuthForm;
