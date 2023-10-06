import './App.css';
import Navbar from './components/Navbar';
import MainContent from './components/Main';
import React, { useState } from 'react';
import Footer from './Footer';

function App() {
  var [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme(!darkTheme);
  }

  return (
    <div className={darkTheme ? "App dark" : "App"}>
      <Navbar darkTheme={darkTheme} toggleTheme={toggleTheme}/>
      <MainContent/>
      <Footer/>
    </div>
  );
}

export default App;
