import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginForm from "./Pages/LoginForm.jsx";
import RegisterForm from "./Pages/RegisterForm.jsx";
import LandingPage from "./Pages/LandingPage.jsx";
import Entradas from "./Pages/Entradas.jsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./Pages/Profile.jsx";
import { useEffect, useState } from "react";
import { auth } from "./Pages/firebase.js";
import Carro from "./Pages/Carro.jsx";
import {ShopContextProvider } from "./context/shop-context.jsx";


function App() {
  const [user, setUser]=useState();
  useEffect(()=>{
    auth.onAuthStateChanged((user) => {
      setUser(user);
    }); 
  });

  return (
    <>
      <ShopContextProvider>
        <BrowserRouter>
            <Routes>
              <Route index  element={user?<Navigate to ='/Profile'/> : <LoginForm />} />
              <Route path="/Login" element={<LoginForm />} />
              <Route path="/Register" element={<RegisterForm />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/LandingPage" element={<LandingPage />} />
              <Route path="/Entradas" element={<Entradas />} />
              <Route path="/Carro" element={<Carro />} />
            </Routes>
            <ToastContainer/>
          </BrowserRouter>
      </ShopContextProvider>
    </>
  )
}

export default App

