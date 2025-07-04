import '../App.css';
import { db } from "../firebaseconfig"
import { useEffect, useState } from 'react';
import { getDocs, collection, addDoc } from 'firebase/firestore';
import "./css/solspref.css"
import logo from "./css/ResolveBrasil.png"

import user from "./icons/perfil.png"
import config from "./icons/config.png"



export const SolsPref = () => {


  // read
  const [Sols, setSols] = useState([]);

  const solsCollectionRef = collection(db, "Solicitacoes");


  useEffect(() => {

    const getSols = async () => {
      try {
        const data = await getDocs(solsCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setSols(filteredData);
      } catch (err) {
        console.error(err);
      }
    };

    getSols();
  }, [])

  const linkToPage = (system) => {
    console.log("#/edit/" + system.id);
    return `/edit/${system.id}`;
  }

  return (
    <div className="containerSols">
      <div className="top-bar">
        <img src={logo} alt="Logo" />
      </div>

      <div>
        <div className="header">
          <h1>Governo</h1>
          <div className="header-icons">
            <a href='/profilepref'><img border-radius = "100%" src={user} alt="Perfil" height="50px" width="50px"/></a>
            <a href='/config'><img src={config} alt="Configurações" /></a>
          </div>
        </div>
        {Sols.map((sol) => (
          <div className ="solicitacao">
          <div className="solicitacao-info">
            <span>{sol.tipo}</span>
            <span>Local: {sol.endereço}</span>
            <div className='avariadoContainer' style={{backgroundColor: sol.resolvido ? "green" : "red"}}>
              <p className='avariadoTxt'>{sol.resolvido? document.getElementsByClassName("avariadoTxt").innerHTML = "Resolvido": document.getElementsByClassName("avariadoTxt").innerHTML = "Pendente"}</p>
            </div>
          </div>
          <a className='solveButton' href = {linkToPage(sol)}>Solucionar</a>
        </div>
        ))}

        <a href="../" className="back-button">
          ←
        </a>

        <div className="bottom-bar"></div>

      </div>
    </div>
  );

}