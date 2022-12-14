import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar, Login, Homepage, Admin, Winter, AddProduct, EditProduct, RemoveProduct,
   Menu, Cart, Reservations, NewReservation, MyReservations, ReviewReservations } from "./components";
import { getAllProducts, getAllReservations } from './utilities/firebaseFunctions';
import { useStateValue } from "./context/StateProvider";
import { actionType } from "./context/reducer";



function App() {
  

  const [{produceSelection, checkout, reservationsList}, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllProducts().then(data => {
      dispatch({
        type: actionType.SET_PRODUCE_SELECTION,
        produceSelection : data,
      });
    });
    await getAllReservations().then(data => {
      dispatch({
        type: actionType.SET_RESERVATION_LIST,
        reservationList : data,
      });
    });
  };

  useEffect(() => {
    fetchData();    
  }, []);

  useEffect(() => {
  }, [checkout]);
  

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="App w-screen h-auto flex flex-col">
        <Navbar />

        <div className="page-content mt-24 2-full">
          <Routes>
            <Route path="/*" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/winter" element={<Winter />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/removeproduct" element={<RemoveProduct />} />
            <Route path="/editproduct" element={<EditProduct />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/newreservation" element={<NewReservation />} />
            <Route path="/myreservations" element={<MyReservations />} />
            <Route path="/reviewreservations" element={<ReviewReservations />} />            
          </Routes>
        </div>
        
        {checkout && (
          <Cart />
        )}
        
      </div>
    </AnimatePresence>
  );
}

export default App;
