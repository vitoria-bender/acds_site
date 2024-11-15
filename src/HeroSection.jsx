import React from 'react';
import background from './imgs/background.png';

const HeroSection = () => {
  return (
    <section
    className="relative bg-cover bg-center h-screen"
    style={{ backgroundImage: `url(${background})` }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="text-center text-white px-4">
        <h1 className="text-5xl font-bold">As cores da Saudade</h1>
        <p className="mt-4 text-xl">
          A importância do diagnóstico e tratamento de transtornos mentais
          durante a passagem pelo luto
        </p>
        
        <button className="mt-8 bg-white text-black py-2 px-6 rounded hover:bg-gray-200 transition duration-300">
          <a href="#Jogue">
            Descubra Mais</a>
          </button>
      </div>
    </div>
  </section>
      
      
  );
};

export default HeroSection;
