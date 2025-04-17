import React from "react";

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white mt-10">
        <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Marca */}
          <div>
            <h2 className="text-xl font-bold">Byte and Words</h2>
            <p className="text-sm mt-2">Tecnología, artículos y análisis con enfoque actual. 📱💻</p>
          </div>
  
          {/* Enlaces */}
          <div>
            <h3 className="font-semibold mb-2">Enlaces</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="/" className="hover:text-blue-400">Inicio</a></li>
              <li><a href="/politica" className="hover:text-blue-400">Política de privacidad</a></li>
              <li><a href="/contacto" className="hover:text-blue-400">Contacto</a></li>
              <li><a href="/acerca" className="hover:text-blue-400">Acerca de</a></li>
            </ul>
          </div>
  
          {/* Redes */}
          <div>
            <h3 className="font-semibold mb-2">Síguenos</h3>
            <ul className="flex space-x-4 text-lg">
              <li><a href="#" className="hover:text-blue-500"><i className="fab fa-facebook"></i></a></li>
              <li><a href="#" className="hover:text-blue-400"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#" className="hover:text-pink-500"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs py-4 border-t border-gray-700">
          © {new Date().getFullYear()} Byte and Words. Todos los derechos reservados.
        </div>
      </footer>
    );
  };
  
  export default Footer; 
    