import "../assets/styles/header.css";
import logoMolokai from "../assets/images/imgHeader/Logo Molokai.png";
import logoUnimet from "../assets/images/imgHeader/LogoUnimet.png";
import LogoCarrito from "../assets/images/imgHeader/LogoCarrito.png";
import Usuario from "../assets/images/imgHeader/Usuario.png";
import Barra from "../assets/images/imgHeader/Barra.png";

const Header = () => {
  return (

    <header className="header">
      <div className="top-bar">
        <div className="uni-logo">
          <img src={logoUnimet} alt="Universidad Metropolitana" />
        </div>
        <div className="auth-links">
          <a  href="/Profile"><img src={Usuario} alt="Usuario" className="user-icon" /></a>
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
          <a href="#inicio" className="init">INICIO</a>
          <a href="#nosotros" className="init">NOSOTROS</a>
          <a href="#menu" className="menu-btn">
            MENÚ
          </a>
        </nav>
        <div className="cart">
          <img src={LogoCarrito} alt="Cart" />
        </div>
      </div>
    </header>
  );
};

export default Header;
