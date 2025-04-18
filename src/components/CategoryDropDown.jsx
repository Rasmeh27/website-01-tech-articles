import React, { useState } from "react";
import { FaThLarge } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

  const categories = [
    { name: "Laptops", path: "/categorias/laptops" },
    { name: "Computadoras", path: "/categorias/computers" },
    { name: "Gadgets", path: "/categorias/productos" },
  ];
  
  const CategoryDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate(); // Inicializa el hook
  
    const toggleDropdown = () => setIsOpen(!isOpen);
  
    const handleSelectCategory = (path) => {
      setIsOpen(false);
      navigate(path); // Redirige a la ruta
    };
  
    return (
      <div className="relative">
        <button
          className="flex items-center space-x-2 px-4 py-2 text-white bg-gray-800 hover:bg-gray-700 hover:cursor-pointer rounded"
          onClick={toggleDropdown}
        >
          <FaThLarge />
          <span>Categoría</span>
          <svg
            className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
  
        {isOpen && (
          <div className="absolute mt-2 w-40 bg-white border rounded shadow-lg z-10">
            {categories.map((category, index) => (
              <button
                key={index}
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelectCategory(category.path)}
              >
                {category.name}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default CategoryDropdown;