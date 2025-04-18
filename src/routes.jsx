import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Article from "./pages/Article";
import Nav from "./components/Nav";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer"; //Importar el componente Footer
import TopGadgets2025 from "./pages/TopGadgets2025";

export default function AppRoutes() {
  return (
    <BrowserRouter>
    <NavBar />
    <Nav /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:slug" element={<Article />} />
        <Route path="/productos" element={<TopGadgets2025 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
