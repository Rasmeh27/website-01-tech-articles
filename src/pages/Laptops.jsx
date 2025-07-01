import React from "react";
import LaptopsCard from "../components/LaptopsCards";
import { Laptop, Star, TrendingUp, Award, Filter, Search } from "lucide-react";

const laptops = [
    {
        title: "Apple MacBook Pro M4 (16 pulgadas)",
        description: "La nueva MacBook Pro con chip M4 establece un nuevo estándar en rendimiento para profesionales creativos. Con una CPU de 12 núcleos, GPU de 32 núcleos y hasta 64GB de memoria unificada, maneja tareas intensivas como edición de video 8K y desarrollo de IA con facilidad. Su pantalla Liquid Retina XDR de 120Hz ofrece una reproducción de color extraordinaria, mientras que su autonomía de hasta 22 horas permite trabajar todo el día. Incluye múltiples puertos Thunderbolt 5, HDMI 2.1, y el regreso del lector de tarjetas SD.",
        image: "https://techcrunch.com/wp-content/uploads/2024/11/CMC_8144.jpg",
        link: "https://amzn.to/3Gfr9NJ"
    },
    {
        title: "Dell XPS 9440 14.5 (2025)",
        description: "La Dell XPS 15 continúa su legado de excelencia con procesadores Intel Core Ultra de 2ª generación y gráficos NVIDIA RTX 4070. Su pantalla OLED 4K táctil con HDR10+ proporciona colores vibrantes y negros profundos, mientras que su chasis de aluminio y fibra de carbono combina durabilidad con elegancia. Con 32GB de RAM DDR5 y SSD PCIe Gen 5, ofrece multitarea fluida y tiempos de carga mínimos. El sistema de audio cuádruple con tecnología Waves MaxxAudio completa una experiencia multimedia excepcional.",
        image: "https://www.dell.com/wp-uploads/2024/01/Diablo-Platinum-v2.jpg",
        link: "https://amzn.to/3Tlycr8"
    },
    {
        title: "ASUS ROG Zephyrus G16 (2025)",
        description: "Esta potente laptop gaming presenta procesador AMD Ryzen 9 9900HX, gráficos NVIDIA RTX 5080 y pantalla OLED de 16 con frecuencia de actualización de 240Hz. Su sistema de refrigeración ROG Intelligent Cooling con metal líquido mantiene temperaturas óptimas incluso en sesiones intensivas. Con 64GB de RAM DDR5 y SSD de 2TB, ofrece espacio y velocidad para bibliotecas de juegos extensas. La batería de 90Wh proporciona hasta 8 horas de uso normal, excepcional para una laptop gaming de este calibre.",
        image: "https://m.media-amazon.com/images/I/61PEBTiIq6L.jpg",
        link: "https://amzn.to/44t8mq4"
    },
    {
        title: "Lenovo ThinkPad X1 Carbon (Gen 13)",
        description: "La legendaria ThinkPad X1 Carbon llega a su 13ª generación con procesadores Intel Core Ultra 200H, hasta 32GB de RAM soldada LPDDR5x y SSD PCIe Gen 5 de 2TB. Su pantalla OLED de 14 con certificación Dolby Vision ofrece una experiencia visual inmersiva, mientras mantiene su característico chasis ultraligero de fibra de carbono (1.1kg). Con conectividad 5G opcional, Wi-Fi 7, una generosa selección de puertos y seguridad empresarial avanzada, es la opción definitiva para profesionales móviles.",
        image: "https://www.notebookcheck.net/fileadmin/_processed_/e/7/csm_thinkpad_X1Carbon_G13_teaser_fbb65abcbd.jpg",
        link: "https://amzn.to/45LZwGp"
    },
    {
        title: "Microsoft Surface Laptop Studio 2",
        description: "Impulsada por un procesador Intel Core i7 de 13.ª gen y gráficos RTX 4050/4060, la Surface Laptop Studio 2 es ideal para diseñadores, editores y creadores. Su pantalla táctil PixelSense de 14.4\" a 120 Hz y su sistema de modos (Laptop, Stage, Studio) brindan máxima flexibilidad. Hasta 64 GB de RAM y SSD de 2 TB la convierten en una bestia creativa con batería para todo el día.",
        image: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/FL1C-BB-03?qlt=90&wid=1253&hei=705&extendN=0.12,0.12,0.12,0.12&bgc=FFFFFFFF&fmt=jpg",
        link: "https://amzn.to/3G3qqza"
    },
    {
        title: "HP Spectre x360 16 (2025)",
        description: "Esta elegante laptop convertible destaca por su procesador Intel Core Ultra de 2ª generación, gráficos Intel Arc integrados y pantalla OLED 3K+ táctil de 16. Sus bisagras reforzadas permiten usarla en modo laptop, tienda o tableta con total estabilidad. Incluye cámara 5MP con encuadre automático, audio Bang & Olufsen con cancelación de ruido AI, y batería que ofrece hasta 18 horas de uso. Su chasis de aluminio reciclado con acabado premium y biseles ultrafinos completan un diseño impresionante.",
        image: "https://m.media-amazon.com/images/I/615tQPklUbL._AC_SL1500_.jpg",
        link: "https://amzn.to/44cgrAO"
    },
    {
        title: "Razer Blade 16 Gaming Laptop (2025)",
        description: "Rendimiento extremo para gaming y creación de contenido Equipada con una potente GPU NVIDIA GeForce RTX 4090 y procesador Intel Core i9-14900HX (14ª gen), esta laptop ofrece una experiencia de alto nivel en juegos AAA y tareas pesadas. Su pantalla OLED de 16″ QHD+ a 240Hz garantiza colores vivos y fluidez máxima. Viene con 32 GB de RAM, SSD de 2 TB, y teclado Chroma RGB, ideal para gamers profesionales.",
        image: "https://press.razer.com/wp-content/uploads/2025/01/Blade16_KV.jpg",
        link: "https://amzn.to/3TXl2k5"
    },
    {
        title: "MSI Katana 15 15.6",
        description: "Esta laptop gaming ofrece un equilibrio ideal entre potencia, velocidad y precio. Equipada con procesador Intel Core i7-13620H y GPU NVIDIA RTX 4070, permite jugar títulos modernos con alto rendimiento. Su pantalla QHD de 15.6\" a 165 Hz, 16 GB de RAM DDR5 y 1 TB SSD garantizan fluidez total. El sistema de refrigeración Cooler Boost 5 mantiene la temperatura bajo control incluso en sesiones largas.",
        image: "https://storage-asset.msi.com/global/picture/image/feature/nb/GF/Katana-15-A13V/cpu15-img.png",
        link: "https://amzn.to/3TOWdqu"
    },
    {
        title: "ASUS ROG Strix SCAR 18 (2025) Gaming Laptop, 18",
        description: "Esta bestia gamer viene con lo último en hardware: GPU NVIDIA RTX 5080 y procesador Intel Core Ultra 9 275HX, perfectos para juegos AAA, edición 4K y tareas pesadas. Su pantalla ROG Nebula HDR de 18″, 2.5K a 240Hz y 3 ms de respuesta, ofrece una experiencia visual brutal. Con 32 GB de RAM DDR5 y 2 TB SSD Gen 4, carga todo en segundos. Compatible con Wi-Fi 7 y Windows 11 Pro.",
        image: "https://dlcdnwebimgs.asus.com/gain/299AF6C6-7DD0-4322-9343-3E37828784F1",
        link: "https://amzn.to/4eF8asz"
    },
    {
        title: "Acer Swift Edge 16 (2025)",
        description: "Esta laptop ultradelgada combina eficiencia y portabilidad con excelente hardware. Equipada con un procesador AMD Ryzen 7 7735U de 8 núcleos, gráficos Radeon integrados y una impresionante pantalla WQUXGA de 16″ IPS, ofrece gran nitidez visual. Cuenta con 16 GB de RAM LPDDR5, 2 TB SSD, teclado retroiluminado, lector de huellas y conectividad de última generación: Wi-Fi 6E, USB 4.0, HDMI 2.1 y Windows 11 Pro.",
        image: "https://cdn.uc.assets.prezly.com/02d00fe3-b278-4885-ac5a-10e4c4dd66f7/Swift-Edge-16-SFE16-43-02.jpg",
        link: "https://amzn.to/400EYWR"
    },
];

const TopLaptops2025 = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-white">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
                <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-20">
                    <div className="text-center max-w-4xl mx-auto">
                        {/* Badge */}
                        <div className="flex items-center justify-center mb-6">
                            <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 rounded-full">
                                <Award className="h-5 w-5 text-blue-600" />
                                <span className="text-blue-700 font-semibold text-sm">Ranking 2025</span>
                            </div>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight">
                            Top 10 Mejores <br />
                            <span className="text-blue-600">Laptops 2025</span>
                        </h1>

                        {/* Description */}
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                            Descubre el ranking definitivo de las mejores laptops del 2025. Analizamos rendimiento, diseño, batería y precio para ayudarte a elegir la portátil perfecta este año.
                        </p>

                        {/* Stats */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                            <div className="flex items-center text-gray-500">
                                <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                                <span>Análisis detallado</span>
                            </div>
                            <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
                            <div className="flex items-center text-gray-500">
                                <Star className="h-5 w-5 mr-2 text-yellow-500" />
                                <span>Mejor relación calidad-precio</span>
                            </div>
                            <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
                            <div className="flex items-center text-gray-500">
                                <Laptop className="h-5 w-5 mr-2 text-blue-600" />
                                <span>Todas las categorías</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Laptops Grid */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {laptops.map((laptop, index) => (
                        <LaptopsCard key={index} laptop={laptop} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopLaptops2025;