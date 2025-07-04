import logo from "../css/ResolveBrasil.png"

export const Proposito = () => {
    return( <div>
        <div class="top-bar">
    <img src={logo} alt="Logo"/>
  </div>

<div class="content">
    <h1>Propósito</h1>
    <p>
    Nosso propósito com este aplicativo<br/>
    é facilitar a comunicação<br/>
    entre a população<br/>
    e os órgãos responsáveis,<br/>
    ajudando a identificar e resolver <br/>
    problemas de infraestrutura urbana,<br/>
    como buracos nas ruas,<br/>
    falta de iluminação, árvores caídas<br/>
    e calçadas danificadas.<br/>
    Queremos promover<br/>
    uma cidade mais segura,<br/>
    eficiente e participativa para todos.
    </p>
  </div>


  <a href="/#/config" class="back-button">
    ←
  </a>

  <div class="bottom-bar"></div>
  </div>
)
}