import React from 'react';
import './Pricing.css'; 

export default ()=> {

  const freePlan = [
    '2500 monthly sessions',
    '250 user recordings',
    '1 user license',
    'Email Support'
  ]

  const proPlan = [
    'For scaling and large organizations',
    'Custom monthly sessions & recordings',
    'Custom user license', 
    'on-demand support',
  ]

  const renderListItem =( item, key )=> (
    <div className='pccpbi-list-item' key={key}>
      <div className='pccpbi-li-tick'><span></span></div>
      <div className='pccpbi-li-text'>{item}</div>
    </div>
  )

  return (
    <div className='Pricing' id='pricing'>
      <div className='ap-heading -center'>
        <span>We have Best & Affordable</span>
        <span>Pricing Plans</span>
      </div>
      <div className='pc-container'>
        <div className='pcc-info'>
          <div className='pcci-head'>
            <span>Start your</span>
            <span>free <b>plan now</b></span>
          </div>
          <div className='pcci-body'>
            <span>
              Start using out 14 days of free Pro trial now and experience the 
              power of Analytics. Record up to 20,0000 session and understand 
              your users how they are using your website.
            </span>
            <span>
              Use our killer products like Heatmaps and User Flow to Analyse 
              which part of your website has to be taken care of, which part 
              is under performing and need to be fixed.
            </span>
          </div>
        </div>
        <div className='pcc-plans'>
          <div className='pccp-head'>
            <span>Start your</span>
            <span>free <b>plan now</b></span>
          </div>
          <div className='pccp-body'>
            <div className='pccpb-item'>
              <div className='pccpbi-head'>
                <div className='pccpbih-title'>
                  Lite
                  <span></span>
                </div>
                <div className='pccpbih-sub'>
                  <div>Free</div>
                  <span>with restrictions</span>
                </div>
              </div>
              <div className='pccpbi-sub'>Plan includes:</div>
              <div className='pccpbi-list'>
                {freePlan.map(renderListItem)}
              </div>
              <div className='pccpbi-button' onClick={window.openApp}>Start Now</div>
            </div>
            <div className='pccpb-item -blue'>
              <div className='pccpbi-head'>
                <div className='pccpbih-title'>
                  Enterprise
                  <span></span>
                </div>
                <div className='pccpbih-sub'>
                  {/* <div>49$</div>
                  <span>monthly</span> */}
                </div>
              </div>
              <div className='pccpbi-sub'>All of lite plus</div>
              <div className='pccpbi-list'>
                {proPlan.map(renderListItem)}
              </div>
              <div className='pccpbi-button -white' onClick={window.contactUs}>Contact Us</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}