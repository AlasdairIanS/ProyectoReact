import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Layout from "./Layout";
import Usuarios from "./Lista";
import Opcion2 from "./Opcion2";
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Usuarios />} />
          <Route path="Opcion2" element={<Opcion2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
    
    </>
  );
