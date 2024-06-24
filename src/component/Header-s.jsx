import "../assets/styles/header-s.css";
import logoMolokai from "../assets/images/imgHeader/Logo Molokai.png";
import logoUnimet from "../assets/images/imgHeader/LogoUnimet.png";


const Header = () => {
  return (
    <div className="body-header">
    <header className="header">
      <div className="top-bar">
        <div className="uni-logo">
          <img src={logoUnimet} alt="Universidad Metropolitana" />
        </div>
      </div>

      <div className="main-header">
        <div className="brand"> 
        </div>
        <div className="logoMolokai">
          <img src={logoMolokai} alt="Logotipo de MOLOKA'I" />
        </div>
      </div>
    </header>
    </div>
  );
};

export default Header;
