import React from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import Landing from '../../components/Landing/Landing';
import TopFeatures from '../../components/TopFeatures/TopFeatures';
import Products from '../../components/Products/Products';
import Pricing from '../../components/Pricing/Pricing';
import Footer from '../../components/Footer/Footer';
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper';
import OurPartners from '../../components/OurPartners/OurPartners';

export default ()=> {
  
  return (
    <div className='Home'>
      <div className='h-head'>
        <Header/>
      </div>
      <div className='h-body'>
        <ContentWrapper>
          <Landing/>
          <OurPartners/>
          <TopFeatures/>
          <Products/>
          <Pricing/>
        </ContentWrapper>
        <Footer/>
      </div>
    </div>
  )
}