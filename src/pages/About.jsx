// src/pages/AcercaDe.jsx

const AcercaDe = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-3">Acerca de Byte and Words</h1>
        <p className="text-lg text-gray-600">
          Detrás del contenido, hay pasión por la tecnología y el deseo de compartir conocimiento.
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-8 space-y-6">
        <p>
          <strong>Byte and Words</strong> nace con la idea de crear un espacio donde los amantes de la tecnología
          puedan encontrar información clara, actualizada y confiable sobre los últimos productos, tendencias y gadgets que marcan el ritmo del mundo digital.
        </p>

        <p>
          Nuestro objetivo es ayudarte a tomar mejores decisiones tecnológicas, ya sea que estés buscando la mejor laptop
          para trabajar, los accesorios ideales para mejorar tu setup, o simplemente descubriendo nuevos dispositivos que
          puedan hacer tu vida más fácil.
        </p>

        <p>
          Publicamos comparativas, análisis y guías cuidadosamente elaboradas con un enfoque honesto y práctico.
          Aquí no encontrarás artículos genéricos: cada publicación está pensada para aportar valor real.
        </p>

        <p>
          Si te apasiona la tecnología tanto como a nosotros, te invitamos a ser parte de esta comunidad en crecimiento.
        </p>

        <p className="text-center italic text-sm text-gray-500 mt-6">
          “Compartimos conocimiento, porque creemos que la tecnología debe ser para todos.”
        </p>
      </div>
    </div>
  );
};

export default AcercaDe;
