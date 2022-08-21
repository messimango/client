import React from 'react'
import { Link } from 'react-router-dom'

const Reservation = () => {
  return (
    <main className='bg-slate-50 w-full h-full border-4 border-slate-900 flex justify-center align-middle'>
      <div className='b-2 b-slate-900 w-4/5 h-full text-slate-900 text-2xl border-2 border-slate-500 my-8'>
        <h1 className='text-center font-bold'>Reservations</h1>

        <section>
          <Link to={'/NewReservation'}>
            <button className='btn btn-small btn-warning cursor-pointer'><i className="fa-solid fa-circle-plus text-green-500"></i> New Reservation</button>
          </Link>

          <Link to={'/EditProduct'}>
            <button className='btn btn-small btn-warning cursor-pointer mx-2'><i className="fa-solid fa-pen-to-square text-gray-500"></i> Edit Product</button>
          </Link>

          <Link to={'/RemoveProduct'}>
            <button className='btn btn-small btn-warning cursor-pointer mx-2'><i className="fa-solid fa-circle-minus text-red-600"></i> Remove Product</button>
          </Link>
        </section>
      </div>
    </main>
  )
}

export default Reservation