import logo from './logo.svg';
import Signup from './components/SignUp';
import './App.css';

import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <section>                              
            <Routes>                                                                        <Route path="/" element={<Home/>}/>
               <Route path="/signup" element={<SignUp/>}/>
            </Routes>                    
        </section>
      </div>
    </Router>
    </div>
  );
}

export default App;
