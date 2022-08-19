import React from 'react'
import { Link } from 'react-router-dom'

const EditProduct = () => {
  return (
    <div>
      
      <Link to={'/Admin'}>
        <button className='text-yellow-500 border-2 p-1 mb-8 rounded-lg  bg-slate-100 text-lg font-extrabold'><i className="fa-solid fa-left-long"></i> Admin</button>
      </Link>

      <div className='border-2 rounded-lg p-4 text-center bg-slate-50'>
        <h1 className='text-center mt-8 '>Edit Product</h1>
      </div>
      
    </div>
  )
}

export default EditProduct