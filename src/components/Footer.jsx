
import {
  FaLinkedin,
  FaInstagram,
  FaGithub 
} from "react-icons/fa";


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
              <li><a href="/politicas" className="hover:text-blue-400">Política de privacidad</a></li>
              <li><a href="/About" className="hover:text-blue-400">Acerca de</a></li>
            </ul>
          </div>
  
          {/* Redes */}
          <div>
            <h3 className="font-semibold mb-2">Síguenos - Contacto</h3>
            <ul className="flex space-x-4 text-lg">
              <li><a href="https://www.linkedin.com/in/luis-herasme-9a60bb318/" className="hover:text-blue-500"><i><FaLinkedin></FaLinkedin></i></a></li>
              <li><a href="https://github.com/Rasmeh27" className="hover:text-blue-400"><i><FaGithub ></FaGithub ></i></a></li>
              <li><a href="https://www.instagram.com/luishr.dev/" className="hover:text-pink-500"><i><FaInstagram  ></FaInstagram></i></a></li>
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
    