import "../Styles/DatosUsuario.css"
import {  useState, useEffect} from 'react'
import { auth, db } from "./firebase";
import {doc, getDoc, updateDoc} from "firebase/firestore"
import { toast } from "react-toastify";


function Profile () {

  const [userDetails, setUserDetails] = useState(null);
  const [telf, setTelf] = useState(userDetails ?.telf)
  const [rol, setRol] = useState(userDetails ?.rol)
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

const HandleSave= async () => {
   const change = doc(db, "Users", auth.currentUser.uid);
   await updateDoc(change, {
    rol: rol,
    telefono: telf,
   })
}

    return(
        <header>
          <form onSubmit={HandleSave}>
            <div className="Nombre_Apellido">
                <p>{userDetails ?.nombre} {userDetails ?.apellido}</p>
                <p className="Editar"><span>Editar Nombre</span></p>
            </div>
            <div className="Campos_Informacion_Rol">
                <p className="Rol">Rol Universitario</p>
                <input type="text" placeholder={userDetails ?.rol} onChange={(e) => setRol(e.target.value)} /> 
            </div>
            <div className="Campos_Informacion_Telefono">
                <p className="nro_telefonico">Nro Telefonico</p>
                <input type="text" placeholder={userDetails ?.telefono} onChange={(e) => setTelf(e.target.value)}/> 
            </div>
            <div className="password">
                <p className="nro_telefonico">Contraseña</p>
                <button className="change_passwd"><span>Cambiar Contraseña</span></button>
            </div>
            <div className="correo">
                <p className="correo_electronico">Correo Electronico</p>
                <button className="display_email">{userDetails ?.email}</button>
            </div>
            <div className="save">
                <button type = "submit" className="save_button"><span>Guardar Cambios</span></button>
            </div>
            </form>
        </header>
    )
}

export default Profile;