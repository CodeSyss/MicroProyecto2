import React from "react";
import './LoginForm.css';
import  {FaUser} from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
const LoginForm = () => {
    return (
        <>
        
        <div className="wrapper">
            
            <form action="">
                <div className="wrapper-out">
                    <h1> <IoIosArrowBack className="icon"/> <FaUser /> Iniciar Sesión</h1>
                </div>
                
                
                <div className="input-box">

                    <input type="text" placeholder="Email" required/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Contraseña" required/>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />Recordarme</label>
                </div>
    
                <button type="submit">Acceder</button>

                <div className="register_link">
                    <p>No tienes cuenta?  <a href="#">Registrate</a></p>
                </div>
                
            </form>
            
        </div>
        </>
    );
    }
export default LoginForm;