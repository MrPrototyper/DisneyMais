import './App.scss';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import SignUp from './components/SignUp';
import Login from './components/Login';

function App() {
  return (
    <div className="App"> 
      <Router>          
          <Header />          
          <Routes>            
            <Route path="/" element={<SignUp />} />            
            <Route path="/home" element={<Home />} />            
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/login" element={<Login />} />
          </Routes>        
      </Router>     
    </div>
  );
}

export default App;
