import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Login from './views/Login';
import Logout from './components/Logout/Logout';
import Translation from './views/Translation';
import Profile  from './views/Profile';
import Navbar from './components/Navbar/Navbar';
// css sections import
import './App.css';
import './components/Login/LoginFormStyle.css';
import './components/Navbar/NavbarStyle.css';
import './components/Translation/TranslationStyle.css';






function App() {

  return (
    <BrowserRouter>

<div className="App">
     <Navbar/>
     
     <Routes >

      <Route path="/" element={<Login/>} />
      <Route path="/translations" element={<Translation/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/logout" element={<Logout/>} />
     

     </Routes>
    

    </div>
    </BrowserRouter>
  
  );
}

export default App;
