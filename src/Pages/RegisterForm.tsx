import './RegisterForm.css';
import  {FaUser} from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
const RegisterForm = () => { return (
    
    <div className="wrapper-r">
        
        <form action="">
        <div className="wrapper-out-r">
                <h1> <IoIosArrowBack className="icon-r"/> <FaUser className='icon-r2'/></h1>
            </div>
            <div className="input-box-r">
                <input type="text" placeholder="Nombre" required/>
            </div>
            <div className="input-box-r">
                <input type="text" placeholder="Apellido" required/>
            </div>
            <div className="input-box-r">
                <input type='' placeholder="Rol de la universidad" required/>
                
            </div>
            <div className="input-box-r">
                <input type="text" placeholder="Email" required/>
            </div>
            <div className="input-box-r">
                <input type="int" placeholder="Telefono" required/>
            </div>
            <div className="input-box-r">
                <input type="password" placeholder="Contraseña" required/>
           
            </div>
            <button type="submit">Registrate</button>

            <div className="register_link-r">
                <p>¿Ya tienes cuenta?  <a href="#">Inicia Sesión</a></p>
            </div>
           
            
        </form>
        </div>
);
}
   

export default RegisterForm;