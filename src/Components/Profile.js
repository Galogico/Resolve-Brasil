import logo from "./css/ResolveBrasil.png"
import profile from "./icons/perfil.png"

export const Profile = () =>{
    return(<div>
        <div className="top-bar">
          <img src={logo} alt="Logo" />
        </div>
        <h1 font-weight = "bold">Perfil</h1>
        <hr></hr>
        <img alt="" src={profile}></img>
        <h2>Cidade:</h2>
        <p>{window.localStorage.getItem("CITY_MAYOR")}</p>
        <h2>Estado:</h2>
        <p>{window.localStorage.getItem("STATE_MAYOR")}</p>
        <h2>CNPJ:</h2>
        <p>{window.localStorage.getItem("CNPJ_MAYOR")}</p>
        <h2>Código IBGE:</h2>
        <p>{window.localStorage.getItem("CODE_MAYOR")}</p>
        
        <a href="./solspref" className="back-button">
          ←
        </a>
        <div className="bottom-bar"></div>
        </div>)
}