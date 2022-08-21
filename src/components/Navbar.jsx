import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../Images/logo.png';
import Profile from '../Images/profile.png';
import { motion } from 'framer-motion';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
import { useState } from 'react';

const Navbar = () => {

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{user, cart, checkout}, dispatch] = useStateValue()
  const [openProfile, setOpenProfile] = useState(false)

  const login = async () => {
    if (!user) {
      const {user : {refreshToken, providerData}} = await signInWithPopup(firebaseAuth, provider)
    dispatch({
      type: actionType.SET_USER,
      user: providerData[0]
    });
    // add profile to local storage
    localStorage.setItem('user', JSON.stringify(providerData[0]));
    } else {
      setOpenProfile(!openProfile);
    }
    
  };

  const logout = () => {
    setOpenProfile(false);
    localStorage.clear();

    dispatch({
      type : actionType.SET_USER,
      user: null,
    });
  };

  const toggleCheckout = () => {
    dispatch({
      type: actionType.SET_CHECKOUT,
      checkout: !checkout,
    })
  }

  return (
    <div className='nav w-screen fixed z-999 px-16 p-6 bg-blue-800 h-24'>
      <div className='menu-items w-full h-full flex flex-row'>

        {/* Company Logo */}
        <Link to={'/'} className='company-logo flex gap-1 cursor-pointer px-4 py-2' onClick={() => setOpenProfile(false)}>

          <img src={Logo} className="company-image w-70 h-10" alt='Company Logo' />

        </Link>

        {/* Navbar Links */}

        <ul className='menu-options flex flex-row ml-auto'>
        <Link to={'menu'}>
          <motion.li  whileTap={{scale:0.7}}  onClick={() => setOpenProfile(false)} 
            className='contact-button cursor-pointer flex flex-col hover:bg-cyan-400 mx-2 text-center justify-center text-xl text-slate-50 font-bold rounded-md w-20 h-8'>
            Menu
          </motion.li>
        </Link>
        

          <motion.li  whileTap={{scale:0.7}}  onClick={() => setOpenProfile(false)} className='contact-button cursor-pointer flex flex-col hover:bg-cyan-400 p-2 rounded-full w-10 h-8'>
            <i className="fa-solid fa-phone text-center text-slate-50"></i>
          </motion.li>
          
          <motion.li  whileTap={{scale:0.7}} onClick={toggleCheckout} className='cart-button cursor-pointer flex flex-col hover:bg-cyan-400 p-2 rounded-md w-20 h-8 relative'>
            <i className="fa-solid fa-basket-shopping text-center text-slate-50">
              {cart && cart.length > 0 && (
                // only load if more than 1 item in cart
                <p className='bg-rose-500 rounded-full w-4 h-4 text-center text-xs text-slate-50 absolute top-0 right-5'>
                {cart.length}
              </p>
              )}
              
            </i>
          </motion.li>


          {/* Profile */}
          <div>
            <motion.li  whileTap={{scale:0.7}} className='profile-button cursor-pointer flex flex-col p-2 w-12 rounded-full shadow-lg hover:bg-slate-50' onClick={login}>
              <img src={user ? user.photoURL : Profile} alt='Profile' className='rounded-full'/>
            </motion.li>


            {
              openProfile && (
                <div className='bg-slate-50 shadow-xl absolute w-40 right-0'>
                {user && user.email=== 'umangpoudyal@gmail.com' && (
                  <Link to={'./Admin'}  onClick={() => setOpenProfile(false)}>
                    <motion.li className='hover:bg-blue-100 py-2 px-4 shadow-xl cursor-pointer'>Admin</motion.li>
                  </Link>
                )}

                {user && (
                  <Link to={'./Reservations'}  onClick={() => setOpenProfile(false)}>
                    <motion.li className='hover:bg-blue-100 py-2 px-4 shadow-xl cursor-pointer'>Reservation</motion.li>
                  </Link>
                )}
                
                <motion.li  onClick={() => setOpenProfile(false)} whileTap={{scale:0.7}} className='hover:bg-blue-100 py-2 px-4 shadow-xl cursor-pointer'>Account Settings</motion.li>
                <motion.li whileTap={{scale:0.7}} className='hover:bg-blue-100 py-2 px-4 shadow-xl cursor-pointer' onClick={logout}>Logout</motion.li>
              </div>
              )
            }
          </div>



        </ul>


      </div>
    </div>
    
  )
}

export default Navbar