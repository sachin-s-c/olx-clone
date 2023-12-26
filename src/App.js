import React, { useContext, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router,Route } from 'react-router-dom'; 
import Signup from './Components/Signup/Signup'; 
import Login from './Components/Login/Login'
import {AuthContext, FirebaseContext} from './store/Context';
import Create from './Components/Create/Create'
import Post from './store/PostContext';
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import View from './Components/View/View';

function App() {

  const{setUser} =useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  return (
    <div>
      <Post>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/sign-up">
          <Signup/>
        </Route>
        <Route path="/login">
      <Login/>
        </Route>
        <Route path="/create">
      <Create/>
        </Route>
        <Route path="/view">
      <View/>
        </Route>
      </Router>
      </Post>
    
    </div>
  );
}

export default App;
