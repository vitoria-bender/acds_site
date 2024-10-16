import React from "react";

const ContatosEm = () => {
  return (
    <div id="ContatosEm" className="bg-white p-8">
      <h2 className="text-2xl font-bold text-center mb-8">Contatos de Emergência</h2>
      <h2 className="text-xl text-center mb-8">Você não está sozinho. Em casos de necessidade, ligue para os seguintes contatos de emergência</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* CVV */}
        <div className="border rounded-lg p-6 text-center shadow-lg">
          <h3 className="text-xl font-semibold">CVV - Centro de Valorização da Vida</h3>
          <p className="text-3xl font-bold mt-2">Ligue 188</p>
          <p className="mt-1">Atendimento 24 horas</p>
        </div>
        
        {/* SAMU */}
        <div className="border rounded-lg p-6 text-center shadow-lg">
          <h3 className="text-xl font-semibold">SAMU</h3>
          <p className="text-3xl font-bold mt-2">Ligue 192</p>
          <p className="mt-1">Para emergências médicas</p>
        </div>
        
        {/* Polícia Militar */}
        <div className="border rounded-lg p-6 text-center shadow-lg">
          <h3 className="text-xl font-semibold">Polícia Militar</h3>
          <p className="text-3xl font-bold mt-2">Ligue 190</p>
          <p className="mt-1">Para situações de risco</p>
        </div>
      </div>
    </div>
  );
};

export default ContatosEm;
