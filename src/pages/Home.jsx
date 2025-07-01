import { articles } from "../data/Articles";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, Laptop, Monitor, BookOpen, Star, TrendingUp } from "lucide-react";

export default function Home() {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Laptops': return <Laptop className="h-4 w-4" />;
      case 'Computadoras': return <Monitor className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category) => {
    switch(category) {
      case 'Laptops': return 'bg-purple-600 text-white';
      case 'Computadoras': return 'bg-green-600 text-white';
      default: return 'bg-blue-600 text-white';
    }
  };

  const estimatedReadTime = (content) => {
    const wordCount = content.reduce((acc, item) => acc + item.text.split(' ').length, 0);
    return Math.ceil(wordCount / 200);
  };

  const featuredArticle = articles[0];
  const otherArticles = articles.slice(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full">
                <Star className="h-5 w-5 text-blue-600" />
                <span className="text-blue-700 font-medium text-sm">Contenido de calidad</span>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight">
              Bienvenidos a <br />
              <span className="text-blue-600">Byte and Words</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Exploramos el mundo de la tecnología, los gadgets y el análisis crítico. Desde reseñas de productos hasta artículos de opinión, nuestro objetivo es ofrecerte contenido relevante y actual.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <div className="flex items-center text-gray-500">
                <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                <span>Últimas tendencias en tecnología</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
              <div className="flex items-center text-gray-500">
                <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                <span>Análisis profesionales</span>
              </div>
            </div>

            <p className="text-gray-500 max-w-2xl mx-auto">
              Descubre nuestras selecciones de laptops, computadoras y gadgets, con contenido útil para usuarios, entusiastas y profesionales del mundo tech.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Article */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Artículo Destacado</h2>
          <div className="ml-4 flex items-center bg-yellow-100 px-3 py-1 rounded-full">
            <Star className="h-4 w-4 text-yellow-600 mr-1" />
            <span className="text-yellow-700 text-sm font-medium">Destacado</span>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-all duration-500 group">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative h-80 lg:h-auto overflow-hidden">
              <Link to={`/article/${featuredArticle.slug}`}>
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </Link>
              <div className="absolute top-6 left-6">
                <span className={`inline-flex items-center px-4 py-2 ${getCategoryColor(featuredArticle.category)} text-sm font-semibold rounded-full shadow-lg`}>
                  {getCategoryIcon(featuredArticle.category)}
                  <span className="ml-2">{featuredArticle.category}</span>
                </span>
              </div>
            </div>
            
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                  {formatDate(featuredArticle.date)}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-green-600" />
                  {estimatedReadTime(featuredArticle.content)} min de lectura
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {featuredArticle.title}
              </h3>
              
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {featuredArticle.summary}
              </p>
              
              <Link
                to={`/article/${featuredArticle.slug}`}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl group/btn"
              >
                <span>Leer artículo completo</span>
                <ArrowRight className="h-5 w-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Other Articles */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Más Artículos
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {otherArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <Link to={`/article/${article.slug}`}>
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center px-3 py-1 ${getCategoryColor(article.category)} text-xs font-semibold rounded-full shadow-lg`}>
                    {getCategoryIcon(article.category)}
                    <span className="ml-1">{article.category}</span>
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3 text-xs text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {formatDate(article.date)}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {estimatedReadTime(article.content)} min
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                  {article.summary}
                </p>
                
                <Link
                  to={`/article/${article.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors group/link"
                >
                  <span>Leer más</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}