import logo from "./css/ResolveBrasil.png"
import profile from "./icons/perfil.png"

export const ProfileCivil = () =>{
    return(<div>
        <div className="top-bar">
          <img src={logo} alt="Logo" />
        </div>
        <h1 font-weight = "bold">Perfil</h1>
        <hr></hr>
        <img alt="" src={profile}></img>
        <h2>Nome:</h2>
        <p>{window.localStorage.getItem("NAME_USER")}</p>
        <h2>Cidade:</h2>
        <p>{window.localStorage.getItem("CITY_USER")}</p>
        <h2>Estado:</h2>
        <p>{window.localStorage.getItem("STATE_USER")}</p>
        <h2>CPF:</h2>
        <p>{window.localStorage.getItem("CPF_USER")}</p>
        
        <a href="/#/solscivil" className="back-button">
          ←
        </a>
        <div className="bottom-bar"></div>
        </div>)
}