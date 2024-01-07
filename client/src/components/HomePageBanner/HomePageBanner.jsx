import React from 'react';
import './HomePageBanner.css';
import FoodTypes2 from './FoodTypes2';
import FeatherRight from './FeatherRight';
import FeatherLeft from './FeatherLeft';                              

const HomePageBanner = () => {

  return (
    <div className='banner d-flex'>
      <FeatherLeft />
      <div className='mt-2 me-4 d-inline food-type'>
        <FoodTypes2 />
      </div>
      <FeatherRight />
    </div>
  );
};

export default HomePageBanner;