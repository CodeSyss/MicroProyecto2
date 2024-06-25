import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import "./Profile.css";
import Header from "../component/Header-s";
import foto_perfil from "../assets/images/imgUser/no_perfil.png"
import change_pfp from "../assets/images/imgUser/change_pfp.png"
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
    <div className="Profile">
      {userDetails ? (
        <>
        <div className="foto_perfil">
        <h1 className="Bienvenido">Bienvenido</h1>
            <img src={foto_perfil} alt = "Foto de Perfil" className="p_icon"/>
            <img src={change_pfp} alt = "Cambiar foto de perfil" className="c_icon"/>
       </div>
          <div className="Contenedor">
            <div className="titulos">Nombre</div>
            <input className="box_input"type="text" placeholder={userDetails.nombre} onChange={(e) => setName(e.target.value)} />
            <div className="titulos">Apellido</div>
            <input className="box_input"type="text" placeholder={userDetails.apellido} onChange={(e) => setLast_name(e.target.value)}/>
            <div className="titulos">Correo Electronico</div>
            <input className="box_input"type="text" placeholder={userDetails.email}/>
            <div className="titulos">Telefono</div>
            <input className="box_input"type="text" placeholder={userDetails.telefono} onChange={(e) => setTelf(e.target.value)}/>
            <div className="titulos">Rol</div>
            <input className="box_input"type="text" placeholder={userDetails.rol} onChange={(e) => setRol(e.target.value)} />
          </div>
          <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
</>
  );
}
export default Profile;