import articles from "../data/Articles";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
      {/* Intro */}
      <section className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center sm:text-left">
          Bienvenidos a <span className="text-blue-600">Byte and Words</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          En <strong>Byte and Words</strong>, exploramos el mundo de la tecnología, los gadgets y el análisis crítico. Desde reseñas de productos hasta artículos de opinión, nuestro objetivo es ofrecerte contenido relevante y actual. ¡Únete a nuestra comunidad y mantente informado sobre las últimas tendencias en tecnología!
        </p>
        <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed">
          Descubre nuestras selecciones de laptops, computadoras y gadgets, con contenido útil para usuarios, entusiastas y profesionales del mundo tech.
        </p>
      </section>

      {/* Últimos artículos */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left">
        Últimos artículos
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white shadow-md hover:shadow-lg rounded-xl overflow-hidden transition duration-300"
          >
            <Link to={`/article/${article.slug}`}>
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
            </Link>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-1">{article.title}</h3>
              <p className="text-xs text-gray-500 mb-2">{article.date}</p>
              <p className="text-gray-700 text-sm mb-4">{article.summary}</p>
              <Link
                to={`/article/${article.slug}`}
                className="text-blue-600 hover:underline font-medium"
              >
                Leer más →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
