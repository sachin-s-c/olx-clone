import React, { useState,useContext, } from 'react';

import Logo from '../../olx-logo.png';
import './Login.css';
import { FirebaseContext } from '../../store/Context';
import { useHistory,Link } from 'react-router-dom';
function Login() {
  const history=useHistory()
const {firebase}=useContext(FirebaseContext)
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const handleLogin=(e)=>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
       history.push('/')
    }).catch((err)=>{
      console.log(err);
    })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}

          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
       <Link to="/sign-up"><a>Signup</a></Link> 
      </div>
    </div>
  );
}

export default Login;
