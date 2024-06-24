import "../Styles/HeaderUser.css"
import  logoUnimet from "../Assets/pngs/LogoUnimet.png"
import bar from "../Assets/pngs/Barra.png"
import user from "../Assets/pngs/Usuario.png"
import logo from "../Assets/pngs/LogoMolokai.png"
import logo_carrito from "../Assets/pngs/LogoCarrito.png"


const HeaderUser = () => {

    return(
        <header className="unimet-headerUser">
            <div className="top-bar">
        <div className="uni-logo">
          <img src={logoUnimet} alt="Universidad Metropolitana" />
        </div>
        <div className="auth-links">
          <img src={user} alt="Usuario" className="user-icon" />
          <a href="#Perfil">Usuario</a>
        </div>
      </div>
         <div className="main-header">
        <div className="brand">
          <h1>MOLOKA'I</h1>
        </div>
      <div className="line-2"></div>
        <nav>
          <a href="#Mi Perfil" className="menu-btn">Mi Perfil</a>
          <a href="#Metodos y Seguridad">Metodos Y Seguridad</a>
        </nav>
        <div className="logoMolokai">
          <img src={logo} alt="Logotipo de MOLOKA'I" />
        </div>
        <nav>
          <a href="#menu">
            Historial
          </a>
        </nav>
      </div>
      <div className="line-1"></div>
    </header>
    );
};

export default HeaderUser;