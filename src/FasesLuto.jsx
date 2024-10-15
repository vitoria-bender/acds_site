import React from 'react';
import Negação from './imgs/negação.png';
import Raiva from './imgs/raiva.png';
import Barganha from './imgs/barganha.png';
import Depressão from './imgs/depressão.png';
import Aceitação from './imgs/aceitação.png';
import Significado from './imgs/significado.png';

const FasesLuto = () => {
  const fases = [
    {
      title: 'Negação',
      description: 'Um estado de choque e descrença. A pessoa pode se sentir entorpecida e negar a realidade da perda.',
      imgSrc: Negação, 
    },
    {
      title: 'Raiva',
      description: 'Frustração e ressentimento podem surgir à medida que a realidade da perda se torna mais clara.',
      imgSrc: Raiva,
    },
    {
      title: 'Barganha',
      description: 'Tentativas de negociar, muitas vezes com uma força superior, na esperança de reverter a perda.',
      imgSrc: Barganha,
    },
    {
      title: 'Depressão',
      description: 'Profunda tristeza e desespero à medida que a magnitude da perda é totalmente compreendida.',
      imgSrc: Depressão,
    },
    {
      title: 'Aceitação',
      description: 'Aceitação gradual da nova realidade e início do processo de cura e reconstrução.',
      imgSrc: Aceitação,
    },
    {
      title: 'Encontrando Significado',
      description: 'Descobrir um novo propósito ou significado na vida após a perda, honrando a memória do ente querido.',
      imgSrc: Significado,
    },
  ];

  return ( 
  <div className="flex flex-col items-center p-6 mt-10">
  <h1 className="text-3xl font-bold mb-6">As Fases do Luto</h1>
  <p className="text-center text-lg mb-8">
    O luto é um processo complexo e individual, mas geralmente segue um padrão reconhecível. Compreender essas fases pode ajudar no processo de cura.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {fases.map((fase, index) => (
      <div
        key={index}
        className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 min-h-64 flex flex-col justify-center items-center text-center"
      >
        <img src={fase.imgSrc} alt={fase.title} className="w-12 h-12 mb-4" />
        <h2 className="text-xl font-bold mb-2 text-black">{fase.title}</h2>
        <p className="text-black">{fase.description}</p>
      </div>
    ))}
  </div>
  <p className="text-center text-lg mt-8">
  Lembre-se: o processo de luto é único para cada pessoa e não segue necessariamente uma ordem linear.
  </p>
  <button className="mt-5 bg-gray-700 text-white py-2 px-6 rounded hover:bg-gray-500 transition duration-300">
            Saiba mais sobre o luto
          </button>
</div>
);
};

export default FasesLuto;
