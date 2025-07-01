import { useState, useRef, useEffect } from "react";
import { Grid3X3, ChevronDown, Laptop, Monitor, Package } from "lucide-react";
import { useNavigate } from "react-router-dom";

const categories = [
  { 
    name: "Laptops", 
    path: "/categorias/laptops",
    icon: Laptop,
    description: "Portátiles y ultrabooks",
    color: "text-purple-600"
  },
  { 
    name: "Computadoras", 
    path: "/categorias/computers",
    icon: Monitor,
    description: "PCs de escritorio",
    color: "text-green-600"
  },
  { 
    name: "Gadgets", 
    path: "/categorias/productos",
    icon: Package,
    description: "Accesorios y más",
    color: "text-blue-600"
  },
];

const CategoryDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelectCategory = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
          isOpen
            ? "bg-blue-50 text-blue-700 shadow-sm"
            : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
        }`}
        onClick={toggleDropdown}
      >
        <Grid3X3 className="h-4 w-4" />
        <span>Categorías</span>
        <ChevronDown 
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`} 
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-gray-200 rounded-xl shadow-xl z-50 overflow-hidden">
          {/* Header */}
          <div className="px-4 py-3 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-100">
            <h3 className="text-sm font-semibold text-gray-900">Explorar por categoría</h3>
            <p className="text-xs text-gray-500 mt-1">Encuentra el contenido que buscas</p>
          </div>

          {/* Categories */}
          <div className="py-2">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <button
                  key={index}
                  className="w-full flex items-center px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-150 group"
                  onClick={() => handleSelectCategory(category.path)}
                >
                  <div className={`flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 group-hover:bg-white group-hover:shadow-md transition-all duration-200 ${category.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="ml-3 flex-1">
                    <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {category.description}
                    </div>
                  </div>
                  <ChevronDown className="h-4 w-4 text-gray-400 rotate-[-90deg] group-hover:text-blue-500 transition-colors" />
                </button>
              );
            })}
          </div>

          {/* Footer */}
          <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
            <p className="text-xs text-gray-500 text-center">
              ¿No encuentras lo que buscas? <span className="text-blue-600 hover:text-blue-700 cursor-pointer font-medium">Contáctanos</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;