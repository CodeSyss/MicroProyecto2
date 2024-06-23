import './RegisterForm.css';
import  {FaUser} from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

//import { auth, db } from "./firebase";

const RegisterForm = () => { 
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [rol, setRol] = useState("");
    const [telf, setTelf] = useState("");
    
    const handleRegister = (e) => {
        e.preventDefault();
        try {
          createUserWithEmailAndPassword(auth, email, password);
          const user = auth.currentUser;
          console.log(user);
          if (user) {
            setDoc(doc(db, "Users", user.uid), {
              email: user.email,
              firstName: fname,
              lastName: lname,
              photo:""
            });
          }
          console.log("User Registered Successfully!!");
          toast.success("User Registered Successfully!!", {
            position: "top-center",
          });
        } catch (error) {
          console.log(error.message);
          toast.error(error.message, {
            position: "bottom-center",
          });
        }
      };

    return (
    
    <div className="wrapper-r">
        
        <form onSubmit={handleRegister}>
            <div className="wrapper-out-r">
                <h1> <a href="/login"><IoIosArrowBack className="icon-r" /></a> <FaUser className='icon-r2'/></h1>
            </div>
            <div className="input-box-r">
                <input type="text" placeholder="Nombre" onChange={(e) => setFname(e.target.value)} required/>
            </div>
            <div className="input-box-r">
                <input type="text" placeholder="Apellido" onChange={(e) => setLname(e.target.value)} required/>
            </div>
            <div className="input-box-r">
                <input type="text" placeholder="Rol de la universidad" onChange={(e) => setRol(e.target.value)} required/>
                
            </div>
            <div className="input-box-r">
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <div className="input-box-r">
                <input type="int" placeholder="Telefono" onChange={(e) => setTelf(e.target.value)} required/>
            </div>
            <div className="input-box-r">
                <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} required/>
           
            </div>
            <button type="submit">Registrate</button>

            <div className="register_link-r">
                <p>¿Ya tienes cuenta?  <a href="/login">Inicia Sesión</a></p>
            </div>
           
            
        </form>
        </div>
);
}
   

export default RegisterForm;