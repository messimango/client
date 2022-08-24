import React from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

const Login = () => {
  
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{user}, dispatch] = useStateValue();

  const login = async () => {
    const {user : {refreshToken, providerData}} = await signInWithPopup(firebaseAuth, provider)
    dispatch({
      type: actionType.SET_USER,
      user: providerData[0]
    });
    // add profile to local storage
    localStorage.setItem('user', JSON.stringify(providerData[0]));
    
  };

  const logout = () => {
    localStorage.clear();

    dispatch({
      type : actionType.SET_USER,
      user: null,
    });
  };


  return (
    <div className='bg-slate-50'>
      <div className='border-2 border-slate-900 bg-slate-100 text-center'>     
        {
          user ? <><button className='btn btn-primary' onClick={logout}>Logout</button></> 
          : <>
            <h1>Login</h1>

            <section>
              <div className='flex justify-center'>
                <h5 onClick={login}
                 className='bg-white shadow-2xl border-2 border-slate-900 w-56 px-3 py-1 flex flex-row rounded-xl text-center align-middle justify-center'>
                  <i className="fa-brands fa-google font-bold"></i><p className='mx-2 text-sm'>Continue with Google</p>
                </h5>
              </div>
            </section>
          </>
        }      
        

      </div>

    </div>
  )
}

export default Login