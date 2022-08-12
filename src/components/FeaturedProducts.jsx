import React from 'react';
import { Rating } from '../components';
import { data } from '../utilities/data';


function FeaturedProducts() {

    const slideLeft = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500;
    }

  return (
    <div className='feature-box text-center'>
        <h1>Featured Products</h1>
        <div className='feature-products relative flex items-center'>
          <i onClick={slideLeft} className="fa-solid fa-chevron-left  opacity-60 cursor-pointer hover:opacity-100"></i>
          <div id="slider" className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
            {data && data.map(data=>(
                <div className='feature-product w-[200px] inline-block p-2 hover:scale-105 ease-in-out duration 300' key={data.id}>
                    <img src={data.image} alt={data.name} />
                    <h4>{data.name}</h4>
                    <Rating rating={data.rating} numOfReviews={data.numOfReviews} />            
                    <h6>${data.price}</h6>
                    
                    <button className='btn btn-warning btn-sm'>Add to Cart</button>
                </div>
            ))}
            
          </div>
          <i onClick={slideRight} className="fa-solid fa-chevron-right opacity-60 cursor-pointer hover:opacity-100"></i>
        </div>
    </div>
  )
}

export default FeaturedProducts