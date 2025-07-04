
import './App.css';
import { Solicitacoes } from './Components/Solicitacoes.js';
import { SolsPref } from './Components/SolsPref';
import Edit from './Components/EditPref';

import {Routes, Route,  BrowserRouter} from 'react-router-dom';
import { NewSol } from './Components/NewSol';
import { Inicial } from './Components/pagInicial';
import { LoginPrefeitura } from './Components/LoginPrefeitura';
import { Profile } from './Components/Profile';
import { LoginPessoa } from './Components/LoginPessoa';
import { Config } from './Components/Config';
import { Proposito } from './Components/ConfigPages/proposito';
import { Ajuda } from './Components/ConfigPages/Ajuda';
import { About } from './Components/ConfigPages/About';
import { ProfileCivil } from './Components/ProfileCivil';

function App() {
  return (
    <div className="App">
      <div>
        <section>      
          <BrowserRouter>                    
            <Routes> 
                <Route path="/" element={<Inicial/>}/>
                 <Route path="/solscivil" element={<Solicitacoes/>}/>
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
        </section>
      </div>
    </div>
  );
}

export default App;
