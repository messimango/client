import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {

  return (
    <div className='text-black'>

      <Link to={'/AddProduct'}>
        <button className='btn btn-small btn-warning cursor-pointer'><i className="fa-solid fa-circle-plus text-green-500"></i> Add Product</button>
      </Link>

      <Link to={'/EditProduct'}>
        <button className='btn btn-small btn-warning cursor-pointer mx-2'><i className="fa-solid fa-pen-to-square text-gray-500"></i> Edit Product</button>
      </Link>

      <Link to={'/RemoveProduct'}>
        <button className='btn btn-small btn-warning cursor-pointer mx-2'><i className="fa-solid fa-circle-minus text-red-600"></i> Remove Product</button>
      </Link>
      
      
    </div>
  )
}

export default Admin