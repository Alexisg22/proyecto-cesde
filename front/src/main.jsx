import React, { useState } from 'react'
import { Principal } from './paginas/Principal.jsx'
import { Asesores } from './paginas/Asesores.jsx'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/asesores" element={<Asesores />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
