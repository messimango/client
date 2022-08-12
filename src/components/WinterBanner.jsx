import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

const WinterBanner = () => {
  return (
    <div>
        <main className='featured flex flex-col justify-center' style={{ 
        backgroundImage: `url("https://media.istockphoto.com/photos/frosty-patterns-on-the-edge-of-a-frozen-window-picture-id1347295405?b=1&k=20&m=1347295405&s=170667a&w=0&h=qBVS-SHI4dCc1HsCYBabOOVfAT6_Ylc6_RrbZrJekMY=")` 
            }}>
          <div className='flex flex-row justify-center p-2'><i className="fa-solid fa-snowflake text-slate-50 bg-pink-500 rounded-full bg-opacity-70 mt-2 text-xl shadow-xl"></i> <hr></hr><h1 className='text-blue-90 font-bold text-2xl text-slate-50 bg-pink-500 rounded-full bg-opacity-70 mt-2 shadow-xl'>Winter Pool Closing Sale</h1><i className="fa-solid fa-snowflake text-xl text-slate-50 bg-pink-500 rounded-full bg-opacity-70 mt-2 shadow-xl" ></i></div>
          <div className='mt-5 pb-5 text-5xl text-center justify-center '><h1 className='text-slate-50 bg-opacity-30 font-extrabold shadow-2xl'>Stock Up Early On All Your</h1><h1 className='text-slate-50 bg-opacity-30 font-extrabold'> Winter Pool Closing Essentials!</h1></div>
          <Link to={'./Winter'} className='flex justify-center'>
            <motion.button whileTap={{scale:0.7}} className='bg-slate-900 text-slate-50 text-lg font-bold rounded-3xl px-3 py-2 mb-6 mx-auto hover:bg-slate-50 hover:text-slate-900 hover:shadow-xl'>Shop Winter Essentials<i className="fa-solid fa-temperature-low ml-2"></i></motion.button>
          </Link>
        </main>
    </div>
  )
}

export default WinterBanner