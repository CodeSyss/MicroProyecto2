import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginForm from "./Pages/LoginForm.jsx";
import RegisterForm from "./Pages/RegisterForm.jsx";
import LandingPage from "./Pages/LandingPage.jsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./Pages/Profile.jsx";
import { useEffect, useState } from "react";
import { auth } from "./Pages/firebase.js";


function App() {
  const [user, setUser]=useState();
  useEffect(()=>{
    auth.onAuthStateChanged((user) => {
      setUser(user);
    }); 
  });

  return (
    <>
    
    <BrowserRouter>
        <Routes>
          <Route index  element={user?<Navigate to ='/Profile'/> : <LoginForm />} />
          <Route path="/Login" element={<LoginForm />} />
          <Route path="/Register" element={<RegisterForm />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/LandingPage" element={<LandingPage />} />
        </Routes>
        <ToastContainer/>
      </BrowserRouter>
    </>
  )
}

export default App

