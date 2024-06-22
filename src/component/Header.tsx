import '../assets/styles/header.css';
import logoMolokai from '../assets/images/Logo Molokai.png';
import logoUnimet from '../assets/images/LogoUnimet.png';
import LogoCarrito from '../assets/images/LogoCarrito.png';
import Usuario from '../assets/images/Usuario.png';
import Barra from '../assets/images/Barra.png';

const Header = () => {
  return (
    <header>
      <div className="top-bar">
        <div className="uni-logo">
          <img src={logoUnimet} alt="Universidad Metropolitana" />
        </div>
        <div className="auth-links">
          <a href="#register">Registrarme</a>
          <img src={Barra} alt="Separador" className="separator" />
          <img src={Usuario} alt="Usuario" className="user-icon" />
          <a href="#login">Iniciar Sesión</a>
        </div>
      </div>
      <div className="main-header">
        <div className="brand">
          <h1>MOLOKA'I</h1>
        </div>
        <div className="logoMolokai">
          <img src={logoMolokai} alt="Logotipo de MOLOKA'I" />
        </div>
        <nav>
          <a href="#inicio">INICIO</a>
          <a href="#nosotros">NOSOTROS</a>
          <a href="#menu" className="menu-btn">MENU</a>
        </nav>
        <div className="cart">
          <img src={LogoCarrito} alt="Cart" />
        </div>
      </div>
    </header>
  );
};

export default Header;