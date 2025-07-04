import { useState, useEffect } from "react"
import logo from "./css/ResolveBrasil.png"
import { useNavigate } from "react-router-dom";
import "./css/LoginPref.css"
import { and } from "firebase/firestore";

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
    })

    return(<div>
  <div class="top-bar">
    <img src={logo} alt="Logo"/>
  </div>

  <div class="tabs">
    <div class="tab active">Cadastrar</div>
  </div>

  <div class="form-container">
    <div class="form-row">
      <div class="form-group" flex = "2">
        <label for="municipio">Município</label>
        <input type="text" id="municipio" onChange={(e) => setNewCity(e.target.value)} placeholder="Município"/>
      </div>
      <div class="form-group" flex= "1">
        <label for="estado">Estado</label>
        <input type="text" id="estado" maxlength="2" onChange={(e) => setNewState(e.target.value)} placeholder="--"/>
      </div>
    </div>

    <div class="form-group">
      <label for="cnpj">CNPJ</label>
      <input type="text" id="cnpj" onChange={(e) => setNewCNPJ(e.target.value)} placeholder="CNPJ"/>
    </div>

    <div class="form-group">
      <label for="ibge">Código IBGE</label>
      <input type="text" id="ibge" onChange={(e) => setNewCode(e.target.value)} placeholder="Código IBGE"/>
    </div>

    <div class="form-group password-container">
      <label for="senha">Senha</label>
      <input type="password" id="senha" placeholder="Senha"/>
      <img src="eyes.png" alt="Mostrar senha" class="eye-icon"/>
    </div>

    <a href="#" onClick={OnLogin} class="button">Próximo</a>
  </div>

  <div class="bottom-bar"></div>
</div>
)
}