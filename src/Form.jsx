import React from "react";

const Form = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Deixe seu Feedback</h2>
      <p className="text-gray-600 mb-6 text-center">
        Preencha o formulário abaixo para ajudar a melhorar a experiência cada vez mais.
        Sua opinião é muito importante!
      </p>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfjnA6Vc2sE_v0vzCCZvmSLa-Y9IjiINR2aX0oX43MPXKjgqg/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0"
        width="100%"
        height="2120"
        className="w-full max-w-3xl border rounded-lg"
        title="Formulário de Feedback"
      >
        Carregando…
      </iframe>
    </div>
  );
};

export default Form;
