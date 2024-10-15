import React from 'react';
import logo from './imgs/As cores da Saudade.png';

const Header = () => {
  return (
    <header className="bg-gray-900 fixed top-0 w-full z-50 py-6">
      <div className="container mx-auto flex justify-between items-center">
       
        <div>
          <img src={logo} alt="Logo" className="h-4" />
        </div>

    
        <nav>
          <ul className="flex space-x-6 text-gray-300">
            <li>
              <a href="#contatos" className="hover:text-gray-100">
                Sobre
              </a>
            </li>
            <li>
              <a href="#informacoes" className="hover:text-gray-100">
                Contatos
              </a>
            </li>
            <li>
              <a href="#fases" className="hover:text-gray-100">
                Fases do Luto
              </a>
            </li>
            <li>
              <a href="#jogo" className="hover:text-gray-100">
                Jogue agora
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

