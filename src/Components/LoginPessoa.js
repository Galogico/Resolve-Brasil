import "./css/LoginCivil.css"
import { useState, useEffect } from "react"
import logo from "./css/ResolveBrasil.png"
import { useNavigate } from "react-router-dom";


export const LoginPessoa = () => {
    const [newName, setNewName] = useState("");
    const [newCity, setNewCity] = useState("");
    const [newState, setNewState] = useState("");
    const [newCPF, setNewCPF] = useState("");

    const navigate = useNavigate();

    const OnLogin = () => {
        window.localStorage.clear();
      if(newCity === "" || newState === "" || newCPF === "" || newName === ""){
         alert("preencha todos os campos")
      }else{
        window.localStorage.setItem("NAME_USER", JSON.stringify(newName))
        window.localStorage.setItem("CITY_USER", JSON.stringify(newCity))
        window.localStorage.setItem("STATE_USER", JSON.stringify(newState))
        window.localStorage.setItem("CPF_USER", JSON.stringify(newCPF))
        window.localStorage.setItem("CODE_USER", JSON.stringify(newName))

        navigate('/solscivil');
      }
    }

    useEffect(() => {
        const HasLoggedIn = () => {
            if(window.localStorage.getItem("CITY_USER")){
              navigate('/solscivil');
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
    <div class="form-group">
      <label for="nome">Nome</label>
      <input type="text" id="nome" placeholder="Nome" onChange={(e) => setNewName(e.target.value)}/>
    </div>

    <div class="form-group">
      <label for="cpf">CPF</label>
      <input type="text" id="cpf" placeholder="CPF" onChange={(e) => setNewCPF(e.target.value)}/>
    </div>

    <div class="form-row">
      <div class="form-group" flex = "2">
        <label for="cidade">Cidade</label>
        <input type="text" id="cidade" placeholder="Cidade" onChange={(e) => setNewCity(e.target.value)}/>
      </div>
      <div class="form-group" flex = "1">
        <label for="estado">Estado</label>
        <input type="text" id="estado" placeholder="--" maxlength="2" onChange={(e) => setNewState(e.target.value)}/>
      </div>
    </div>

    <div class="form-group password-container">
      <label for="senha">Senha</label>
      <input type="password" id="senha" placeholder="Senha"/>
      <img src="eyes.png" alt="Mostrar senha" class="eye-icon"/>
    </div>

    {/* <div class="form-group password-container">
      <label for="confirmar-senha">Confirmar senha</label>
      <input type="password" id="confirmar-senha" placeholder="Confirme a senha"/>
      <img src="eyes.png" alt="Mostrar senha" class="eye-icon"/>
    </div> */}

    <a onClick={OnLogin} class="button">Login</a>
  </div>

  <div class="bottom-bar"></div>

</div>
)
}