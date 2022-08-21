import React, { useEffect, useState } from 'react'
import { category } from '../utilities/data';
import { motion } from 'framer-motion';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

const MenuItems = () => {

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cartItems, setCartItems] = useState([]);
  const [{produceSelection, cart}, dispatch] = useStateValue();
  const menuSelection = produceSelection?.filter((n) => n.category === selectedCategory);

  const addBasket = () => {  
        dispatch({
            type: actionType.SET_CART,
            cart : cartItems,
        });
        localStorage.setItem("cart", JSON.stringify(cartItems));

    }

  useEffect(() => {
  }, [selectedCategory]);

  useEffect(() => {
    setCartItems([...cart])
  }, []);

  useEffect(() => {
    addBasket()
  }, [cartItems]);

  return (
    <div>
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
          <article key={item.id} className={`menu-item bg-slate-50 rounded-2xl p-1 m-1 justify-center align-middle`} >
            <div>
              <img className="menu-item-image rounded-2xl" src={item.imageURL} alt={item.name}/>
              <div className='flex flex-row justify-center'>
                {
                  item.vegan && (
                    <div>
                      {console.log(item.name)}{console.log(item.vegan)}
                      <img src='https://t4.ftcdn.net/jpg/02/99/88/93/360_F_299889394_1prIwRtf6ndCfZegWOEeJRPKc56dTHFK.jpg' className="w-8" />
                    </div>
                  )
                }
                {
                  item.vegetarian && (
                    <div>
                      <img src='https://media.istockphoto.com/vectors/vegetarian-food-diet-icon-organic-bio-eco-symbol-no-meat-vegetarian-vector-id1183762814?k=20&m=1183762814&s=170667a&w=0&h=mIljQbwuhiJezFLqoZeEMMeeq8peQU-YUNJHBpKNA7Q=' className="w-8" />
                    </div>
                  )
                }
              </div>
            </div>
            <div className="menu-item-info p-2 flex flex-col">
                <header className="menu-item-title flex flex-row justify-between">
                    <h4 className=''><b>{item.name}{item.unit > 1 ? <><p className='text-slate-900 text-xs'>({item.unit} PCS)</p></> : <></>}</b></h4>
                    <h4 className="menu-item-price text-blue-600">${item.price}</h4>
                </header>
                <p className="menu-item-description overflow-auto">
                    {item.description}
                </p>
                <div onClick={() => setCartItems([...cartItems, item])} className=" text-center cursor-pointer p-1 border-red-600 border-2 rounded-2xl">
                  Add To<i className=" mx-1 fa fa-shopping-basket text-lg text-red-600"></i>
                </div>                  
            </div>
            </article>
          ))}
        </> 
        : <>
        {menuSelection && menuSelection.map((item) => (
          <article key={item.id} className={`menu-item bg-slate-50 rounded-2xl p-1 m-1 justify-center align-middle`} >
            <div>
              <img className="menu-item-image rounded-2xl" src={item.imageURL} alt={item.name}/>
              <div className='flex flex-row justify-center'>
                {
                  item.vegan && (
                    <div>
                      {console.log(item.name)}{console.log(item.vegan)}
                      <img src='https://t4.ftcdn.net/jpg/02/99/88/93/360_F_299889394_1prIwRtf6ndCfZegWOEeJRPKc56dTHFK.jpg' className="w-8" />
                    </div>
                  )
                }
                {
                  item.vegetarian && (
                    <div>
                      <img src='https://media.istockphoto.com/vectors/vegetarian-food-diet-icon-organic-bio-eco-symbol-no-meat-vegetarian-vector-id1183762814?k=20&m=1183762814&s=170667a&w=0&h=mIljQbwuhiJezFLqoZeEMMeeq8peQU-YUNJHBpKNA7Q=' className="w-8" />
                    </div>
                  )
                }
              </div>
            </div>
            <div className="menu-item-info p-2 flex flex-col">
                <header className="menu-item-title flex flex-row justify-between">
                    <h4 className=''><b>{item.name}{item.unit > 1 ? <><p className='text-slate-900 text-xs'>({item.unit} PCS)</p></> : <></>}</b></h4>
                    <h4 className="menu-item-price text-blue-600">${item.price}</h4>
                </header>
                <p className="menu-item-description overflow-auto">
                    {item.description}
                </p>
                <div onClick={() => setCartItems([...cartItems, item])} className=" text-center cursor-pointer p-1 border-red-600 border-2 rounded-2xl">
                  Add To<i className="mx-1 fa fa-shopping-basket text-lg text-red-600"></i>
                </div>                 
            </div>
          </article>
        ))}</>}
        
      </div>
    </div>
  )
}

export default MenuItems