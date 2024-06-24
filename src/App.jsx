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

  const [userDetails, setUserDetails] = useState(null);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);

      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("Usuario no esta loggeado");
      }
    });
  };

    useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <HeaderUser />
      <FotoPerfil />
      <DatosUsuario />
    </>
  )
}

export default App
