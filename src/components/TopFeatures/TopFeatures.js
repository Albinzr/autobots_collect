import React from 'react';
import './TopFeatures.css';
import playerImage from '../../assets/images/player.png'

export default ()=> {
  
  return (
    <div className='TopFeatures'>
      <div className='ap-heading -center'>
        <span>Session Recording</span>
      </div>
      <div className='ap-desc -center'>
        <span>
          See what your users see - see your visitor’s clicks, taps and mouse movements you can identify usability issues on the fly and issues they encounter.
        </span>
      </div>
      <div className='tf-img'>
        <img src={playerImage}/>
      </div>
      <div className='tf-bg-circle'></div>
      <div className='tf-bg-circle-2'></div>
    </div>
  )
}