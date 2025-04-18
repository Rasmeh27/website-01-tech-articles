// src/pages/PoliticaPrivacidad.jsx
import React from 'react';

const PoliticaPrivacidad = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-6 md:px-10 text-gray-800">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Política de Privacidad
          </h1>
          <p className="text-gray-600 text-lg">
            Última actualización: Abril 2025
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6 leading-relaxed text-justify">
          <p>
            En <strong>Byte and Words</strong> nos tomamos la privacidad de nuestros usuarios con seriedad. Actualmente no utilizamos cookies ni recopilamos información personal de forma directa.
          </p>

          <p>
            No obstante, algunas páginas de este sitio contienen enlaces a plataformas de terceros, como Amazon, que pueden emplear cookies u otras tecnologías para rastrear la actividad del usuario con fines de análisis, personalización o monetización.
          </p>

          <p>
            Al hacer clic en estos enlaces de afiliados, el usuario podría ser redirigido a sitios externos, donde aplican sus propias políticas de privacidad. Te recomendamos leer detenidamente los términos y condiciones de dichos sitios.
          </p>

          <p>
            <strong>Byte and Words</strong> no tiene control sobre las prácticas de recopilación de datos de terceros y no se hace responsable por el uso que estos hagan de tu información.
          </p>

          <p>
            Esta política puede actualizarse ocasionalmente para reflejar cambios legales o de funcionamiento del sitio. Te invitamos a revisarla periódicamente.
          </p>

          <p>
            Si tienes preguntas o inquietudes relacionadas con esta política, puedes contactarnos a través del formulario disponible en la sección de contacto de nuestro sitio web.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PoliticaPrivacidad;
