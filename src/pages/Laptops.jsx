import React from "react";
import LaptopsCard from "../components/LaptopsCards";

const laptops = [
    {
        title: "Apple MacBook Pro M4 (16 pulgadas)",
        description: "La nueva MacBook Pro con chip M4 establece un nuevo estándar en rendimiento para profesionales creativos. Con una CPU de 12 núcleos, GPU de 32 núcleos y hasta 64GB de memoria unificada, maneja tareas intensivas como edición de video 8K y desarrollo de IA con facilidad. Su pantalla Liquid Retina XDR de 120Hz ofrece una reproducción de color extraordinaria, mientras que su autonomía de hasta 22 horas permite trabajar todo el día. Incluye múltiples puertos Thunderbolt 5, HDMI 2.1, y el regreso del lector de tarjetas SD.",
        image: "https://techcrunch.com/wp-content/uploads/2024/11/CMC_8144.jpg",
        link: ""
    },
    {
        title: "Dell XPS 15 (2025)",
        description: "La Dell XPS 15 continúa su legado de excelencia con procesadores Intel Core Ultra de 2ª generación y gráficos NVIDIA RTX 4070. Su pantalla OLED 4K táctil con HDR10+ proporciona colores vibrantes y negros profundos, mientras que su chasis de aluminio y fibra de carbono combina durabilidad con elegancia. Con 32GB de RAM DDR5 y SSD PCIe Gen 5, ofrece multitarea fluida y tiempos de carga mínimos. El sistema de audio cuádruple con tecnología Waves MaxxAudio completa una experiencia multimedia excepcional.",
        image: "https://www.dell.com/wp-uploads/2024/01/Diablo-Platinum-v2.jpg",
        link: ""
    },
    {
        title: "ASUS ROG Zephyrus G16 (2025)",
        description: "Esta potente laptop gaming presenta procesador AMD Ryzen 9 9900HX, gráficos NVIDIA RTX 5080 y pantalla OLED de 16 con frecuencia de actualización de 240Hz. Su sistema de refrigeración ROG Intelligent Cooling con metal líquido mantiene temperaturas óptimas incluso en sesiones intensivas. Con 64GB de RAM DDR5 y SSD de 2TB, ofrece espacio y velocidad para bibliotecas de juegos extensas. La batería de 90Wh proporciona hasta 8 horas de uso normal, excepcional para una laptop gaming de este calibre.",
        image: "https://m.media-amazon.com/images/I/61PEBTiIq6L.jpg",
        link: ""
    },
    {
        title: "Lenovo ThinkPad X1 Carbon (Gen 13)",
        description: "La legendaria ThinkPad X1 Carbon llega a su 13ª generación con procesadores Intel Core Ultra 200H, hasta 32GB de RAM soldada LPDDR5x y SSD PCIe Gen 5 de 2TB. Su pantalla OLED de 14 con certificación Dolby Vision ofrece una experiencia visual inmersiva, mientras mantiene su característico chasis ultraligero de fibra de carbono (1.1kg). Con conectividad 5G opcional, Wi-Fi 7, una generosa selección de puertos y seguridad empresarial avanzada, es la opción definitiva para profesionales móviles.",
        image: "https://www.notebookcheck.net/fileadmin/_processed_/e/7/csm_thinkpad_X1Carbon_G13_teaser_fbb65abcbd.jpg",
        link: ""
    },
    {
        title: "Microsoft Surface Laptop Studio 3",
        description: "Este innovador dispositivo 2-en-1 combina potencia y flexibilidad con su pantalla táctil de 14.4 que puede adoptar múltiples posiciones gracias a su bisagra dinámica rediseñada. Equipado con procesadores Intel Core Ultra, gráficos NVIDIA RTX 4060 y hasta 64GB de RAM, destaca en tareas creativas y productividad. Su nuevo Surface Pen Pro ofrece latencia casi imperceptible de 3ms y 8,192 niveles de presión. La integración mejorada con Windows 11 y herramientas de IA nativas maximiza la productividad.",
        image: "https://cdn.mos.cms.futurecdn.net/yWT8Tz8norZN2RBMLxsGxW.jpg",
        link: ""
    },
    {
        title: "HP Spectre x360 16 (2025)",
        description: "Esta elegante laptop convertible destaca por su procesador Intel Core Ultra de 2ª generación, gráficos Intel Arc integrados y pantalla OLED 3K+ táctil de 16. Sus bisagras reforzadas permiten usarla en modo laptop, tienda o tableta con total estabilidad. Incluye cámara 5MP con encuadre automático, audio Bang & Olufsen con cancelación de ruido AI, y batería que ofrece hasta 18 horas de uso. Su chasis de aluminio reciclado con acabado premium y biseles ultrafinos completan un diseño impresionante.",
        image: "https://www.hp.com/ca-en/shop/html/local/campaigns/frozone/images/frozone_ksp4_img2.png",
        link: ""
    },
    {
        title: "Razer Blade 16 (2025)",
        description: "La máxima laptop gaming combina potencia bruta con diseño refinado. Su procesador Intel Core i9-14900HX, gráficos NVIDIA RTX 5080, y pantalla Mini-LED dual-mode (4K/120Hz o FHD/480Hz) la convierten en una bestia para juegos y creación de contenido. Su sistema de refrigeración vapor chamber personalizado mantiene el rendimiento óptimo, mientras que la iluminación Chroma RGB por tecla añade personalidad. A pesar de su potencia, mantiene un perfil sorprendentemente delgado para su categoría.",
        image: "https://press.razer.com/wp-content/uploads/2025/01/Blade16_KV-825x421.jpg",
        link: ""
    },
    {
        title: "Framework Laptop 16 (2025)",
        description: "Framework redefine la reparabilidad y actualización con su nueva laptop de 16 pulgadas. Permite sustituir CPU, GPU, RAM, almacenamiento y puertos de E/S con módulos intercambiables, extendiendo drásticamente la vida útil del dispositivo. Disponible con procesadores AMD Ryzen o Intel Core, ofrece opciones gráficas desde integradas hasta módulos RTX dedicados. Su pantalla 2,5K de 165Hz, teclado mecánico opcional y batería fácilmente reemplazable complementan una experiencia de usuario única centrada en la sostenibilidad.",
        image: "https://assets-prd.ignimgs.com/2023/03/22/framework-laptop-16-hero01-1679523688336.jpg",
        link: ""
    },
    {
        title: "Samsung Galaxy Book4 Ultra",
        description: "Esta premium ultrabook destaca por su procesador Snapdragon Elite, hasta 32GB de RAM LPDDR5X y gráficos integrados Qualcomm Adreno Elite. Su pantalla AMOLED Dynamic 2X de 16 con HDR10+ proporciona colores vibrantes, mientras que su batería de 76Wh ofrece hasta 20 horas de reproducción de video. La integración perfecta con dispositivos Samsung mediante Galaxy Ecosystem permite compartir pantalla, archivos y notificaciones sin esfuerzo. Su chasis de aluminio de solo 13mm de grosor y 1.5kg lo hacen extremadamente portátil. ",
        image: "https://cdn.mos.cms.futurecdn.net/W6aEXYNuAJpExjYbpRCU4V.jpg",
        link: ""
    },
    {
        title: "Acer Swift Edge 16 (2025)",
        description: "Esta ultradelgada laptop sorprende por su relación calidad-precio. Con procesador AMD Ryzen 9 9950HS, gráficos Radeon integrados y pantalla OLED 4K de 16, ofrece prestaciones premium a precio competitivo. Su chasis de aleación de magnesio-aluminio mantiene el peso en solo 1.2kg mientras proporciona durabilidad. Incluye 32GB de RAM LPDDR5, SSD PCIe Gen 4 de 1TB, Wi-Fi 7 y batería de 54Wh con carga rápida. Su teclado retroiluminado con recorrido de 1.3mm y amplio touchpad completan una experiencia sobresaliente para productividad móvil. ​",
        image: "https://cdn.uc.assets.prezly.com/02d00fe3-b278-4885-ac5a-10e4c4dd66f7/Swift-Edge-16-SFE16-43-02.jpg",
        link: ""
    },
];

const TopLaptops2025 = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Top 10 mejores Laptops de este 2025</h1>
            <p className="text-gray-700 mb-8">
            Descubre el ranking definitivo de las mejores laptops del 2025. Analizamos rendimiento, diseño, batería y precio para ayudarte a elegir la portátil perfecta este año.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {laptops.map((laptop, index) => (
                    <LaptopsCard key={index} laptop={laptop} />
                ))}
            </div>
        </div>
    );
};

export default TopLaptops2025;