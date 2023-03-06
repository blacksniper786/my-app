import React from 'react';
/* import logo from './logo.svg'; */
/* import Item from './MyItem'; */
import './App.css';
import StarWars from './StarWars';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          black sniper was here !
        </p>
        <Item name="blacksniper"/>
        <Item name="abdeohss"/>
        <Item name="ab oh"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <StarWars/>
      </header>
    </div>
  );
}

export default App;
