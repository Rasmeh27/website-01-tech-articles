import React from "react";
import { 
  Linkedin, 
  Instagram, 
  Github, 
  Globe, 
  Mail, 
  MapPin, 
  ArrowUp,
  Laptop,
  BookOpen,
  Star,
  Zap
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border border-blue-500 rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-purple-500 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-green-500 rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-8 h-8 border border-yellow-500 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Byte and Words
                </h2>
                <p className="text-blue-400 text-sm font-medium">TECH & INNOVATION</p>
              </div>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
              Exploramos el mundo de la tecnología con análisis profundos, reseñas honestas y las últimas tendencias en gadgets y computación.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                <div className="flex items-center justify-center mb-1">
                  <BookOpen className="h-5 w-5 text-blue-400" />
                </div>
                <div className="text-xl font-bold text-white">50+</div>
                <div className="text-xs text-gray-400">Artículos</div>
              </div>
              <div className="text-center p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                <div className="flex items-center justify-center mb-1">
                  <Laptop className="h-5 w-5 text-green-400" />
                </div>
                <div className="text-xl font-bold text-white">100+</div>
                <div className="text-xs text-gray-400">Reviews</div>
              </div>
              <div className="text-center p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                <div className="flex items-center justify-center mb-1">
                  <Star className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="text-xl font-bold text-white">5.0</div>
                <div className="text-xs text-gray-400">Rating</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <Zap className="h-5 w-5 mr-2 text-blue-400" />
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Inicio", href: "/" },
                { name: "Laptops", href: "/laptops" },
                { name: "Computadoras", href: "/computers" },
                { name: "Productos", href: "/productos" },
                { name: "Política de Privacidad", href: "/politicas" },
                { name: "Acerca de", href: "/about" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <Mail className="h-5 w-5 mr-2 text-green-400" />
              Contacto & Redes
            </h3>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-3 text-red-400 flex-shrink-0" />
                <span className="text-sm">República Dominicana</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-3 text-blue-400 flex-shrink-0" />
                <span className="text-sm">luisherasme4@gmail.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-gray-400 mb-4">Síguenos en:</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { 
                    icon: Linkedin, 
                    href: "https://www.linkedin.com/in/luis-herasme-9a60bb318/", 
                    color: "hover:bg-blue-600",
                    label: "LinkedIn"
                  },
                  { 
                    icon: Github, 
                    href: "https://github.com/Rasmeh27", 
                    color: "hover:bg-gray-600",
                    label: "GitHub"
                  },
                  { 
                    icon: Instagram, 
                    href: "https://www.instagram.com/luishr.dev/", 
                    color: "hover:bg-pink-600",
                    label: "Instagram"
                  },
                  { 
                    icon: Globe, 
                    href: "https://portfolio-luishr.vercel.app", 
                    color: "hover:bg-green-600",
                    label: "Website"
                  }
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative p-3 bg-gray-800 rounded-xl border border-gray-700 ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors duration-200" />
                      
                      {/* Tooltip */}
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                        {social.label}
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Byte and Words. Todos los derechos reservados.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Hecho por Luis Herasme
              </p>
            </div>
            
            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="group flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-700 transition-all duration-200 transform hover:scale-105"
            >
              <span className="text-gray-300 text-sm">Volver arriba</span>
              <ArrowUp className="h-4 w-4 text-gray-300 group-hover:text-white transition-colors duration-200" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;