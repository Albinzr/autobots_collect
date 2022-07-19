import React from 'react';
import './ContentWrapper.css';
export default ({ children })=> {
  return (
    <div className='ContentWrapper'>
      <div className='ContentWrapper-wrapper'>
        {children}
      </div>
    </div>
  )
}