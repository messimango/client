import React, { useState } from 'react'
import { useEffect } from 'react';
import { useStateValue } from '../context/StateProvider';
import { category } from '../utilities/data';
import { motion } from 'framer-motion';

const Menu = () => {

  const [selectedCategory, setSelectedCategory] = useState('appetizer');
  const [{produceSelection}, dispatch] = useStateValue();
  const menuSelection = produceSelection?.filter((n) => n.category === selectedCategory);
  useEffect(() => {}, [selectedCategory]);

  

  return (
    <div className='flex flex-col justify-center align-middle bg-slate-50'>
      <div className='py-8'>
          <h1 className='text-center'>Menu</h1>
          <div className="underline"></div>
      </div>
      
      <div id="buttons" className='flex justify-center align-middle' >
        <motion.button whileTap={{scale : 0.7}} onClick={() => setSelectedCategory("all")} 
          className={`${selectedCategory === "all" ? "bg-red-500 text-slate-50 border-blue-900" :
          "bg-slate-50"} border-2 px-2 border-red-700 rounded-2xl`} > All
        </motion.button>
        {category && category.map((cate) => (
          <motion.button whileTap={{scale : 0.7}} key={cate.id} onClick={() => setSelectedCategory(cate.urlParamName)} 
          className={`mx-1 ${selectedCategory === cate.urlParamName ? "bg-red-500 text-slate-50 border-blue-900" :
           "bg-slate-50"} border-2 px-2 border-red-700 rounded-2xl`} >{cate.name}</motion.button>
        ))}
      </div>

      <div id="products" className='products bg-slate-50 p-4 grid justify-center w-11/12'>
        {selectedCategory === 'all'? <>
          {produceSelection && produceSelection.map((item) => (
          <article key={item.id} className={`menu-item bg-slate-200 rounded-2xl p-1 m-1 justify-center align-middle`} >
            <img className="menu-item-image rounded-2xl w-1/3" src={item.imageURL} alt={item.name}/>
            <div className="menu-item-info p-2 flex flex-col">
                <header className="menu-item-title flex flex-row justify-between">
                    <h4 className=''><b>{item.name}{item.unit > 1 ? <><p className='text-slate-900 text-xs'>({item.unit} PCS)</p></> : <></>}</b></h4>
                    <h4 className="menu-item-price text-blue-600">${item.price}</h4>
                </header>
                <p className="menu-item-description overflow-auto">
                    {item.description}
                </p>
                <button className="cursor-pointer p-1 border-red-600 border-2 rounded-2xl">
                  Add To<i className=" mx-1 fa fa-shopping-basket text-lg text-red-600"></i>
                </button>                  
            </div>
            </article>
          ))}
        </> 
        : <>
        {menuSelection && menuSelection.map((item) => (
          <article key={item.id} className={`menu-item bg-slate-200 rounded-2xl p-1 m-1 justify-center align-middle`} >
            <img className="menu-item-image border-4 rounded-2xl" src={item.imageURL} alt={item.name}/>
            <div className="menu-item-info p-2 flex flex-col">
                <header className="menu-item-title flex flex-row justify-between">
                    <h4 className=''><b>{item.name}{item.unit > 1 ? <><p className='text-slate-900 text-xs'>({item.unit} PCS)</p></> : <></>}</b></h4>
                    <h4 className="menu-item-price text-blue-600">${item.price}</h4>
                </header>
                <p className="menu-item-description overflow-auto">
                    {item.description}
                </p>
                <button class="cursor-pointer p-1 border-red-600 border-2 rounded-2xl">
                  Add To<i class="mx-1 fa fa-shopping-basket text-lg text-red-600"></i>
                </button>                 
            </div>
          </article>
        ))}</>}
        
      </div>
        
    </div>
  )
}

export default Menu