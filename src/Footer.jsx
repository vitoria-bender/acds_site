import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © 2024 <span className="font-bold">As Cores da Saudade.</span> Todos os direitos reservados.
        </p>

        <p className="text-sm mt-3">
          Este site fornece informações gerais sobre saúde mental e luto.
          Em caso de emergência, procure ajuda profissional imediatamente.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
