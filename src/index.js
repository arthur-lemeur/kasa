import React from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import "./styles/sass/main.scss"
import Home from './pages/Home/Home';
import About from "./pages/About/About";

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
      </Routes>
      </Router>
  </React.StrictMode>
);
