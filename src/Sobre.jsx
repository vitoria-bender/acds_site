import React from 'react';
import SobreImg from './imgs/Sobre.png';

const Sobre = () => {
  return (
    <div
      id="Sobre"
      className="flex flex-col lg:flex-row items-center justify-between p-6 bg-white mt-10 space-y-6 lg:space-y-0 lg:space-x-10"
    >
      {/* Imagem */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={SobreImg}
          alt="Exemplo"
          className="w-80 sm:w-96 h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Conteúdo de Texto */}
      <div className="w-full lg:w-1/2 px-6 lg:px-10 text-center lg:text-left max-w-3xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-black">
          A importância da saúde mental durante o luto
        </h2>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          A saúde mental durante o luto é um aspecto fundamental no processo de
          cura e é especialmente relevante em um jogo que explora essa
          temática. O luto, que é a resposta emocional à perda, envolve uma
          série de estágios e desafios que afetam profundamente o bem-estar
          psicológico e emocional de uma pessoa. Integrar a saúde mental de
          maneira cuidadosa e consciente no enredo de um jogo como{" "}
          <span className="font-semibold italic">As Cores da Saudade</span>{" "}
          oferece uma oportunidade única para criar uma experiência envolvente,
          educativa, e acima de tudo, conscientizadora, ajudando os jogadores a
          entender e a lidar com suas próprias emoções ou as de pessoas ao seu
          redor.
        </p>
      </div>
    </div>
  );
};

export default Sobre;
