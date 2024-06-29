import "../assets/styles/Banner.css";
import imgPrincipal from "../assets/images/imgBanner/Banner-Poke.jpg";
import Buscador from "../assets/images/imgBanner/Buscador.png";
import FlechaDerecha from "../assets/images/imgBanner/FlechaDerecha.png";
import FlechaIzquierda from "../assets/images/imgBanner/FlechaIzquierda.png";
import FlechaAbajo from "../assets/images/imgBanner/FlechaAbajo.png";

const Banner = () => {
  return (
    <header className="banner">
      <div className="imgPoke">
        <img src={imgPrincipal} alt="Banner Principal" />
      </div>
      <div className="overlay">
        <h1 className="title">THIS IS HOW WE POKÉ</h1>
        <div className="search-bar">
          <input type="text" placeholder="poké bowl + poké burrito" />
          <button type="submit">
            <img src={Buscador} alt="Buscar" />
          </button>
        </div>
        <div className="arrow-down">
          <img src={FlechaAbajo} alt="Flecha Abajo" />
        </div>
      </div>
      <div className="arrows">
        <div className="arrow-left">
          <img src={FlechaIzquierda} alt="Flecha Izquierda" />
        </div>
        <div className="arrow-right">
          <img src={FlechaDerecha} alt="Flecha Derecha" />
        </div>
      </div>
    </header>
  );
};

export default Banner;
