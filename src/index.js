import React from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import "./styles/sass/abstracts/_variables.scss";
import "./styles/sass/abstracts/_responsive.scss";
import "./styles/sass/base/_base.scss";
import "./styles/sass/base/_typography.scss";

import Home from './pages/Home/Home';
import About from "./pages/About/About";
import Error from "./pages/Error/Error";
import Logement from "./pages/Logements/logement";

const root = createRoot(document.getElementById('root'));
root.render(
      <Router>
          <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="*" element={<Error/>}/>
              <Route path="/logement/:id" element={<Logement/>}/>
          </Routes>
      </Router>
);
