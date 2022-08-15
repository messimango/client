import React from 'react';
import { useStateValue } from '../context/StateProvider';

function FeaturedProducts() {

  const [{produceSelection}, dispatch] = useStateValue();
  const momoSelection = produceSelection?.filter((n) => n.category === 'momo');

  const slideLeft = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const slideRight = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500;
  }  

  return (
    <div>
      <div className='feature-box text-center'>
        <h1 className='font-bold text-slate-50 '>World Famous MO:MOs</h1>
        <div className='underline w-40'></div>
      </div>

      <div className='feature-products flex items-center mt-8'>
        <i onClick={slideLeft} className="fa-solid fa-chevron-left bg-slate-50 w-6  text-2xl opacity-60 cursor-pointer hover:opacity-100"></i>
           
              <div id="slider" className='w-full h-full overflow-auto scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                {momoSelection && momoSelection.map((item)=>(
                    <div key={item.id} className='feature-product bg-slate-100 w-2/5 inline-block border-4 rounded-lg border-blue-800 p-2 m-2 hover:scale-105'>
                        <div className='flex flex-row justify-center align-middle'>                          
                          <img className='h-32 drop-shadow-2xl hover:shadow-md border-red-700 border-2 m-2 rounded-lg w-2/5' src={item.imageURL} alt={item.name} />
                        
                          <div>
                            <h4 className='text-slate-900 text-center'>{item.name}{item.unit > 1 ? <><p className='text-slate-900 text-xs'>({item.unit} PCS)</p></> : <></>}</h4>

                            <h6 className='text-slate-900'>${item.price}</h6>                      
                            <button className='btn btn-danger btn-sm'>Add to Basket</button>
                          </div>
                        </div>
                        
                        
                        
                    </div>
                ))}
                
              </div>
           
            <i onClick={slideRight} className="fa-solid text-2xl bg-white w-6  fa-chevron-right opacity-60 cursor-pointer hover:opacity-100"></i>
      </div>

    </div>
    
  )
}

export default FeaturedProducts