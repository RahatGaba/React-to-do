import React from 'react';
import logo from './logo.svg';
import './App.css';
import Working from './Working';


function App() {
  return (
     
     <div className="container">
     <div className="App"> 
     
       <header>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>
       REACT TO DO
       </h1>
       <Working subName="React" AssgTime="Saturday"/>
      <hr/>
       <Working subName="Javascript" AssgTime="Sunday"/>
      <hr/>
      <Working subName="Android" AssgTime="July 15"/>
       </header> 
    </div> 
   </div>  
    
  );
}

export default App;
