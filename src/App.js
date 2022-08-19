import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar, Login, Homepage, Admin, Winter, AddProduct, EditProduct, RemoveProduct, Menu, Cart, Reservation } from "./components";
import { getAllProducts } from './utilities/firebaseFunctions';
import { useStateValue } from "./context/StateProvider";
import { actionType } from "./context/reducer";



function App() {
  

  const [{produceSelection, checkout}, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllProducts().then(data => {
      dispatch({
        type: actionType.SET_PRODUCE_SELECTION,
        produceSelection : data,
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
            <Route path="/reservation" element={<Reservation />} />
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
