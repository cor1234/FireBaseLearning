import React,{useState} from 'react';
import {app} from "../firebase";
import {getAuth,createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup} from "firebase/auth";
const auth=getAuth(app);
const googleProvider = new GoogleAuthProvider();
const SignupPage = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const createUser=()=>{
        createUserWithEmailAndPassword(auth,email,password).then((value)=>alert('Success'));
    }
    const signupWithGoogle=()=>{
        signInWithPopup(auth,googleProvider);
    }
  return (
    <div className="signup-page">
        <h1>Sign Up Page</h1>
        <label>Email</label>
        <input onChange={(e)=>setEmail(e.target.value)}
        value={email}
        type="email" required placeholder='Enter your mail'/>
        <label>Password</label>
        <input onChange={(e)=>setPassword(e.target.value)}
        value={password}
        type="password" required placeholder='Enter your mail'/>
        <button onClick={createUser}>SignUp</button>
        <br/>
        <button onClick={signupWithGoogle}>Sign in With Google</button>
    </div>
  )
}

export default SignupPage