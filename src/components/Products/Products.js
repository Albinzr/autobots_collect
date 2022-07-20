import React from 'react';
import './Products.css';
import analyticsImage from '../../assets/images/analytics.png'
import feedbackImage from '../../assets/images/feedback.png'
import trackingImage from '../../assets/images/tracking.png'

export default ()=> {
  return (
    <div className='Products' id='products'>
      <div className='p-heading'>
        <div className='ap-heading -center'>Our Products</div>
        <div className='p-sub ap-desc -center'>The products that helps you to do what excites </div>
      </div>

      <div className='p-row'>
        <div className='pr-col'>
          <div className='prc-head ap-subhead -ap-underline'>AI Generator</div>
          <div className='prc-desc ap-desc'>
            An effective prognosis to the most common pain point of our suite of apps - 
            How to reduce the time spend on editing, uploading and managing content.
            AI Generator will help in generating a sync video from your images, music and videos.
            Easy to modify and make changes to your content.
            Automtic upload to multiple social media platforms.
          </div>
          <div className='prc-img'>
            <img src={trackingImage} alt=''/>
          </div>
        </div>
        <div className='pr-col'>
          <div className='prc-item -orange'>
            <div className='prci-icon'>
              <i className='fas fa-camcorder'></i>
            </div>
            <div className='prci-body'>
              <div className='prcib-head'>Auto Video Maker</div>
              <div className='prcib-desc'>
                Provide Photos, Videos and Music to make generate fully creative sync video.
                
              </div>
            </div>
          </div>
          <div className='prc-item -orange'>
            <div className='prci-icon'>
              <i className='fas fa-bullseye-pointer'></i>
            </div>
            <div className='prci-body'>
              <div className='prcib-head'>Single click</div>
              <div className='prcib-desc'>
              You can make changes easily to generated video to make it more meaningful.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='p-row -reverse'>
        <div className='pr-bg-circle-1'></div>
        <div className='pr-col'>
          <div className='prc-head ap-subhead -ap-underline'>Analytics</div>
          <div className='prc-desc ap-desc'>
            See where users tap, what they ignore, 
            or where they get frustrated with Tap and Rage Heatmaps. 
            See typical usage patterns and identify critical elements 
            in one glance. Understand which Calls to Action 
            are performing well and which are not in order 
            to improve your conversion.
          </div>
          <div className='prc-img'>
            <img src={analyticsImage} alt=''/>
          </div>
        </div>
        <div className='pr-col'>
          <div className='prc-item -blue'>
            <div className='prci-icon'>
              <i className='fas fa-fire'></i>
            </div>
            <div className='prci-body'>
              <div className='prcib-head'>Heatmap</div>
              <div className='prcib-desc'>
                Visualize behavior – Understand what users want, care about, and do on your site by 
                visually representing their clicks, taps, and scrolling behavior – which are the 
                strongest indicators of visitor motivation and desire.
              </div>
            </div>
          </div>
          <div className='prc-item -blue'>
            <div className='prci-icon'>
              <i className='fas fa-filter'></i>
            </div>
            <div className='prci-body'>
              <div className='prcib-head'>Funnel</div>
              <div className='prcib-desc'>
                Where are your visitors dropping off? – Find the biggest opportunities for improvement 
                and testing by identifying on which page and at which step most visitors 
                are leaving your site
              </div>
            </div>
          </div>
          <div className='prc-item -blue'>
            <div className='prci-icon'>
              <i className='fas fa-chart-network'></i>
            </div>
            <div className='prci-body'>
              <div className='prcib-head'>User Flow</div>
              <div className='prcib-desc'>
                Discover the unknown, It’s easy to miss hidden bottlenecks. Use Screen Flow to understand 
                the big picture of your app in one single view. Save time by easily spotting unusual 
                user paths without the need to manually track events.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='p-row'>
        <div className='pr-bg-circle-2'></div>
        <div className='pr-col'>
          <div className='prc-head ap-subhead -ap-underline'>Feedbacks</div>
          <div className='prc-desc ap-desc'>
            Get your user feedback within seconds. You can easily customizable look and feel of each feedback tool for your web app
          </div>
          <div className='prc-img'>
            <img src={feedbackImage} alt=''/>
          </div>
        </div>
        <div className='pr-col'>
          <div className='prc-item -orange'>
            <div className='prci-icon'>
              <i className='fas fa-comment-alt-lines'></i>
            </div>
            <div className='prci-body'>
              <div className='prcib-head'>Feedback</div>
              <div className='prcib-desc'>
                Instant visual feedback – Give your visitors an easy way to leave instant visual feedback on your 
                website or app. See what people love and hate, identify issues, and find opportunities for growth.
              </div>
            </div>
          </div>
          <div className='prc-item -orange'>
            <div className='prci-icon'>
              <i className='fas fa-chart-pie'></i>
            </div>
            <div className='prci-body'>
              <div className='prcib-head'>Surveys</div>
              <div className='prcib-desc'>
                Get to know your audience better – Build your own responsive surveys using an easy editor. 
                Collect responses in real-time from any device. Distribute your surveys using web links, 
                emails or invite your visitors just before they abandon your site to uncover 
                their objections or concerns.
              </div>
            </div>
          </div>
          <div className='prc-item -orange'>
            <div className='prci-icon'>
              <i className='fas fa-file-alt'></i>
            </div>
            <div className='prci-body'>
              <div className='prcib-head'>Form Analysis</div>
              <div className='prcib-desc'>
                How are your forms used? – Improve online form completion rates by discovering which fields 
                take too long to ﬁll, which are left blank, and why your visitors abandon your form and page.
              </div>
            </div>
          </div>
          <div className='prc-item -orange'>
            <div className='prci-icon'>
              <i className='fas fa-chart-bar'></i>
            </div>
            <div className='prci-body'>
              <div className='prcib-head'>Polls</div>
              <div className='prcib-desc'>
                Polls Understand the reasons behind behavior – Improving the performance and experience of your 
                website starts with understanding what your visitors want and what's preventing them from achieving 
                it. Target questions to specific visitors anywhere on your web and mobile site.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}