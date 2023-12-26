import React, { useContext, useState, } from 'react';

import Logo from '../../olx-logo.png';
import './Signup.css';
import {FirebaseContext} from '../../store/Context';
import { useHistory,Link } from 'react-router-dom';




export default function Signup() {

const history=useHistory()

 const [userName,setUserName]=useState("")
 const [email,setEmail]=useState("")
 const [phone,setPhone]=useState("")
 const [password,setPassword]=useState("")
 const {firebase}=useContext(FirebaseContext)


const handleSubmission=(e)=>{
  console.log(userName);
   console.log(firebase);
 e.preventDefault()
  firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
    result.user.updateProfile({displayName:userName}).then(()=>{
      firebase.firestore().collection('users').add({
       id:result.user.uid,
       username:userName,
       phone:phone

      }).then(()=>{
        history.push('/login')
      }).catch(err=>{
        console.log(err);
      })
    })
  })
  
}

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmission}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            value={userName}
            name="name"
            defaultValue="John"
            onChange={(e)=>{setUserName(e.target.value)}}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
          />
          <br />
          <label htmlFor="phone">Phone</label>
          <br />
          <input
           className='input'
           name='phone'
           id='phone'
           value={phone}
            onChange={(e)=>{setPhone(e.target.value)}}
          />
          <br/>
          <label htmlFor="lname">Password</label>
          <br/>
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
      < Link to='/login'><a>Login</a></Link> 
      </div>
    </div>
  );
}
