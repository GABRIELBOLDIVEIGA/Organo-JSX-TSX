import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// em um arquivo TS temos que passar ! no final do getElementById, pois ele entende que pode nao existir esse elemento no DOM
// com a !, nos estamos garantido para o programa que vai existir este elemento.
const root = ReactDOM.createRoot(document.getElementById('root')!); 
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
