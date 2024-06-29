import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import "./Profile.css";
import Header from "../component/Header-s";
function Profile() {

  const [userDetails, setUserDetails] = useState(null);
  const [telf, setTelf] = useState(userDetails ?.telf)
  const [rol, setRol] = useState(userDetails ?.rol)
  const [name, setName] = useState(userDetails ?.rol)
  const [last_name, setLast_name] = useState(userDetails ?.rol)

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
<>
    <Header/>
      {userDetails ? (
        <>
          <div className="Contenedor">
            <div className="titulos">Nombre</div>
            <p className="box_input">{userDetails.nombre}</p>
            <div className="titulos">Apellido</div>
            <p className="box_input">{userDetails.apellido}</p>
            <div className="titulos">Correo Electronico</div>
            <p className="box_input">{userDetails.email}</p>
            <div className="titulos">Telefono</div>
            <p className="box_input">{userDetails.telf}</p>
            <div className="titulos">Rol</div>
            <p className="box_input">{userDetails.rol}</p>
            <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
          </div>
        </>
      ) : (
        <p>Cargando...</p>
      )}
</>
  );
}
export default Profile;