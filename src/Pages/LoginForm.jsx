
import './LoginForm.css';
import  {FaUser} from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import Header from '../component/Header-s.jsx';
const LoginForm = () => {
    return (
        
        <div>
        <Header />
        <div className="wrapper">
            
            <form action="">
                <div className="wrapper-out">
                    <h1><a href="#"><IoIosArrowBack className="icon1" /></a><FaUser className='icon2'/> Iniciar Sesión</h1>
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
                    <p>¿No tienes cuenta?  <a href="/register">Registrate</a></p>
                </div>
                
            </form>
            
        </div>
        </div>
    );
    } 
export default LoginForm; 