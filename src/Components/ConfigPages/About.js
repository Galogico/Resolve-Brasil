import logo from "../css/ResolveBrasil.png"

export const About = () => {
    return (<div>
        <div class="top-bar">
            <img src={logo} alt="Logo" />
        </div>
        <div class="content">
            <h1>Sobre Nós</h1>
            <p>
                Somos um grupo do Projeto Escola<br />
                do Instituto Alpha Lumen competindo<br />
                pela Olimíada Brasileira de Tecnologia<br />
                (OBT) de 2025.<br /><br />

                Compostos pelo time de matemática:<br />
                Eduardo Hirohito Izawa Maciel,<br />
                Luiz Tenório Costa<br />
                e Luis Henrique Campos.<br /><br />

                Além do time de pesquisa:<br />
                Pablo Marchina,<br />
                Luis Gustavo Carvalho Godoy<br />
                e Gabriel Calfachio.<br />
            </p>
        </div>

        <a href="/config" class="back-button">
            ←
        </a>

        <div class="bottom-bar"></div>
    </div >
    )
}