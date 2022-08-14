import React, { useState } from 'react'
import { useStateValue } from '../context/StateProvider';

const Menu = () => {

  const [{produceSelection}, dispatch] = useStateValue();
  console.log(produceSelection)

  return (
    <div className='flex flex-col justify-center align-middle bg-slate-50'>
      <div className='py-8'>
          <h1 className='text-center'>Menu</h1>
          <div className="underline"></div>
      </div>

      <div id="buttons">
        <button >ENTREE</button>
      </div>

      <div id="products" className='bg-slate-400 p-4 grid justify-center w-11/12'>
        {produceSelection && produceSelection.map((item) => (
        <article className="bg-slate-300 rounded-2xl p-2 m-2 flex flex-row">
          <img className="border-4 border-red-700 rounded-2xl w-40" src={item.imageURL} alt={item.name}/>
          <div className="p-2">
              <header className="flex flex-row justify-between">
                  <h4 className=''><b>{item.name}{item.unit > 1 ? <><p className='text-slate-900 text-xs'>({item.unit} PCS)</p></> : <></>}</b></h4>
                  <h4 className="text-blue-600">${item.price}</h4>
              </header>
              <p className="overflow-auto">
                  {item.description}
              </p>                 
          </div>
          </article>
        ))}
      </div>
        
    </div>
  )
}

export default Menu