//JSON para guardar el contenido de los articulos
export const articles = [
  {
    id: 1,
    title: "Las 7 Mejores Laptops Gaming para 2025",
    slug: "mejores-laptops-gaming-2025",
    image: "/src/assets/laptop.jpg", // asegúrate de tener la imagen en public/assets o usar una URL
    summary:
      "Descubre las mejores opciones de laptops gaming para este 2025, con alto rendimiento y buen precio.",
    date: "2025-04-08",
    category: "Laptops",
    content: `
          <h2>1. ASUS ROG Zephyrus G16</h2>
          <p>Combina un diseño delgado con componentes potentes: procesadores Intel Core Ultra, GPUs NVIDIA RTX serie 40, pantalla OLED de 240Hz y sistema de refrigeración avanzado. Ofrece el equilibrio perfecto entre portabilidad y rendimiento.</p>
      
          <h2>2. Dell XPS 13</h2>
          <p>Una de las mejores ultrabooks Windows con pantalla casi sin bordes, excelente teclado y construcción de alta calidad. Combina potencia con un diseño premium y compacto.</p>

          <h2>3. Acer Swift 5</h2>
          <p>Ultraligera pero potente, con procesadores Intel de última generación. Perfecta para estudiantes que se mueven constantemente entre clases.</p>

          <h2>4. Microsoft Surface Laptop 6</h2>
          <p>Excelente dispositivo 2-en-1 con pantalla táctil de alta resolución. Su versatilidad permite usarla como laptop tradicional o tablet para tomar notas.</p>

           <h2>5. Lenovo ThinkPad E16</h2>
            <p>Conocida por su durabilidad y teclado excepcional. Una opción robusta que aguantará años de uso universitario intensivo.</p>

            <h2>6. ASUS Zenbook 14</h2>
            <p> Delgada, ligera y con excelente autonomía. Su pantalla OLED ofrece colores vibrantes para trabajos creativos o consumo de contenido.</p>

            <h2>7. HP Envy x360</h2>
            <p>Una opción versátil y asequible con bisagra convertible. Buen rendimiento para tareas académicas generales y algunas más exigentes.</p>
        `,
  },
  {
    id: 2,
    title: "Las 7 Mejores computadoras para el trabajo en 2025",
    slug: "mejores-computadoras-trabajo-2025",
    image: "/src/assets/pc_work.jpg", // asegúrate de tener la imagen en public/assets o usar una URL
    summary:
      "¿Buscas una computadora para trabajar en casa o la oficina? Mira estas 7 opciones con gran balance entre precio y potencia.",
    date: "2025-04-06",
    category: "Computadoras",
    content: `
          <h2>1. Apple MacBook Air M3 (2024)</h2>
          <p>Ultra silenciosa, excelente bateria (18h), pantalla Retina espectacular. Ideal para usuarios que trabajan con documentos, navegación, videollamadas y diseño gráfico ligero.</p>

          <h2>2. DELL XPS 13 (2024)</h2>
          <p>Diseño premiun, muy liviana, pantalla infinityEdge 4k, gran teclado. Ideal para profesionales, editores de contenido y desarrolladores.</p>

          <h2>3. Apple Mac Mini M2 (2023)</h2>
          <p>Potente y compacto, ideal para escritorio fijos con periéricos propios. Iddea para oficinas con setup personalizado, programadores y editores.</p>

          <h2>4. Lenovo Thinkpad X1 Carbon Gen 11 (2024)</h2>
          <p>Teclado legendario, durabilidad militar, rendimiento pro. Ideal para profesionales, ejecutivos, quienes necesitan movilidad y robustez.</p>

          <h2>5. Microsoft Surface Laptop 5 (2023)</h2>
          <p>Pantalla táctil PixelSense, diseño elegante, gran bateria. Ideal para multitarea, videollamadas, navegación y Office.</p>

          <h2>6. ASUS Zenbook 14 OLED(2024)</h2>
          <p>Pantalla OLED, buena GPU integrada y liviana. Ideal para diseñadores ligeros, estudiantes avanzados, trabajadores remotos.</p>

          <h2>7. HP Envy Desktop (2024)</h2>
          <p>Torre escritorio potente, gran refrigeacion, expansión fácil. Ideal para el trabajo intenso desde escritorio fijo (edición, multitarea).</p>
    `
  },
  {
    id: 3,
    title: "Las 7 Mejores computadoras para Estudiar en 2025",
    slug: "mejores-computadoras-estudiar-2025",
    image: "/src/assets/student.jpg",
    summary:
      "¿Buscas una computadora para estudiar? Mira estas 7 opciones con gran balance entre precio y potencia.",
    date: "2025-04-06",
    category: "Computadoras",
    content: `
          <p>Si estás en la universidad o el colegio y necesitas una computadora portátil confiable, este artículo es para ti.</p>
      
          <h2>1. MacBook Air M3</h2>
          <p>Excelente balance entre potencia y portabilidad. Ofrece gran duración de batería, rendimiento sólido para tareas académicas y un diseño delgado. Ideal para estudiantes que necesitan movilidad sin sacrificar rendimiento.</p>
      
          <h2>2. Dell XPS 13</h2>
          <p>Una de las mejores ultrabooks Windows con pantalla casi sin bordes, excelente teclado y construcción de alta calidad. Combina potencia con un diseño premium y compacto.</p>

          <h2>3. Acer Swift 5</h2>
          <p>Ultraligera pero potente, con procesadores Intel de última generación. Perfecta para estudiantes que se mueven constantemente entre clases.</p>

          <h2>4. Microsoft Surface Laptop 6</h2>
          <p>Excelente dispositivo 2-en-1 con pantalla táctil de alta resolución. Su versatilidad permite usarla como laptop tradicional o tablet para tomar notas.</p>

           <h2>5. Lenovo ThinkPad E16</h2>
            <p>Conocida por su durabilidad y teclado excepcional. Una opción robusta que aguantará años de uso universitario intensivo.</p>

            <h2>6. ASUS Zenbook 14</h2>
            <p> Delgada, ligera y con excelente autonomía. Su pantalla OLED ofrece colores vibrantes para trabajos creativos o consumo de contenido.</p>

            <h2>7. HP Envy x360</h2>
            <p>Una opción versátil y asequible con bisagra convertible. Buen rendimiento para tareas académicas generales y algunas más exigentes.</p>
        `,
  },
];

export default articles;
