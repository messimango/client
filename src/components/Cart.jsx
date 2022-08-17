import React from 'react';
import { motion } from 'framer-motion';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
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
                <div className='cart-body w-full md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-auto'> 
                    {
                        cart && cart.map(item => (
                        <div key={item.id} className='cart-item w-full bg-teal-100 flex items-center gap-2 p-2 rounded-lg'>
                        
                        <img src={item.imageURL}
                        alt='' 
                        className='cart-item-img w-20 h-20 rounded-full object-contain'
                        />

                        <div className='cart-item-info flex flex-row'>
                            <div className='gap-2'>
                                <h1 className='text-emerald-800 text-base'>
                                    {item.name}
                                    {item.unit > 1 ? <><p className='text-slate-900 text-xs'>({item.unit} PCS)</p></> : <></>}
                                </h1>

                                <p className='text-neutral-500'>${item.price}</p>

                                <button className='text-red-700'>Remove</button>
                            </div>

                            <div className='cart-item-buttons group flex flex-column items-center cursor-pointer'>

                                <motion.div whileTap={ {scale:0.7} }>
                                    <i className='fa-solid fa-caret-up text-emerald-800'></i>
                                </motion.div>

                                <span>1</span>

                                <motion.div whileTap={ {scale:0.7} }>
                                    <i className='fa-solid fa-caret-down text-emerald-800'></i>
                                </motion.div>

                            </div>
                        </div>

                        </div>
                    ))}
                    
                    
                    
                    
                    {/* totals and checkout options */}
                    <footer className='cart-footer w-full flex-1 bg-slate-50 flex flex-col px-8 py-3 justify-evenly rounded-t-[3rem]'>
                            <div className='cart-subtotal w-full flex items-center justify-between text-emerald-800'>
                                <h4>Subtotal:</h4>
                                <span>$100.00</span>
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
    
                ) : (
                    <div>
                        <h3>Empty Cart</h3>
                        <p>Looks like you haven't added anything to your cart yet!</p>


                        <h5>You can continue browsing or reserve a seat!</h5>
                        <motion.button onClick={closeCheckout} type='button' whileTap={{ scale:0.7 }}
                            className='continue-button text-lg my-2 bg-white text-emerald-800 rounded-full w-full p-2 font-bold'
                            > {'< Continue Shopping'}
                        </motion.button>

                        <motion.button onClick={closeCheckout} type='button' whileTap={{ scale:0.7 }}
                            className='continue-button text-lg my-2 bg-white text-emerald-800 rounded-full w-full p-2 font-bold'
                            > {'Reserve a Table'}
                        </motion.button>
                    </div>
                )
            }

        

    </motion.aside>
  )
}

export default Cart