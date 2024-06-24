import "../Styles/DatosUsuario.css"


const DatosUsuario = () => {
    return(
        <header>
            <div className="Nombre_Apellido">
                <p>Andres Diaz</p>
                <p className="Editar"><span>Editar Nombre</span></p>
            </div>
            <div className="Campos_Informacion_Rol">
                <p className="Rol">Rol Universitario</p>
                <input type="text" placeholder="Estudiante" /> 
            </div>
            <div className="Campos_Informacion_Telefono">
                <p className="nro_telefonico">Nro Telefonico</p>
                <input type="text" placeholder="04142982646" /> 
            </div>
            <div className="password">
                <p className="nro_telefonico">Contraseña</p>
                <button className="change_passwd"><span>Cambiar Contraseña</span></button>
            </div>
            <div className="correo">
                <p className="correo_electronico">Correo Electronico</p>
                <button className="display_email">d.andres@correo.unimet.edu.ve</button>
            </div>
            <div className="save">
                <button className="save_button"><span>Guardar Cambios</span></button>
            </div>
        </header>
    )
}

export default DatosUsuario;