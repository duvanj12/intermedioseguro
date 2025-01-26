import React from 'react';
import ReactDOM from 'react-dom/client';
import InicioPage from './pages/inicio';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import './css/main.css';
import AcercaPage from './pages/acerca';
import CrearPage from './pages/crearCuenta';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/inicio" element={<InicioPage />}/>
          <Route path="/acerca" element={<AcercaPage />}/>
          <Route path="/crearCuenta" element={<CrearPage />}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


