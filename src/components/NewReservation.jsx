import React, { useState } from 'react'
import { actionType } from '../context/reducer';
import { useStateValue } from '../context/StateProvider';
import { getAllReservations, saveReservation } from '../utilities/firebaseFunctions';
import Loading from './Loading';
import ReturnButton from './ReturnButton'

const NewReservation = () => {

    const [{ user }, dispatch] = useStateValue();
    const [alert, setAlert] = useState(false);
    const [alertStatus, setAlertStatus] = useState('');
    const [notice, setNotice] = useState('');
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState(user.displayName);
    const [email, setEmail] = useState(user.email);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [peopleTotal, setPeopleTotal] = useState("");
    const [accepted, setAccepted] = useState("pending")
    const [reservationDate, setReservationDate] = useState("DD MM YYY");
    const [reservationTime, setReservationTime] = useState("10:00");
    const [comments, setComments] = useState("");
    const [adminComment, setAdminComment] = useState("");


    // check if valid email
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const checkEmail = event => {
        if (!isValidEmail(event.target.value)) {
            setAlert(true);
            setNotice('Invalid Email');
            setAlertStatus('danger');
          } else {
            setAlert(false);
            setNotice('');
            setAlertStatus('');
          }

        setEmail(event.target.value);
    };

    // check if valid phone
    const checkPhone = event => {
        if (event.target.value.length < 10) {
            setAlert(true);
            setNotice('Contact Number Invalid! too short(must be 10 digits)');
            setAlertStatus('danger');
        } else if (event.target.value.length > 10) {
            setAlert(true);
            setNotice('Contact Number Invalid too long(must be 10 digits)');
            setAlertStatus('danger');
        } else {            
            setAlert(false);
            setNotice('');
            setAlertStatus('');
        }

        setPhoneNumber(event.target.value);
    };

    // check if people entered
    const checkPeople = event => {
        if (event.target.value > 20) {            
            setAlert(true);
            setNotice('Too many people! Please contact us for more information.');
            setAlertStatus('danger');
        } else {            
            setAlert(false);
            setNotice('');
            setAlertStatus('');
        }

        setPeopleTotal(event.target.value)
    };

    // submit reservation
    const submitReservation = () => {
        setLoading(true);

        try {
            // check if everything is entered
            if((!email || !name || !phoneNumber|| !peopleTotal || !reservationDate || !reservationTime)) {      
              setAlert(true);
              setNotice("All fields must be filled!");
              setAlertStatus("danger");
              setTimeout(() => {
                setAlert(false);
                setLoading(false);
              }, 8000);
            } else {
                // submit reservation data
                const reservationData = {
                    id : `${Date.now()}`,
                    name : name,
                    userID: user.uid,
                    email : email,
                    phoneNumber : phoneNumber,
                    peopleTotal: peopleTotal,
                    reservationDate: reservationDate,
                    reservationTime: reservationTime,
                    comments : comments,
                    adminComment : adminComment,
                    accepted : accepted,
                }
                saveReservation(reservationData);
                // reset everything
                setLoading(false);
                setAlert(true);
                setNotice("Reservation submitted successfully!");
                setAlertStatus("success");
                clearData();
                setTimeout(() => {
                  setAlert(false);
                }, 5000);
            }

            
        } catch (error) {
            console.log(error);
            setAlert(true);
            setNotice('Error occured while uploading! Please Try Again!');
            setAlertStatus('danger');
            setTimeout(() => {
                setAlert(false);
                setLoading(false);
            }, 5000);
        }
        fetchData();
    }

    const clearData = () => {
        setName(user.displayName);
        setEmail(user.email);
        setPhoneNumber("");
        setPeopleTotal("");
        setReservationDate("MM DD YYY");
        setReservationTime("10:00");
        setComments("");
        
    } 

    const fetchData = async () => {
        await getAllReservations().then(data => {
            dispatch({
              type: actionType.SET_RESERVATIONS,
              reservationList : reservationDate,
            });
          });
    }


  return (
    <main className='bg-slate-50 w-full h-full'>        
        <ReturnButton name='Back to Reservations' link="../Reservations"/>
        <h1 className='text-center font-bold text-5xl'> 
            Make A New Reservation! <div className='underline w-1/5'></div>
        </h1>       
        
        <section className='border-slate-900'>

            {/* Error message */}
            {alert && (
                <p className={`varela-round text-center text-xl w-full p-1 rounded-xl
                ${alertStatus === 'danger' ? 'bg-slate-50 text-red-500' : 'text-green-600'} `}>
                {notice}
                </p>
            )}
                
            
            {/* Reservation Information */}
            {
                loading ? (<Loading />) : (

                    <div className='text-center'>

                        <div className='reservation-line-1 flex flex-row justify-center p-2 m-2'>                    
                            {/* name */}
                            <div className='m-2 w-2/5'>
                                <h4 className='font-bold text-3xl'>Name:</h4>
                                <input
                                    className='w-full text-sm placeholder:text-gray-400 border-2 p-1 rounded-lg border-slate-900' 
                                    type="text" value={name} required placeholder='Joe Smith' 
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            {/* email */}
                            <div className='m-2 w-2/5'>
                                <h4 className='font-bold text-3xl'>E-mail:</h4>
                                <input
                                    className='w-full text-sm placeholder:text-gray-400 border-2 p-1 rounded-lg border-slate-900' 
                                    type="email" value={email} required placeholder='joesmith@gmail.com' 
                                    onChange={(e) => checkEmail(e)}
                                />
                            </div>
                        </div>

                        <div className='reservation-line-2 flex flex-row justify-center p-2 w-full'>

                            {/* contact number */}
                            <div className='m-2 w-4/12'>
                                <h4 className='font-bold text-xl'>Contact Number:</h4>
                                <input
                                    className='w-11/12 text-xl placeholder:text-gray-400 border-2 p-1 rounded-lg border-slate-900' 
                                    type="number" value={phoneNumber} max="9999999999" required placeholder='(123) 456-7890' 
                                    onChange={(e) => checkPhone(e)}
                                />
                            </div>

                            {/* number of people for reservation */}
                            <div className='m-2 w-3/12'>
                                <h4 className='font-bold '>Number of People:</h4>
                                <input
                                    className='w-fit text-xl placeholder:text-gray-400 border-2 p-1 rounded-lg border-slate-900' 
                                    type="number" min={1} max={50} value={peopleTotal} required placeholder='1' 
                                    onChange={(e) => checkPeople(e)}
                                />
                            </div>

                        </div>

                        <div className='reservation-line-3 flex flex-row justify-center p-2'>                   

                            {/* date and time */}
                            <div className='m-2 w-3/12'>
                                <h4 className='font-bold '>Date:</h4>
                                <input
                                    className='w-fit text-xl placeholder:text-gray-400 border-2 p-1 rounded-lg border-slate-900' 
                                    type="date" name='date' id='date' value={reservationDate} max="2023-01-13" required
                                    onChange={(e) => setReservationDate(e.target.value)}
                                />
                            </div>

                            <div className='m-2 w-3/12'>                        
                                <h4 className='font-bold '>Time:</h4>
                                <input
                                    className='w-fit text-xl placeholder:text-gray-400 border-2 p-1 rounded-lg border-slate-900' 
                                    id="time" type="time" min={"10:00"} max={"24:00"} value={reservationTime} required placeholder='joesmith@gmail.com' 
                                    onChange={(e) => setReservationTime(e.target.value)}
                                    
                                />
                            </div>

                        </div>

                        {/* comments */}
                        <div className='m-2 p-2'>
                            <h4 className='font-bold '>Comments :</h4>
                            <textarea
                                className='w-4/5 text-xl placeholder:text-gray-400 border-2 p-1 rounded-lg border-slate-900' 
                                type="text" rows={4} value={comments} required placeholder='i.e if you require baby seats or wanted certian seating or arrangements' 
                                onChange={(e) => setComments(e.target.value)}
                            />
                        </div>


                        {/* submit */}
                        <button onClick={submitReservation} type='button' 
                            className='bg-green-600 p-3 rounded-xl text-slate-100 font-bold m-4'>
                            <i className="fa-solid fa-scroll"></i> Submit Reservation
                        </button>
                    
                    </div>
                )
            }






        </section>
    </main>
  )
}

export default NewReservation