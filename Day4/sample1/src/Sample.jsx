import './App.css'
import Home from './Home';
import Contactus from './Contactus';
import Aboutus from './Aboutus';
import { BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';

function Sample() {
  return (
    <Router>
      <nav className="navbar">
      
         <Link to="/" className="logo-container"> 
         <img src="https://www.creativefabrica.com/wp-content/uploads/2022/11/27/Woman-silhouette-logo-head-face-logo-Graphics-48836688-1.jpg" alt="logo" className="logo" />
          <span className="logo-text">Harshini</span> </Link>
         
         <div className="nav-links">
          <Link to="/" className="nav-item"> Home</Link>
          <Link to="/Aboutus" className="nav-item">About Us</Link>
          <Link to="/Contactus" className="nav-item">Contact Us</Link>
          </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Contactus" element={<Contactus />} />
      </Routes>
    </Router>
  );
}

export default Sample;