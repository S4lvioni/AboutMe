import React from 'react';
import cabeca from './img/eu.jpeg'
import './App.css';
import cabeca2 from './img/eu2.jpeg'
import WebFont from 'webfontloader';


function App() {
  WebFont.load({
    google: {
      families: ['Playfair Display', 'serif','Opens Sans','sans-serif']
    }
  });
  return (
    <div className="wrapper">
      <div className="cabeçalho">
        <h1 className="titulo typewriter">Alexandre Salvioni</h1>
      </div>
      <div className="section1">
        <img className="foto" src={cabeca}/>
        <div className="texto1">
          <p >Hi! My name is Alexandre. I'm a 20 y/o Software Engineering Student, currently working with Landing Pages Development. I like to mess with colors palettes and pretend to know how to make a website!</p>
        </div>
        
      </div>
    </div>
  );
}

export default App;
