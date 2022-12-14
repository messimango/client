import React from 'react';
import { motion } from 'framer-motion';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
import CartItems from './CartItems';
import EmptyCart from '../Images/empty-cart.jpg';
import { Link } from 'react-router-dom';

const Cart = () => {
    
    const [{checkout, cart, user }, dispatch] = useStateValue()

    const closeCheckout = () => {
        dispatch({
            type: actionType.SET_CHECKOUT,
            checkout: !checkout,
          })
    }
    
    

  return (
    <motion.aside initial={{ opacity: 0, x: 200 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 200 }}
        className='cart-box flex fixed p-3 h-full top-0 right-0 flex-col bg-white drop-shadow-md show-cart'>

        {/* cart header */}
        <div className='cart-header flex flex-column'>
            <motion.div onClick={closeCheckout} className='text-left'>
                <i className="cart-close fa-solid fa-xmark fs-2"></i>
            </motion.div>

            
            <h1  className='text-center'>Your Cart</h1>

        </div>

        {/* cart body */}

       
        {
            cart && cart.length > 0 ? (
                <CartItems />
    
                ) : (
                    <div className=''>

                        <div className='empty-cart-box mb-2 p-4'>
                            <h3 className='font-bold text-6xl text-center mb-8'>Your Cart is Empty!</h3>
                            <p>Looks like you haven't added<br/> anything to your cart yet!</p>
                        </div>

                        <h5 className='text-center'>You can continue browsing or reserve a table!</h5>
                        
                        <motion.button onClick={closeCheckout} type='button' whileTap={{ scale:0.7 }}
                            className='continue-button text-lg my-2 bg-white text-emerald-800 rounded-full w-full p-2 font-bold'
                            > {'< Continue Shopping'}
                        </motion.button>

                        <Link to={'./Reservation'}>
                            <motion.button onClick={closeCheckout} type='button' whileTap={{ scale:0.7 }}
                                className='continue-button text-lg my-2 bg-white text-emerald-800 rounded-full w-full p-2 font-bold'
                                > {'Reserve a Table'}
                            </motion.button>
                        </Link>

                    </div>
                )
            }

        

    </motion.aside>
  )
}

export default Cart