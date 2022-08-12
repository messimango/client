import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar, Login, Homepage, Admin, Winter, AddProduct } from "./components";



function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="App w-screen h-auto flex flex-col">
        <Navbar />

        <div className="page-content mt-24 p-8 2-full">
          <Routes>
            <Route path="/*" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/winter" element={<Winter />} />
            <Route path="/addproduct" element={<AddProduct />} />
          </Routes>
        </div>
      </div>
    </AnimatePresence>
  );
}

export default App;
