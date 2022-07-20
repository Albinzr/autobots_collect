import React from 'react';
import './TopFeatures.css';
import playerImage from '../../assets/images/player.png'

export default ()=> {
  
  return (
    <div className='TopFeatures'>
      <div className='ap-heading -center'>
        <span>AI Generator</span>
      </div>
      <div className='ap-desc -center'>
        <span>
          Feed our AI Enging images, music and videos and it will generate a sync video.
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