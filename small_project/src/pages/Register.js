import React, { useState } from "react";
import AuthForm from "../components/AuthForm";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/Config";


function Register() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  return (
    <AuthForm page="Sign Up" handleEmail = {setEmail} handlePassword = {setPassword} error = {error} errorMessage={errMessage}>
      <button
        onClick={(e) => {
          e.preventDefault()
          createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed up
              const user = userCredential.user;
              setError(false)
              // ...
              console.log("Success")
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setError(true)
              setErrMessage(errorCode)

              console.log(`error: ${errorMessage} Error Code: ${errorCode}`)
              // ..
            });
        }}
      >
        Sign Up
      </button>
    </AuthForm>
  );
}

export default Register;
