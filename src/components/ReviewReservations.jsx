import React from 'react'
import Table from 'react-bootstrap/esm/Table'
import { useStateValue } from '../context/StateProvider';
import ReservationBoxes from './ReservationBoxes';
import ReturnButton from './ReturnButton'

const ReviewReservations = () => {

    const [{reservationList}, dispatch] = useStateValue();
    const pendingReservationList = reservationList?.filter((n) => n.accepted === 'pending');
    const acceptedReservationList = reservationList?.filter((n) => n.accepted === 'accepted');


  return (
    <div className='bg-slate-50'>
        <ReturnButton name="Back To Reservations" link="../Reservations"/>

        <main className='text-center'>
            <h1>Review Reservations<p className='underline'></p></h1>

            <section>
                <Table striped>
                    <thead>
                        <tr>
                        <th>Contact Info</th>
                        <th>Reservation Info</th>
                        <th>Reservation Date</th>
                        <th>Reservation Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pendingReservationList && (
                                <td colSpan={4} className="bg-warning">Pending Reservations</td>
                            )
                        }
                        {
                            pendingReservationList && pendingReservationList.map((item)=>(
                            <ReservationBoxes key={item.id} item={item} />))
                        }

                        {
                            acceptedReservationList && (
                                <td colSpan={4} className="bg-success">Accepted Reservations</td>
                            )
                        }
                        
                        {   
                            acceptedReservationList && acceptedReservationList.map((item)=>(
                            <ReservationBoxes key={item.id} item={item} />))
                        }
                    </tbody>
                </Table>
            </section>
            
        </main>
        
    </div>
  )
}

export default ReviewReservations