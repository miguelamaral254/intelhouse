import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} IntelSmart. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;