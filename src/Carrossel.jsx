import React from "react";
import Slider from "react-slick";

const Carrossel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const info = [
    {
      title: "Depressão",
      description:
        "A depressão é um transtorno mental comum caracterizado por uma persistente sensação de tristeza e perda de interesse em atividades que antes traziam prazer. Pode impactar negativamente a capacidade de trabalhar, dormir e se alimentar.",
    },
    {
      title: "Ansiedade",
      description:
        "A ansiedade é uma emoção caracterizada por sentimentos de tensão, preocupações e mudanças físicas, como aumento da pressão arterial. Em níveis elevados, pode interferir nas atividades diárias e qualidade de vida.",
    },
    {
      title: "Transtorno de Estresse Pós-Traumático (TEPT)",
      description:
        "O TEPT é uma condição que pode se desenvolver após uma pessoa vivenciar ou testemunhar um evento traumático. Seus sintomas incluem flashbacks, pesadelos e ansiedade severa, além de pensamentos incontroláveis sobre o evento.",
    },
    {
      title: "Luto Prolongado",
      description:
        "O luto prolongado é caracterizado por uma reação de tristeza intensa e contínua após a perda de um ente querido. Quando dura por mais de um ano, pode interferir no funcionamento diário, causando sofrimento psicológico significativo.",
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        Condições relacionadas ao luto
      </h2>
      <h4 className="text-xl text-center mb-5">
       O luto pode desencadear condições mentais que podem exigir apoio profissional. Conheça o que foi abordado no jogo e esteja atento aos sinais.
      </h4>
      <h6 className="text-xl text-center mb-8">
       Mas lembre-se! Apenas um profissional de saúde pode diagnosticar e tratar tais condições de forma adequada. Busque ajuda qualificada se necessário.
      </h6>
      <div className="container mx-auto">
        <Slider {...settings}>
          {info.map((item, index) => (
            <div key={index} className="p-6">
              <div className="bg-white border rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-700 text-lg">{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carrossel;