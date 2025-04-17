import React from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaHome,
  FaThLarge,
  FaLaptop,
  FaDesktop,
  FaTabletAlt 
} from "react-icons/fa";
import CategoryDropdown from "./CategoryDropDown";

export default function Nav() {
  return (
    <nav className="p-4 bg-gray-700 text-white">
      <ul className="flex space-x-20 items-center">
      <li>
          <Link to="/" className="flex items-center space-x-2">
            <CategoryDropdown />
          </Link>
        </li>
        <li>
          <Link to="/" className="flex items-center space-x-2">
            <span>Inicio</span>
          </Link>
        </li>
        <li>
          <Link to="/article/mejor-laptop-trabajo-2025" className="flex items-center space-x-2">  
           <span>Productos</span> 
          </Link>
        </li>
        <li>
          <Link to="/" className="flex items-center space-x-2">
            <span>Computadoras</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="flex items-center space-x-2">
            <span>Laptops</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
