import React, { useState } from 'react';
import './Landing.css';
import landingImage from '../../assets/images/landing.png'

export default ()=> {

  const [email, setEmailValue] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [emailError, setEmailError] = useState(false)

  const onEmailChange = e => {
    let emailVal = e.target.value || '';
    let isValid = ((emailVal.split('@') || [])[1] || '').split('.').length > 1;
    setEmailValue(emailVal)
    setEmailValid(isValid)
  }
  
  const validateEmail =()=> {
    if(emailValid) {
      window.openApp()
      // console.log(email);
    } else {
      setEmailError(true);
    }
  }

  return (
    <div className='Landing'>
      <div className='l-block'>
        <div className='lb-heading ap-heading'>
          <span>Know your</span>
          <span>user experience</span>
          <span>like a pro</span>
        </div>
        <div className='lb-desc ap-desc'>
          Understand your user by the click of a button, Learn how your customers 
          use your web app’s and always staying ahead of the game
        </div>
        <input onKeyUp={onEmailChange} placeholder='Your Email' className={'lb-input ' + (emailError && ' -emErr ') + (!emailValid && ' -invalid')}/>
        <div className='lb-button ap-button' onClick={validateEmail}>Start Now</div>
      </div>
      <div className='l-block'>
        <img src={landingImage}/>
      </div>
    </div>
  )
}