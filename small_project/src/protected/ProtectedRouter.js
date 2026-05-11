
import React from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useNavigate } from 'react-router-dom';
import { auth } from "../firebase/Config";

function ProtectedRouter({children}) {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  if(!user)
    return <div style = {{
      width: "100%",
      height: "100%",
      display: 'flex',
      justifyContent: "center",
      alignItems: "center"
    }}>
      <p><button style = {{
        border: "none",
        color: "#1F2B8F",
        fontWeight: "bold",
        fontSize: "20px",
        cursor: "pointer"
      }}
      onClick={() => {
        navigate("/signin")
      }}
      >Sign In</button> to Continue</p>
    </div>
  return (
    <>
    {children}
    </>
  )
}

export default ProtectedRouter