import { useParams } from "react-router-dom";
import { articles } from "../data/Articles"; 
import DOMPurify from "dompurify"; //Importar DOMPurify para limpiar el HTML

export default function Article() {
  //Funcion para mostrar un articulo
  const { slug } = useParams(); //Obtener el slug del articulo
  const article = articles.find((a) => a.slug === slug); //Buscar el articulo por el slug

  if (!article) return <h1>Artículo no encontrado</h1>; //Si no se encuentra el articulo

  return (
    <div className="max-w-4xl mx-auto p-4">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-75 object-cover rounded mb-6"
      />
      <h1 className="text-3xl font-bold">{article.title}</h1>
      <div className="prose max-w-none mt-6" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.content)}}/>
    </div>
  );
};
