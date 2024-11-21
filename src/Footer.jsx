import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center px-4">
        {/* Direitos reservados */}
        <p className="text-sm mb-4">
          © 2024 <span className="font-bold">As Cores da Saudade.</span> Todos os direitos reservados.
        </p>

        {/* Aviso importante */}
        <p className="text-sm mb-6">
          Este site fornece informações gerais sobre saúde mental e luto.
          Em caso de emergência, procure ajuda profissional imediatamente.
        </p>

        {/* Link para Instagram */}
        <div className="flex justify-center items-center space-x-3">
          <a
            href="https://www.instagram.com/acds.tcc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-600 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M7.75 2h8.5C19.55 2 22 4.45 22 7.75v8.5C22 19.55 19.55 22 16.25 22h-8.5C4.45 22 2 19.55 2 16.25v-8.5C2 4.45 4.45 2 7.75 2zm5.25 4a5.25 5.25 0 100 10.5A5.25 5.25 0 0013 6zm5.25.5a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm-5.25 2.25a3 3 0 110 6 3 3 0 010-6z" />
            </svg>
          </a>
          <span className="text-sm text-gray-300">@acds.tcc</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
