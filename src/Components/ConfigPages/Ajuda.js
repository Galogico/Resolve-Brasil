import logo from "../css/ResolveBrasil.png"

export const Ajuda = () => {
    return( <div>
        <div class="top-bar">
    <img src={logo} alt="Logo"/>
  </div>

  <div class="content">
    <h1>Ajuda</h1>
    <p>
      Se você tiver dúvidas, sugestões ou encontrar <br/>
      algum problema ao usar o aplicativo, entre em contato <br/>
      com a gente! <br/>
      Envie um e-mail para <br/>
      <a href="mailto:eduardohirohito@gmail.com">eduardohirohito@gmail.com</a> <br/>
      e responderemos o mais <br/>
      rápido possível. <br/>
      Estamos aqui para ajudar!
    </p>
  </div>

  <a href="/#/config" class="back-button">
    ←
  </a>

  <div class="bottom-bar"></div>
  </div>
)
}