import React from 'react'
import ReturnButton from './ReturnButton'
import Table from 'react-bootstrap/Table';
import { useStateValue } from '../context/StateProvider';

const MyReservations = () => {

  const [{reservationList, user}, dispatch] = useStateValue();
  const myReservationsList = reservationList?.filter((n) => n.userID === user.uid);
  const pendingReservationsList = myReservationsList?.filter((n) => n.accepted === "pending");
  const acceptedReservationsList = myReservationsList?.filter((n) => n.accepted === "accepted");


  return (
    <div className='bg-slate-50 p-4'>
      <ReturnButton name='Back to Reservations' link="../Reservations" />
      
      <h1 className='text-center font-bold my-4'>My Reservations
        <div className='underline'></div>
      </h1>

      {
        acceptedReservationsList.length > 0 && (
          <div>
            <h5>Accepted Reservations:</h5>
    
            <div>
              <Table striped>
                <thead>
                  <tr className=''>
                    <th>Reservation #</th>
                    <th>Name</th>
                    <th>Group Size</th>
                    <th>Reservation Time</th>
                    <th>Approval Status</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    acceptedReservationsList && acceptedReservationsList.map((item)=>(
                        <tr key={item.id}>
                          {/* reservation # */}
                          <td className='text-base'>{item.id}</td>
                          {/* reservation name */}
                          <td>{item.name}</td>
                          {/* reservation Info */}
                          <td>
                            <p>{item.peopleTotal}</p>
                          </td>
                          {/* reservation Time */}
                          <td>
                            <p>{item.reservationTime}</p>
                            <p>on</p>
                            <p>{item.reservationDate}</p>
                          </td>
                          {/* reservation Status */}
                          <td className='text-success'>Approved{ item.adminComment && (
                            <p>{item.adminComment}</p>
                            )}
                          </td>
                        </tr>
                    ))
                  }
    
                </tbody>
              </Table>
            </div>
          </div>
        )
      }

      <hr className='text-bold text-4xl m-4'></hr>
      <hr className='text-bold text-4xl m-4'></hr>

      { pendingReservationsList.length > 0 && (
              <div>
                <h5>Reservations Pending Approval :</h5>
        
                <div>
                  <Table striped>
                    <thead>
                      <tr className=''>
                        <th>Reservation #</th>
                        <th>Name</th>
                        <th>Group Size</th>
                        <th>Reservation Time</th>
                        <th>Approval Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        pendingReservationsList && pendingReservationsList.map((item)=>(
                            <tr key={item.id}>
                              {/* reservation # */}
                              <td className='text-base'>{item.id}</td>
                              {/* reservation name */}
                              <td>{item.name}</td>
                              {/* reservation Info */}
                              <td>
                                <p>{item.peopleTotal}</p>
                              </td>
                              {/* reservation Time */}
                              <td>
                                <p>{item.reservationTime}</p>
                                <p>on</p>
                                <p>{item.reservationDate}</p>
                              </td>
                              {/* reservation Status */}
                              <td className='text-warning'>Pending Approval</td>
                            </tr>
                        ))
                      }
        
                    </tbody>
                  </Table>
                </div>
              </div>
      )}




    </div>
  )
}

export default MyReservations