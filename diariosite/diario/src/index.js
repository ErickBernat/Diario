import React from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './pages/Login/index.jsx';
import Diario from './pages/Diario/index.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/diario" element={<Diario />} />
    </Routes>
  </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
