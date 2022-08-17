import React from 'react'
import MenuItems from './MenuItems';

const Menu = () => {
  return (
    <div className='flex flex-col justify-center align-middle bg-slate-50'>
      <div className='py-8'>
          <h1 className='text-center'>Menu</h1>
          <div className="underline"></div>
      </div>

      <MenuItems />     
        
    </div>
  )
}

export default Menu