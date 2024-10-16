import React from 'react';
import SobreImg from './imgs/Sobre.png'; 

const Sobre = () => {
  return (
    <div id="Sobre" className="flex flex-col md:flex-row items-center justify-between p-6 bg-white mt-10">
      
      <div className="w-full md:w-1/2">
        <img
          src={SobreImg}
          alt="Exemplo"
          className="w-96 h-auto ml-20 rounded-lg shadow-md"
        />
      </div>

      <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-8 text-center md:text-left">
        <h2 className="text-2xl font-bold mb-4 text-black">A importância da saúde mental durante o luto</h2>
        <p className="text-lg text-gray-700 mb-4 mr-10">
        A saúde mental durante o luto é um aspecto fundamental no processo de cura e é especialmente relevante em um jogo que explora essa temática. O luto, que é a resposta emocional à perda, envolve uma série de estágios e desafios que afetam profundamente o bem-estar psicológico e emocional de uma pessoa. Integrar a saúde mental de maneira cuidadosa e consciente no enredo de um jogo como As cores da Saudade oferece uma oportunidade única para criar uma experiência envolvente, educativa, e acima de tudo, conscientizadora, ajudando os jogadores a entender e a lidar com suas próprias emoções ou as de pessoas ao seu redor.
        </p>
      </div>
    </div>
  );
};

export default Sobre;
