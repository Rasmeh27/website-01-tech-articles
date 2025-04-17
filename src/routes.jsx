import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Article from "./pages/Article";
import Nav from "./components/Nav";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer"; //Importar el componente Footer

export default function AppRoutes() {
  return (
    <BrowserRouter>
    <NavBar />
    <Nav /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:slug" element={<Article />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
