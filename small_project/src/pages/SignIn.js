import React, { useState } from 'react'
import AuthForm from '../components/AuthForm'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/Config'
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const navigate = useNavigate();
  return (
    
      <AuthForm page = "Sign In" handleEmail={setEmail} handlePassword={setPassword} error = {error} errorMessage={errMessage} >
        <button onClick={
          (e) => {
            e.preventDefault();
            signInWithEmailAndPassword(auth, email, password).then((userCredntial)=> {
              const user = userCredntial.user;
              setError(false)
              navigate("/")
            }).catch((error)=> {
              const errorCode = error.code;
              const errorMessage = error.message;
              setError(true)
              setErrMessage(errorCode);
              console.log(`Error Message is: ${error}`)
              
            })
          }
        }>
          Sign In
        </button>
      </AuthForm>

  )
}

export default SignIn