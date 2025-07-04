import  "./css/pagInicial.css"
import logo from "./css/ResolveBrasil.png"

export const Inicial = () =>{
    return(<div>

    <div class="top-bar-inicial">
    <img src= {logo} alt="Logo" height ="350px" className="logoInicial"/>
    </div>

    <div class="content">
    <h1>Olá, bem vindo!</h1>
    <p>Quem é você?</p>

    <a href="/loginpref" class="button">GOVERNO</a>
    <a href="/logincivil" class="button">CIVIL</a>
    </div>
    <div class="bottom-bar"></div>

    </div>)
}