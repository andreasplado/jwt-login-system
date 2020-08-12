import React from 'react';
import './style/App.css';
import LoginForm from "./login/LoginForm";
import {HomeComponent } from "./home/HomeComponent";
import RegisterForm from './register/RegisterForm';


function App() {
  if(localStorage.getItem('user') == null){

    return <div style={{textAlign : "center"}}>
    <div><LoginForm /></div>

  </div>
  }else{
    return <div style={{textAlign : "center"}}>
    <HomeComponent />
    <div><RegisterForm /></div>
    </div>
  }


}


export default App;
