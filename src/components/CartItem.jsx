import React, { useEffect, useState }  from 'react'
import { motion } from 'framer-motion';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

let sub = [];

const CartItem = ({ data }) => {

    const [{ cart }, dispatch] = useStateValue();
    const [amt, setAmt] = useState(data.qty); 

    const updateCart = () => {        
        localStorage.setItem('cart', JSON.stringify(sub));
            dispatch({
                type: actionType.SET_CART,
                cart: sub,
          });
    };    

    const changeQty = (action, id) => {
        if(action == "plus") {
            setAmt(amt + 1);
            cart.map((item) => {
                if(item.id === id) {
                    item.qty++;
                }
            });
            updateCart();
        } else if (action == "minus") {            
            if (amt == 1) {
                sub = cart.filter((item) => item.id !== id)
                updateCart();
            } else {
                setAmt(amt - 1);
                cart.map((item) => {
                    if (item.id === id) {
                        item.qty--;
                    }
                });
                updateCart();
            }            
        }
    };

    const removeItem = () => {
        console.log('pressed')
    }

    useEffect(() => {
        sub = cart;
    }, [amt, sub]);


  return (
    <div className='cart-item w-full bg-teal-100 flex items-center gap-2 p-2 rounded-lg'>
                        
                        <img src={data.imageURL}
                        alt='' 
                        className='cart-item-img w-20 h-20 rounded-full object-contain'
                        />

                        <div className='cart-item-info'>
                            <div className='gap-2'>
                                <h1 className='text-emerald-800 text-base'>
                                    {data.name}
                                    {data.unit > 1 ? <><p className='text-slate-900 text-xs'>({data.unit} PCS)</p></> : <></>}
                                </h1>
                                
                                <h2 className='text-xl font-semibold'>${parseFloat(data.price * data.qty).toFixed(2)}</h2>
                                {
                                    data.qty > 1 && (
                                        <p className='text-neutral-500'>${data.price}/ea</p>
                                    )
                                }    

                                <button onClick={() => removeItem(data.id)} className='text-red-700'>Remove</button>
                            </div>

                            <div className='cart-item-buttons group flex flex-column items-center cursor-pointer'>

                                <motion.div onClick={() => changeQty("plus", data.id)} whileTap={ {scale:0.7} }>
                                    <i className='fa-solid fa-caret-up text-emerald-800'></i>
                                </motion.div>

                                <span>{data.qty}</span>

                                <motion.div onClick={() => changeQty("minus", data.id)} whileTap={ {scale:0.7} }>
                                    <i className='fa-solid fa-caret-down text-emerald-800'></i>
                                </motion.div>

                            </div>
                        </div>

                        </div>
  )
}

export default CartItem