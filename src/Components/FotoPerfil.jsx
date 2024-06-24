import "../Styles/FotoPerfil.css"
import foto_perfil from "../Assets/pngs/no_perfil.png"
import change_pfp from "../Assets/pngs/change_pfp.png"


const FotoPerfil = () => {
    return(
    <header>
          <div className="foto_perfil">
            <img src={foto_perfil} alt = "Foto de Perfil" className="p_icon"/>
            <img src={change_pfp} alt = "Cambiar foto de perfil" className="c_icon"/>
        </div>
    </header>
    );
};

export default FotoPerfil;