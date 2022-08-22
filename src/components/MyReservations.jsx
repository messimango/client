import React from 'react'
import ReturnButton from './ReturnButton'

const MyReservations = () => {
  return (
    <div className='bg-slate-50 p-4'>
      <ReturnButton name='Back to Reservations' link="../Reservations" />
      
      <h1 className='text-center font-bold my-4'>My Reservations</h1>
    </div>
  )
}

export default MyReservations