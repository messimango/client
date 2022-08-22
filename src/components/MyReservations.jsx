import React from 'react'
import ReturnButton from './ReturnButton'
import Table from 'react-bootstrap/Table';

const MyReservations = () => {
  return (
    <div className='bg-slate-50 p-4'>
      <ReturnButton name='Back to Reservations' link="../Reservations" />
      
      <h1 className='text-center font-bold my-4'>My Reservations
        <div className='underline'></div>
      </h1>

      <div>
        <h5>Reservations Pending Approval :</h5>

        <div>
          <Table striped>
            <thead>
              <tr>
                <th>Reservation #</th>
                <th>Name</th>
                <th>Group Size</th>
                <th>Reservation Time</th>
                <th>Approval Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {/* reservation # */}
                <td>106519339617335665441</td>
                {/* reservation name */}
                <td>Mark Otto</td>
                {/* reservation Info */}
                <td>
                  <p>6</p>
                </td>
                {/* reservation Time */}
                <td>
                  <p>10:00 A.M</p>
                  <p>on</p>
                  <p>08/28/2022</p>
                </td>
                {/* reservation Status */}
                <td>Pending Approval</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>


    </div>
  )
}

export default MyReservations