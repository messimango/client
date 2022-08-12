import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
  return (
    <div className='text-black'>
      <Link to={'/AddProduct'}>
        <button className='btn btn-small btn-warning cursor-pointer'>Add Product</button>
      </Link>
      <button className='btn btn-small btn-warning cursor-pointer mx-2'>Remove Product</button>
    </div>
  )
}

export default Admin