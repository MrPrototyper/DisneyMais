import './App.scss';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <div className="App"> 
      <Router>                
          {/* <nav>
            <Link to="/">Test</Link>              
          </nav> */}
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>        
      </Router>     
    </div>
  );
}

export default App;
