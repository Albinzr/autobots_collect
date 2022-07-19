import React from 'react';
import './OurPartners.css';
import c1 from '../../assets/images/c1.png';
import c2 from '../../assets/images/c2.png';
import c3 from '../../assets/images/c3.png';
import c4 from '../../assets/images/c4.png';
import c5 from '../../assets/images/c5.png';

export default ()=> {
  return (
    <div className='OurPartners'>
      <div className='ap-heading -center'>Our Partners</div>
      <div className='op-container'>
        <div className='op-item'><img src={c2} alt=''/></div>
        <div className='op-item'><img src={c1} alt=''/></div>
        <div className='op-item'><img src={c3} alt=''/></div>
        <div className='op-item'><img src={c4} alt=''/></div>
        <div className='op-item'><img src={c5} alt=''/></div>
      </div>
    </div>
  )
}