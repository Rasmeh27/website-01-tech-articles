import React from "react";
import { Link } from "react-router-dom";
import CategoryDropdown from "./CategoryDropDown";

export default function Nav() {
  return (
    <nav className="bg-gray-700 text-white px-4 py-4">
      <ul className="flex flex-col md:flex-row md:items-center md:space-x-10 space-y-3 md:space-y-0">
        <li>
          <CategoryDropdown />
        </li>
        <li>
          <Link to="/" className="flex items-center space-x-2 hover:text-gray-300">
            <span>Inicio</span>
          </Link>
        </li>
        <li>
          <Link to="/productos" className="flex items-center space-x-2 hover:text-gray-300">
            <span>Productos</span>
          </Link>
        </li>
        <li>
          <Link to="/computers" className="flex items-center space-x-2 hover:text-gray-300">
            <span>Computadoras</span>
          </Link>
        </li>
        <li>
          <Link to="/laptops" className="flex items-center space-x-2 hover:text-gray-300">
            <span>Laptops</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
