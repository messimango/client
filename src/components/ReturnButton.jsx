import React from 'react'
import { Link } from 'react-router-dom'

const ReturnButton = (name) => {
  return (
    <div>
        <Link to={`./${name.link}`}>
            <button className='text-black border-2 p-1 m-2 mb-8 rounded-lg  bg-slate-100 text-lg font-extrabold'>
                <i className="fa-solid fa-left-long"></i> {name.name}
            </button>
        </Link>
    </div>
  )
}

export default ReturnButton