
import React from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from 'react-router-dom';
import { auth } from "../firebase/Config";

function ProtectedRouter({children}) {
  const [user] = useAuthState(auth);
  if(!user)
    return <Navigate to = "/signin" replace/>
  return (
    <>
    {children}
    </>
  )
}

export default ProtectedRouter