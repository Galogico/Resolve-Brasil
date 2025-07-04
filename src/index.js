import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Add missing import
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Inicial } from './Components/pagInicial';
import { Solicitacoes } from './Components/Solicitacoes';
import { SolsPref } from './Components/SolsPref';
import { NewSol } from './Components/NewSol';
import Edit from './Components/EditPref';
import { LoginPrefeitura } from './Components/LoginPrefeitura';
import { LoginPessoa } from './Components/LoginPessoa';
import { Profile } from './Components/Profile';
import { ProfileCivil } from './Components/ProfileCivil';
import { Config } from './Components/Config';
import { Proposito } from './Components/ConfigPages/proposito';
import { Ajuda } from './Components/ConfigPages/Ajuda';
import { About } from './Components/ConfigPages/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/Resolve-Brasil"> 
      <Routes> 
        <Route path="/" element={<Inicial/>}/>
        <Route path="/Resolve-Brasil/solscivil" element={<Solicitacoes/>}/>
        <Route path="/solspref" element={<SolsPref/>}/>
        <Route path="/newsol" element={<NewSol/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
        <Route path="/loginpref" element={<LoginPrefeitura/>}/>
        <Route path="/logincivil" element={<LoginPessoa/>}/>
        <Route path="/profilepref" element={<Profile/>}/>
        <Route path="/profilecivil" element={<ProfileCivil/>}/>
        <Route path="/config" element={<Config/>}/>
        <Route path='/config/proposito' element={<Proposito/>}/>
        <Route path='/config/help' element={<Ajuda/>}/>
        <Route path='/config/about' element={<About/>}/>
      </Routes>    
    </BrowserRouter>    
  </React.StrictMode>
);

reportWebVitals();