import "./css/config.css"
import help from "./icons/help.png"
import info from "./icons/info.png"
import out from "./icons/out.png"
import obt from "./icons/obt.png"
import logo from "./css/ResolveBrasil.png"

export const Config = () => {
    return(<div>
          <div class="top-bar">
    <img src={logo} alt="Logo"/>
  </div>

  <div class="contentConfig">
    <h1>Configurações</h1>

    <a href="#/config/help" class="option">
      <img src={help} alt="Ajuda"/>
      <span>Ajuda</span>
    </a>

    <a href="#/config/about" class="option">
      <img src={info} alt="Sobre nós"/>
      <span>Sobre nós</span>
    </a>

    <a href="#/config/proposito" class="option">
      <img src={obt} alt="Propósito"/>
      <span>Propósito</span>
    </a>

    <a href="/" class="option">
      <img src={out} alt="Sair"/>
      <span>Sair</span>
    </a>
  </div>

  <a href="../" class="back-button">
    ←
  </a>

  <div class="bottom-bar"></div>

</div>)
}