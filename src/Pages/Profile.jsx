import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import "./Profile.css";

function Profile() {
  const [userDetails, setUserDetails] = useState(null);

  //se encarga de buscar los datos del usuario
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

  //se encarga del logout
  //prueba
  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }


  return (
    <div>
      {userDetails ? (
        <>
          <h3>Bienvenido {userDetails.nombre} </h3>
          <div>
            <p>Email: {userDetails.email}</p>
            <p>Nombre: {userDetails.nombre}</p>
            <p>Apellido: {userDetails.apellido}</p> 
            <p>Telefono: {userDetails.telefono}</p>
            <p>Rol: {userDetails.rol}</p>
          </div>
          <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}
export default Profile;