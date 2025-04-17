import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa"; //Importar los iconos de react-icons

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <div className="flex space-x-4">
        <h1 className="font-bold text-3xl">Byte and Words</h1>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="buscar..."
          className="border-solid border-white-500 outline-1 rounded-l-md pl-1 p-1"
        />
        <button className="bg-blue-600 p-2.5 px-4 text-white cursor-pointer rounded-r-md">
          <FaSearch></FaSearch>
        </button>
      </div>
    </nav>
  );
}
