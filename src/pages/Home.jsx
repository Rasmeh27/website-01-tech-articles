import articles from "../data/Articles";
import { Link } from "react-router-dom"; //Importar el componente Link de react-router-dom

export default function Home() {
  //Definir el componente Home
  //Definir la lista de articulos
  return (
    <div className="max-w-6xl mx-auto p-4">
      <section className="mb-10">
        <h1 className="text-4xl font-bold mb-4">Bienvenidos Byte and Words</h1>
        <p className="text-lg text-gray-700">
          En <strong>Byte and Words</strong>, exploramos el mundo de la tecnología, los gadgets y el análisis crítico. Desde reseñas de productos hasta artículos de opinión, nuestro objetivo es ofrecerte contenido relevante y actual. ¡Únete a nuestra comunidad y mantente informado sobre las últimas tendencias en tecnología!
        </p>
        <p className="text-md text-gray-600 mt-4">
          Descubre nuestras selecciones de laptops, computadoras y gadgets, con contenido útil para usuarios, entusiastas y profesionales del mundo tech.
        </p>
      </section>

    <h1 className="text-3xl font-bold mb-6">Últimos artículos</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <div key={article.id} className="bg-white shadow rounded overflow-hidden">
          <Link to={`/article/${article.slug}`}>
          <img src={article.image} alt={article.title} className="w-full h-48 object-cover cursor-pointer" />
          </Link>
          <div className="p-4">
            <h2 className="text-xl font-semibold">{article.title}</h2>
            <p className="text-sm text-gray-500 mb-2">{article.date}</p>
            <p className="text-gray-700 text-sm mb-4">{article.summary}</p>
            <Link to={`/article/${article.slug}`} className="text-blue-600 hover:underline font-medium">
              Leer más →
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}
