import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useStateValue } from '../context/StateProvider';
import { Link } from 'react-router-dom';
import { actionType } from '../context/reducer';
import CartItem from './CartItem';



const CartItems = () => {
   
    const [{user, cart, checkout}, dispatch] = useStateValue();    
    const [cartItems, setCartItems] = useState();

    

    const closeCheckout = () => {
        dispatch({
            type: actionType.SET_CHECKOUT,
            checkout: !checkout,
          })
    };
    
    
    useEffect(() => {
      setCartItems(cart)
    }, [cartItems])
    


  return (
    <div className='cart-body w-full md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-auto'> 
                    {
                        cart && cart.map(data => (
                        <CartItem  key={data.id} data={data}/>
                    ))}
                    
                    
                    
                    
                    {/* totals and checkout options */}
                    <footer className='cart-footer w-full flex-1 bg-slate-50 flex flex-col px-8 py-3 justify-evenly rounded-t-[3rem]'>
                            <div className='cart-subtotal w-full flex items-center justify-between text-emerald-800'>
                                <h4>Subtotal:</h4>
                                <span>${100.00}</span>
                            </div>

                            <div className='cart-shipping w-full flex items-center justify-between text-emerald-800'>
                                <h4>Shipping:</h4>
                                <span>Calculated At Checkout</span>
                            </div>

                            <div className='cart-tax w-full flex items-center justify-between text-emerald-800'>
                                <h4>Tax:</h4>
                                <span>$13.00</span>
                            </div>
                            

                            <hr></hr>
                            <div className='cart-total w-full flex items-center justify-between text-emerald-800'>
                                <h2>Order Total:</h2>
                                <span className='font-bold text-xl '>$113.00</span>
                            </div>
                            
                            {
                                user ? (
                                    <motion.button type='button' whileTap={{ scale:0.7 }}
                                        className='checkout-button text-lg my-2 bg-red-500 text-slate-50 rounded-full w-full p-2
                                        hover:shadow-lg hover:bg-slate-50 hover:text-red-600 font-bold border-3 border-red-600'
                                        > Checkout 
                                    </motion.button>
                                ) : (
                                    <Link to={'/login'}>
                                        <motion.button type='button' whileTap={{ scale:0.7 }}
                                            className='checkout-button text-lg my-2 bg-red-500 text-slate-50 rounded-full w-full p-2
                                            hover:shadow-lg hover:bg-slate-50 hover:text-red-600 font-bold border-3 border-red-600'
                                        > Login 
                                        </motion.button>
                                    </Link>
                                )
                            }
                            

                            <motion.button onClick={closeCheckout} type='button' whileTap={{ scale:0.7 }}
                            className='continue-button text-lg my-2 bg-white text-emerald-800 rounded-full w-full p-2 font-bold'
                            > {'< Continue Browsing'}</motion.button>

                        </footer>
                    
                </div>
  )
}

export default CartItems