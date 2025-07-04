import { useState, useEffect } from "react"
import logo from "./css/ResolveBrasil.png"
import { useNavigate } from "react-router-dom";
import "./css/LoginPref.css"

export const LoginPrefeitura = () =>{
    const [newCity, setNewCity] = useState("");
    const [newState, setNewState] = useState("");
    const [newCNPJ, setNewCNPJ] = useState("");
    const [newCode, setNewCode] = useState("");

    const navigate = useNavigate();

    const OnLogin = () => {
      window.localStorage.clear();
      if(newCity === "" || newState === "" || newCNPJ === "" || newCode === ""){
         alert("preencha todos os campos")
      }else{
        window.localStorage.setItem("CITY_MAYOR", JSON.stringify(newCity))
        window.localStorage.setItem("STATE_MAYOR", JSON.stringify(newState))
        window.localStorage.setItem("CNPJ_MAYOR", JSON.stringify(newCNPJ))
        window.localStorage.setItem("CODE_MAYOR", JSON.stringify(newCode))

        navigate('/solspref');
      }
    }

  useEffect(() => {
    const HasLoggedIn = () => {
        if(window.localStorage.getItem("CITY_MAYOR")){
          navigate('/solspref');
        }
    }

    HasLoggedIn();
}, [navigate]) 
    return(<div>
  <div className="top-bar">
    <img src={logo} alt="Logo"/>
  </div>

  <div className="tabs">
    <div className="tab active">Cadastrar</div>
  </div>

  <div className="form-container">
    <div className="form-row">
      <div className="form-group" flex = "2">
        <label htmlFor="municipio">Município</label>
        <input type="text" id="municipio" onChange={(e) => setNewCity(e.target.value)} placeholder="Município"/>
      </div>
      <div className="form-group" flex= "1">
        <label htmlFor="estado">Estado</label>
        <input type="text" id="estado" maxlength="2" onChange={(e) => setNewState(e.target.value)} placeholder="--"/>
      </div>
    </div>

    <div className="form-group">
      <label htmlFor="cnpj">CNPJ</label>
      <input type="text" id="cnpj" onChange={(e) => setNewCNPJ(e.target.value)} placeholder="CNPJ"/>
    </div>

    <div className="form-group">
      <label htmlFor="ibge">Código IBGE</label>
      <input type="text" id="ibge" onChange={(e) => setNewCode(e.target.value)} placeholder="Código IBGE"/>
    </div>

    <div className="form-group password-container">
      <label htmlFor="senha">Senha</label>
      <input type="password" id="senha" placeholder="Senha"/>
      <img src="eyes.png" alt="Mostrar senha" className="eye-icon"/>
    </div>

    <a onClick={OnLogin} className="button">Próximo</a>
  </div>

  <div className="bottom-bar"></div>
</div>
)
}