import "../assets/styles/footer.css";
import facebook from "../assets/images/imgFooter/instagram.png";
import instagram from "../assets/images/imgFooter/instagram.png";
import twitter from "../assets/images/imgFooter/twitter.png";
import linkedin from "../assets/images/imgFooter/linkedin.png";
import logoM from "../assets/images/imgFooter/logo2.png";
import contacto from "../assets/images/imgFooter/contacto.png";
import info from "../assets/images/imgFooter/info.png";
import pin from "../assets/images/imgFooter/pin.png";
import logoUnimet from "../assets/images/imgHeader/LogoUnimet.png";


export default function FooterPrincipal() {
  return (
    <div className="footerP clip-contents">
      <div className="logoM">
        <div className="unimet">
          <div className="interLineado">
            <div className="nose">
              <div className="contactos">
                <div className="contacto">
                  <img src={contacto} alt="Contacto" className="telefono" />
                  <p className="contactoT">CONTACTO</p>
                </div>
                <div className="datosC">
                  <img src={info} alt="Contacto" className="info" />
                  <div>
                    <p className="pagos">pagos@pokemolokai.com</p>
                    <p className="nroTelefono">0424-123-6105</p>
                  </div>
                </div>
              </div>
              <div />
            </div>
            <div>
              <p className="siguenos">Síguenos:</p>
              <p className="copyright">
                {" "}
                Copyright @2024 - All Rights Reserved
              </p>
              <div className="redesSociales">
                <img src={facebook} alt="Facebook" className="facebook" />
                <img src={twitter} alt="Twitter" className="twitter" />
                <img src={instagram} alt="Instragram" className="instagram" />
                <img src={linkedin} alt="Linkedin" className="linkedin" />
              </div>
            </div>
            <div className="acerca">
              <div className="separacion">
                <img src={pin} alt="ImagenDePin" className="pin" />
                <p className="acerca">ACERCA DE</p>
              </div>
              <p className="creadorMolokai">Creado por: José García</p>
            </div>
          </div>
          <img src={logoUnimet} alt="LogoUnimet" className="logoUnimet" />
        </div>
        <img src={logoM} alt="LogoMolokai" className="LogoMolokai" />
      </div>
    </div>
  );
}
