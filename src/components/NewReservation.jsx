import React, { useState } from 'react'
import { useStateValue } from '../context/StateProvider';
import ReturnButton from './ReturnButton'

const NewReservation = () => {

    const [{ user }, dispatch] = useStateValue();
    const [alert, setAlert] = useState(false);
    const [alertStatus, setAlertStatus] = useState('');
    const [notice, setNotice] = useState('');
    const [name, setName] = useState(user.displayName);
    const [email, setEmail] = useState(user.email);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [peopleTotal, setPeopleTotal] = useState("");
    const [dateTime, setDateTime] = useState("");
    const [comments, setComments] = useState("");



    // submit reservation
    const saveReservation = () => {
        // make sure data has accepted values as false AND USER ID
        // add to new data collection called reservation
        // clear data
        // make fields say reservation submitted
        

    }


  return (
    <main className='bg-slate-50 w-full h-full'>        
        <ReturnButton name='Back to Reservations' link="Reservations"/>
        <h1 className='text-center'>Make A New Reservation</h1>       
        
        <section className=' border-4 border-slate-900'>

            {/* Error message */}
            {alert && (
                <p className={`varela-round text-center text-xl w-full p-1 rounded-xl
                ${alertStatus === 'danger' ? 'bg-slate-50 text-red-500' : 'text-green-600'} `}>
                {notice}
                </p>
            )}

            {/* Reservation Information */}
            <div>

                {/* name */}
                <div>
                    <h4>Name:</h4>
                    <input
                        className='w-full text-xl font-bold placeholder:text-gray-400 border-2 p-1 rounded-lg border-slate-900' 
                        type="text" value={name} required placeholder='Joe Smith' 
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                {/* email */}
                <div>
                    <h4>E-mail:</h4>
                    <input
                        className='w-full text-xl font-bold placeholder:text-gray-400 border-2 p-1 rounded-lg border-slate-900' 
                        type="text" value={email} required placeholder='joesmith@gmail.com' 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {/* contact number */}
                <div>
                    <h4>Contact Number:</h4>
                    <input
                        className='w-full text-xl font-bold placeholder:text-gray-400 border-2 p-1 rounded-lg border-slate-900' 
                        type="text" value={phoneNumber} required placeholder='123-456-7890' 
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>

                {/* number of people for reservation */}
                <div>
                    <h4>Number of People:</h4>
                    <input
                        className='w-full text-xl font-bold placeholder:text-gray-400 border-2 p-1 rounded-lg border-slate-900' 
                        type="text" value={peopleTotal} required placeholder='1' 
                        onChange={(e) => setPeopleTotal(e.target.value)}
                    />
                </div>

                {/* date and time */}
                <div>
                    <h4>Date and Time:</h4>
                    <input
                        className='w-full text-xl font-bold placeholder:text-gray-400 border-2 p-1 rounded-lg border-slate-900' 
                        type="text" value={dateTime} required placeholder='joesmith@gmail.com' 
                        onChange={(e) => setDateTime(e.target.value)}
                    />
                </div>

                {/* comments */}
                <div>
                    <h4>Comments :</h4>
                    <input
                        className='w-full text-xl font-bold placeholder:text-gray-400 border-2 p-1 rounded-lg border-slate-900' 
                        type="text" value={comments} required placeholder='i.e if you require baby seats or wanted certian seating or arrangements' 
                        onChange={(e) => setComments(e.target.value)}
                    />
                </div>


                {/* submit */}
                <div>
                <button onClick={saveReservation} type='button' className='bg-green-600 p-2 rounded-xl text-slate-100 font-bold'><i className="fa-solid fa-scroll"></i> Submit Reservation</button>
                </div>
                
            </div>






        </section>
    </main>
  )
}

export default NewReservation