import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ContatosEm from './ContatosEm';
import Header from './Header';
import HeroSection from './HeroSection';
import FasesLuto from './FasesLuto';
import Sobre from './Sobre';
import Footer from './Footer';
import Carrossel from './Carrossel';
import Jogue from './Jogue';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <HeroSection />
    <ContatosEm />
    <Sobre />
    <Carrossel />
    <FasesLuto />
    <Jogue />
    <Footer />

  </React.StrictMode>
);
