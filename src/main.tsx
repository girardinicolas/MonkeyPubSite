import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Impedisce al browser di ricordare il punto di scroll precedente.
window.history.scrollRestoration = 'manual';

// A ogni caricamento della pagina imposta la rotta iniziale su #home.
// replaceState evita di aggiungere una voce inutile alla cronologia.
window.history.replaceState(null, '', '/#home');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);