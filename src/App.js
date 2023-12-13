import React from 'react';
import parallaxImage from './logo.png';
import parallaxImage1 from './logo.png';
import logo from './logo.png';
import icon from './icon.png';
import './App.css';

function App() {


  return (
    <div className="App">
      <header className="header">
        <div id="navbar">
          <img src={logo} className="logo" alt="logo" />
          <img src={icon} className="icon" alt="icon" />
          <div id="navbar-left">
            <a href="research.jsx">Research</a>
            <a href="products.jsx">Products</a>
            <a href="company.jsx">Company</a>
            <a href="#search">Search</a>
          </div>
          <div id="navbar-right">
            <a href="#signup" id="signup">Sign Up</a>
            <a href="#login" id="login">Log In</a>
          </div>
        </div>
        <p>
          The Impossible AI
        </p>
      </header>
      <div className="parallax" style={{backgroundImage : `url(${parallaxImage})`}}></div>
      <div style={{ height: '500px', fontSize: '30px' }}>
        "Impossibility is the True Intelligence"
      </div>
      <div className="parallax1" style={{backgroundImage : `url(${parallaxImage1})`}}></div>
      <div style={{ height: '800px', fontSize: '30px' }}>
        "Impossibilty is the True Intelligence"
      </div>

    </div>
  );
}

export default App;
