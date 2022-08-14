import React from 'react'
import FeaturedProducts from './FeaturedProducts';
import NewDrinks from './NewDrinks';
import WinterBanner from './WinterBanner';


const Homepage = () => {

  return (
    <div className='homepage'>
      <WinterBanner />
      
      <FeaturedProducts />

      <NewDrinks />
      
    </div>
  )
}

export default Homepage