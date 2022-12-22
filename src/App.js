import './App.css';
import Navbar from './components/Navbar';
import MainContent from './components/Main';
import React, { useState } from 'react';

function App() {
  var [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme(event) {
    console.log(event.target.checked);
    setDarkTheme(!darkTheme);
  }

  return (
    <div className={darkTheme ? "App dark" : "App"}>
      <Navbar darkTheme={darkTheme} toggleTheme={toggleTheme}/>
      <MainContent theme={darkTheme}/>
    </div>
  );
}

export default App;
