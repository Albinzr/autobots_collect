import React from 'react';
import './Header.css';
import logo from '../../assets/images/logoColor.png'
import login, { GoogleLogin } from 'react-google-login'
const cid = "487221318384-ofcbge87ktslfc4uiqh9sclr7cacfhfu.apps.googleusercontent.com"

const loginSuccess = (res) =>{
  console.log("loginSuccess",res)
};

const loginFailuer = (res) =>{
  console.log("loginFailuer",res)
};

export default ()=> {

  const openApp =()=> window.open('https://app.applytics.in', '_blank')

  return (
    <div className='Header' id='header'>
      <div className='h-logo'>
        <img src={logo} alt=''/>
        <span>Autobots.co.in</span>
      </div>
      <div className='h-navs'>
        <div className='hn-nav' onClick={()=> window.scrollElToView('header')}>Home.</div>
        <div className='hn-nav' onClick={()=> window.scrollElToView('products')}>Products.</div>
        {/* <div className='hn-nav' onClick={()=> window.scrollElToView('pricing')}>Pricing.</div> */}
        <div className='hn-nav' onClick={()=> window.scrollElToView('contactUs')}>Contact Us.</div>
        <div className='hn-nav -white ap-button' id='signInButton'>
          <GoogleLogin clientId={cid} buttonText="Sign In" onSuccess={loginSuccess} onFailure={loginFailuer}/>
        </div>
      </div>
    </div>
  )
}