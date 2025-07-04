import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseconfig";
import "./css/NewSol.css"
import rua from "./icons/rua.png"
import pavimentacao from "./icons/pavimentacao.png"
import dengue from "./icons/dengue.png"
import limpeza from "./icons/limpeza.png"
import colmeia from "./icons/colmeia.png"
import saneamento from "./icons/saneamento.png"
import calcadas from "./icons/calcada.png"
import buracos from "./icons/tapaburacos.png"
import iluminacao from "./icons/ilum.png"
import arvores from "./icons/arvores.png"
import mato from "./icons/mato.png"
import animal from "./icons/animal.png"





export const NewSol = () => {
  const solsCollectionRef = collection(db, "Solicitacoes");

  const [newSolDesc, setNewSolDesc] = useState("");
  const [newSolAddress, setNewSolAddress] = useState("");
  const [newSolType, setNewSolType] = useState("");



  const onSubmitSol = async () => {
    if (newSolDesc === "" || newSolAddress === "" || newSolType === "") {
      alert("Preencha Todos os Campos")
    } else {
      try {
        await addDoc(solsCollectionRef, {
          endereço: newSolAddress,
          tipo: newSolType,
          descricao: newSolDesc,
          resolvido: false,
        })
        alert("Solicitação Criada");

      } catch (err) { console.error(err) }
    }
  }

  return (

    <div className='divisoria'>
      <div class="container">
        <div class="header">
        </div>
        <form>
          <h1>Nova solicitação</h1>
          <h2>Infraestrutura:</h2>
          <div class="radio-group">
            <input type="radio" id="pavimentacao" name="solicitacao" onClick={() => setNewSolType("Pavimentação")} />
            <label className="TypesLabel" for="pavimentacao"><img src={pavimentacao} alt="" />Pavimentação</label>

            <input type="radio" id="calcadas" name="solicitacao" onClick={() => setNewSolType("Calçadas Obstruídas")} />
            <label className="TypesLabel" for="calcadas"><img src={calcadas} alt="" />Calçadas Obstruídas</label>

            <input type="radio" id="tapaburacos" name="solicitacao" onClick={() => setNewSolType("Tapa Buracos")} />
            <label className="TypesLabel" for="tapaburacos"><img src={buracos} alt="" />Tapa Buracos</label>

            <input type="radio" id="iluminacao" name="solicitacao" onClick={() => setNewSolType("Iluminação Pública")} />
            <label className="TypesLabel" for="iluminacao"><img src={iluminacao} alt="" />Iluminação Pública</label>

            <input type="radio" id="arvores" name="solicitacao" onClick={() => setNewSolType(`Árvores Caídas`)} />
            <label className="TypesLabel" for="arvores"><img src={arvores} alt="" />Árvores Caídas</label>

            <input type="radio" id="limpeza" name="solicitacao" onClick={() => setNewSolType("Limpeza")} />
            <label className="TypesLabel" for="limpeza"><img src={limpeza} alt="" />Limpeza</label>
          </div>

          <h2>Saúde</h2>
          <div class="radio-group">
            <input type="radio" id="dengue" name="solicitacao" onClick={() => setNewSolType("Combate a Dengue")} />
            <label className="TypesLabel" for="dengue"><img src={dengue} alt="" />Combate a Dengue</label>

            <input type="radio" id="febre" name="solicitacao" onClick={() => setNewSolType("Combate a Febre Amarela")} />
            <label className="TypesLabel" for="febre"><img src={dengue} alt="" />Combate a Febre Amarela</label>

            <input type="radio" id="saneamento" name="solicitacao" onClick={() => setNewSolType("Saneamento")} />
            <label className="TypesLabel" for="saneamento"><img src={saneamento} alt="" />Saneamento Básico</label>

            <input type="radio" id="mato" name="solicitacao" onClick={() => setNewSolType("Mato Alto")} />
            <label className="TypesLabel" for="mato"><img src={mato} alt="" />Mato Alto</label>
          </div>

          <h2>Remoção:</h2>
          <div class="radio-group">
            <input type="radio" id="animal" name="solicitacao" onClick={() => setNewSolType("Animal Morto")} />
            <label className="TypesLabel" for="animal"><img src={animal} alt="" />Animal Morto</label>

            <input type="radio" id="colmeias" name="solicitacao" onClick={() => setNewSolType("Colmeias")} />
            <label className="TypesLabel" for="colmeias"><img src={colmeia} alt="" />Colmeias</label>
          </div>

          <h2>Social:</h2>
          <div class="radio-group">
            <input type="radio" id="moradores" name="solicitacao" onClick={() => setNewSolType("Resgate a Moradores de Rua")} />
            <label className="TypesLabel" for="moradores"><img src={rua} alt="" />Resgate a Moradores de Rua</label>

            <input type="radio" id="imoveis" name="solicitacao" onClick={() => setNewSolType("Imovel Abandonado")} />
            <label className="TypesLabel" for="imoveis"><img src={rua} alt="" />Imóveis Abandonados</label>
          </div>
        </form>
      </div>

      <div class="containerAbsurdo container">
        <form>
          <div class="form-group">
            <label for="localizacao">
              Localização
            </label>
            <input type="text" id="localizacao" placeholder="Escreva a localização" onChange={(e) => setNewSolAddress(e.target.value)} />
          </div>

          <div class="form-group">
            <label for="descricao">Descrição</label>
            <textarea id="descricao" placeholder="Escreva a descrição do problema" onChange={(e) => setNewSolDesc(e.target.value)}></textarea>
          </div>
        </form>
      </div>



      <div class="bottom-bar">
        <button class="bottom-button" onClick={onSubmitSol}>
          <span class="back-icon">Próximo →</span>
        </button>
      </div>

      <a href="/solscivil" class="back-button">
        ←
      </a>


    </div>
  )
}