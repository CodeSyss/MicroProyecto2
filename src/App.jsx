import { useEffect, useState } from 'react'
import HeaderUser from './Components/HeaderUser'
import FotoPerfil from './Components/FotoPerfil'
import DatosUsuario from './Components/DatosUsuario'
import { auth, db } from "./Components/firebase.js";
import { doc, getDoc } from "firebase/firestore";
import { signInWithEmailAndPassword } from 'firebase/auth';
import './App.css'

function App() {
  
  signInWithEmailAndPassword(auth, "ae.diazrivera@gmail.com", "191919andres")

  return (
    <>
      <HeaderUser />
      <FotoPerfil />
      <DatosUsuario />
    </>
  )
}

export default App
