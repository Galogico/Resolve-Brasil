import { useParams } from "react-router-dom";
import { getDoc, doc, updateDoc, } from 'firebase/firestore';
import { db } from "../firebaseconfig"
import { useState, useEffect } from "react";
import "./css/Solve.css"
import logo from "./css/ResolveBrasil.png"

export const Edit = () =>{
    const { id } = useParams();
    const [data, setData] = useState([]);
    
    useEffect(() =>{
        const fetchDocument = async () => {
            try {
                const docRef = doc(db, "Solicitacoes", id);
                const docSnap = await getDoc(docRef);

                setData(docSnap.data());
            } catch (error) {
                console.error("Error getting document:", error);
            }
        }
        
        fetchDocument();
    }, [id])

    const UpdateSols = async(id) =>{
        const docRef = doc(db, "Solicitacoes", id);
        await updateDoc(docRef, {resolvido: true})
        alert("resolvido");

    }

    return (<div className="wrapper2"> 
      <div class="top-bar">
    <img src={logo} alt="Logo"/>
  </div>
        <div className="organizer">
            <h1 className="editTxt">{data.tipo}</h1>
            <hr></hr>
            <div className="main-solve">
                <h3 className="editTxt">Descrição:</h3>
                <p className="editTxt">{data.descricao}</p>
            <hr></hr>
                <h3 className="editTxt">Endereço:</h3>
                <p className="editTxt">{data.endereço}</p>
                <h3 className="editTxt">Status:</h3>
                <div>
                    <button className="status-container" style={{backgroundColor: data.resolvido ? "green" : "red" }}>
                        <p className = "status-txt"color="white">{data.resolvido? document.getElementsByClassName("avariadoTxt").innerHTML = "Resolvido": document.getElementsByClassName("avariadoTxt").innerHTML = "Pendente"}</p>
                    </button>
                </div>
                <button className="editText button" onClick={() =>UpdateSols(id)}>Resolver</button>
            </div>
        </div>
        <a href="/solspref" className="back-button">
          ←
        </a>
    </div>);
}
export default Edit;