import React, { useState } from 'react'
import { actionType } from '../context/reducer';
import { useStateValue } from '../context/StateProvider';
import { getAllReservations, updateReservation } from '../utilities/firebaseFunctions';

const ReservationBoxes = ({item}) => {

    const [{reservationList}, dispatch] = useStateValue();
    const [status, setStatus] = useState(item.accepted);
    const [adminMessage, setAdminMessage] = useState(item.adminComment);

    const submitUpdate = (id) => {
        try {            
            updateReservation(id, status, adminMessage)
            console.log("submitted")
        } catch (error) {
            console.log(error)
        }   
    }

  return (
    <tr>
        {/* Contact Info, name | phone | email*/}
        <td>
            <p>
                {item.name} 
            </p>
            <p>
                {item.phoneNumber}
            </p>
            <p>
                {item.email}
            </p>
        </td>

        {/* Reservation Info, # of people | comments */}
        <td>                            
            <div>
                <i className="fa-solid fa-people-line"></i> {item.peopleTotal} 
            </div>
            <div>
                <h6 className='font-semibold'>Comment:</h6>
                <p>{item.comments}</p>
            </div>
        </td>

        {/* reservation date and time */}
        <td>
            <p>
                {item.reservationTime} on {item.reservationDate}
            </p>
        </td>

        {/* reservation status */}
        <td>
            <div>
                <h6 className='font-semibold'>Current: <span className='text-warning'>Pending</span></h6>
            </div>
            <form className='flex flex-col justify-center text-center'>
                <select onChange={(e) => setStatus(e.target.value)}>
                    <option value='pending'>Pending</option>
                    <option value='accepted'>Accepted</option>
                    <option value='rejected'>Rejected</option>
                </select>

                <div>
                    <p>Message:</p>
                    <textarea onChange={(e) => setAdminMessage(e.target.value)}></textarea>
                </div>

                <button className='bg-blue-400 rounded-xl p-2' onClick={submitUpdate(item.id)}>Submit</button>
            </form>
        </td>
    </tr>
  )
}

export default ReservationBoxes