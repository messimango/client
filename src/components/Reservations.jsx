import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../context/StateProvider'

const Reservation = () => {

  const [{user} , dispatch ] = useStateValue();

  return (
    <main className='bg-slate-50 w-full h-full border-4 border-slate-900 flex justify-center align-middle'>
      <div className='b-2 b-slate-900 w-4/5 h-full text-slate-900 text-2xl border-2 border-slate-500 my-8'>
        <h1 className='text-center font-bold p-2 m-2'>Reservations</h1>

        <section className='flex flex-row justify-center p-2 m-2'>
          <Link to={'/NewReservation'}>
            <button className='btn btn-small btn-warning cursor-pointer'><i className="fa-solid fa-circle-plus text-green-500"></i> Make A Reservation</button>
          </Link>

          <Link to={'/MyReservations'}>
            <button className='btn btn-small btn-warning cursor-pointer mx-2'><i className="fa-solid fa-pen-to-square text-gray-500"></i> My Reservations</button>
          </Link>
          
          
          {user && user.email === 'umangpoudyal@gmail.com' && (            
            <Link to={'/ReviewReservations'}>
              <button className='btn btn-small btn-warning cursor-pointer mx-2'><i className="fa-solid fa-pen-to-square text-gray-500"></i> Manage Reservations</button>
            </Link>
          )}

        </section>
      </div>
    </main>
  )
}

export default Reservation