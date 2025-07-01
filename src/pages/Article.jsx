import { useParams } from "react-router-dom";
import { articles } from "../data/Articles"; 
import { Calendar, Tag, ArrowLeft, Clock, Share2, Laptop, Monitor, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export default function Article() {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="h-12 w-12 text-red-500" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Artículo no encontrado</h1>
          <p className="text-gray-600 mb-8 text-lg">El artículo que buscas no existe o ha sido movido.</p>
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Volver atrás
          </button>
        </div>
      </div>
    );
  }

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
      default: return <Tag className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category) => {
    switch(category) {
      case 'Laptops': return 'bg-purple-600 text-white';
      case 'Computadoras': return 'bg-green-600 text-white';
      default: return 'bg-blue-600 text-white';
    }
  };

  const estimatedReadTime = Math.ceil(
    article.content.reduce((acc, item) => acc + item.text.split(' ').length, 0) / 200
  );

  const renderContent = (contentArray) => {
    return contentArray.map((item, index) => {
      if (item.type === 'heading') {
        return (
          <div key={index} className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-blue-200 flex items-center">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                {item.text.charAt(0)}
              </span>
              {item.text}
            </h2>
          </div>
        );
      } else if (item.type === 'paragraph') {
        return (
          <div key={index} className="mb-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              {item.text}
            </p>
          </div>
        );
      }
      return null;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header con navegación */}
      <div className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a artículos
          </button>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8 border border-gray-100">
          {/* Imagen principal */}
          <div className="relative h-96 md:h-[500px] overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            
            {/* Categoría flotante */}
            <div className="absolute top-6 left-6">
              <span className={`inline-flex items-center px-4 py-2 ${getCategoryColor(article.category)} text-sm font-semibold rounded-full shadow-lg backdrop-blur-sm`}>
                {getCategoryIcon(article.category)}
                <span className="ml-2">{article.category}</span>
              </span>
            </div>

            {/* Título superpuesto en móvil */}
            <div className="absolute bottom-6 left-6 right-6 md:hidden">
              <h1 className="text-2xl font-bold text-white leading-tight">
                {article.title}
              </h1>
            </div>
          </div>

          {/* Contenido del header */}
          <div className="p-6 md:p-10">
            <h1 className="hidden md:block text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {article.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {article.summary}
            </p>

            {/* Metadatos */}
            <div className="flex flex-wrap items-center gap-6 text-gray-500 border-t border-gray-200 pt-6">
              <div className="flex items-center bg-gray-50 px-4 py-2 rounded-lg">
                <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                <span className="font-medium">{formatDate(article.date)}</span>
              </div>
              
              <div className="flex items-center bg-gray-50 px-4 py-2 rounded-lg">
                <Clock className="h-5 w-5 mr-2 text-green-600" />
                <span className="font-medium">{estimatedReadTime} min de lectura</span>
              </div>

              <button className="flex items-center text-gray-500 hover:text-blue-600 transition-colors ml-auto bg-gray-50 hover:bg-blue-50 px-4 py-2 rounded-lg">
                <Share2 className="h-5 w-5 mr-2" />
                <span className="font-medium">Compartir</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Contenido del artículo */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <div className="p-6 md:p-10">
                <div className="max-w-none">
                  {renderContent(article.content)}
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-3xl shadow-2xl p-8 mt-8 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">¿Te gustó este artículo?</h3>
                <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
                  Descubre más contenido sobre tecnología y mantente actualizado con las últimas tendencias.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/"
                    className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    Ver más artículos
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Tabla de contenidos */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                  Contenido
                </h3>
                <ul className="space-y-2">
                  {article.content
                    .filter(item => item.type === 'heading')
                    .map((heading, index) => (
                      <li key={index}>
                        <a 
                          href={`#heading-${index}`}
                          className="text-sm text-gray-600 hover:text-blue-600 transition-colors block py-1 hover:bg-blue-50 px-2 rounded"
                        >
                          {heading.text}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>

              {/* Artículos relacionados */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Artículos relacionados</h3>
                <div className="space-y-4">
                  {articles
                    .filter(a => a.id !== article.id && a.category === article.category)
                    .slice(0, 2)
                    .map(relatedArticle => (
                      <Link 
                        key={relatedArticle.id} 
                        to={`/article/${relatedArticle.slug}`}
                        className="group cursor-pointer block"
                      >
                        <div className="relative h-24 overflow-hidden rounded-lg mb-3">
                          <img 
                            src={relatedArticle.image} 
                            alt={relatedArticle.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {relatedArticle.title}
                        </h4>
                        <div className="flex items-center text-xs text-gray-500">
                          <Calendar className="h-3 w-3 mr-1" />
                          {formatDate(relatedArticle.date)}
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}