import './App.css'
import Home from './Home';
import Contactus from './Contactus';
import Aboutus from './Aboutus';
import { BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <ol>
          <li><Link to="/"> Home</Link></li>
          <li><Link to="/Aboutus">About Us</Link></li>
          <li><Link to="/Contactus">Contact Us</Link></li>
        </ol>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Contactus" element={<Contactus />} />
      </Routes>
    </Router>
  );
}

export default App;