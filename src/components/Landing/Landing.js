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
          <span>Do what excites.</span>
        </div>
        <div className='lb-desc ap-desc'>
        We Understand your needs, So you can do what excites you.
        Use our platform to automate everything you need to do. So that you can focus on creating content.
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