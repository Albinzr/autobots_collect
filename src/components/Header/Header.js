import React from 'react';
import './Header.css';
import logo from '../../assets/images/logoColor.png'

export default ()=> {

  const openApp =()=> window.open('https://app.applytics.in', '_blank')

  return (
    <div className='Header' id='header'>
      <div className='h-logo'>
        <img src={logo} alt=''/>
        <span>APPLYTICS</span>
      </div>
      <div className='h-navs'>
        <div className='hn-nav' onClick={()=> window.scrollElToView('header')}>Home.</div>
        <div className='hn-nav' onClick={()=> window.scrollElToView('products')}>Products.</div>
        <div className='hn-nav' onClick={()=> window.scrollElToView('pricing')}>Pricing.</div>
        <div className='hn-nav' onClick={()=> window.scrollElToView('contactUs')}>Contact Us.</div>
        <div className='hn-nav -white ap-button' onClick={openApp}>Login</div>
      </div>
    </div>
  )
}