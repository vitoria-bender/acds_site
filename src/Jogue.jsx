import React from 'react';

const Jogue = () => {
  const cards = [
    {
      title: 'Ambientes Imersivos',
      description: 'Explore cenários que representam diferentes estágios do luto, cada um com sua própria atmosfera única.',
      icon: '🎮',
    },
    {
      title: 'Quebra-cabeças Emocionais',
      description: 'Resolva desafios que refletem o processo de cura e ajudam a processar emoções complexas.',
      icon: '🧩',
    },
    {
      title: 'Narrativa Reflexiva',
      description: 'Vivencie uma história sensível que guia o jogador por momentos de introspecção e aprendizado emocional.',
      icon: '📖',
    },
    {
      title: 'Estratégias de Cura',
      description: 'Aprenda sobre métodos saudáveis para lidar com a perda e o luto ao longo da sua jornada.',
      icon: '🧠',
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div id="Jogue" className="container mx-auto text-center mb-10 px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">As Cores da Saudade</h2>
        <p className="text-lg text-gray-800 mb-10">
          "As Cores da Saudade" vai além de ser apenas um jogo sobre o luto; ele tem o objetivo de conscientizar os jogadores sobre saúde mental e quebrar estigmas relacionados a esse tema. Através de uma narrativa sensível, o jogador é guiado por fases que simbolizam a dor da perda e o processo de cura, ajudando a entender as diversas emoções e desafios que surgem durante o luto.
        </p>
        <p className="text-lg text-gray-800 mb-10">
          O jogo busca educar os jogadores sobre a importância de cuidar da saúde mental, mostrando que lidar com as emoções de forma aberta e sem preconceitos é fundamental para o bem-estar. As interações no jogo incentivam o jogador a refletir sobre a necessidade de buscar apoio, dialogar sobre seus sentimentos e reconhecer a importância do tratamento para transtornos mentais. Ao longo da jornada, o personagem aprende a lidar com a perda, enquanto o jogador internaliza essas lições, ajudando a desmistificar os tabus em torno do sofrimento psicológico e incentivando a empatia.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-lg bg-white text-gray-800 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-4xl mb-4 text-gray-500">
              {card.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-gray-800 text-white py-3 px-8 rounded-lg font-bold text-lg shadow-md hover:bg-blue-900 hover:shadow-lg transition duration-300">
          Jogue Agora
        </button>
      </div>
    </section>
  );
};

export default Jogue;
