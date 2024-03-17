import React,{useState} from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {app} from "../firebase";
const auth=getAuth(app);
const SigninPage = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const signinUser=()=>{
        signInWithEmailAndPassword(auth,email,password).then((value)=>console.log('sigfn in sceess')).catch((err)=>console.log(err));
    }
  return (
    <div className="signin-page">
    <h1>Sign in</h1>
       <label>Enter your mail</label>
       <input onChange={(e)=>setEmail(e.target.value)}   value={email}
       type="email" placeholder='Enter your mail' />
       <label>Enter your password</label>
       <input onChange={(e)=>setPassword(e.target.value)}
        value={password} type="password" placeholder='Enter your assword' />
       <button onClick={signinUser}>Sign in</button>
    </div>
  )
}

export default SigninPage