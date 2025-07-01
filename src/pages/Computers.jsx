import React from "react";
import ComputersCard from "../components/ComputersCard";
import { Cpu, Star, TrendingUp, Award, Filter, Search, Zap, HardDrive, MemoryStick } from "lucide-react";

const computers = [
    {
        title: "Procesador AMD Ryzen 9 9950X",
        description: "Procesador tope de gama AMD Ryzen 9 9950X con arquitectura Zen 5 de última generación, 16 núcleos y 32 hilos para rendimiento extremo en gaming y multitarea profesional. Disfruta de velocidades de hasta 5.8GHz, soporte PCIe 5.0 y tecnología 3D V-Cache para minimizar la latencia en juegos exigentes. Compatible con placas madre AM5 y optimizado para DDR5, este CPU ofrece eficiencia energética mejorada y domina cualquier carga de trabajo en 2025.",
        image: "https://www.amd.com/content/dam/amd/en/images/products/processors/ryzen/2613900-ryzen-9-9950x.jpg",
        link: "https://amzn.to/3I9mzkH"
    },
    {
        title: "Intel Core i9-14900K",
        description: "Experimenta potencia sin límites con el Intel Core i9-14900K, el procesador insignia con 24 núcleos (8P+16E) y 32 hilos. Alcanza velocidades turbo de hasta 6.0GHz con tecnología Thermal Velocity Boost, ideal para gaming competitivo, streaming y creación de contenido 4K/8K. Con arquitectura híbrida mejorada, soporte DDR5 y PCIe 5.0, este procesador desbloqueado ofrece capacidades de overclocking excepcionales para entusiastas y profesionales exigentes.",
        image: "https://c1.neweggimages.com/productimage/nb640/19-118-462-01.jpg",
        link: "https://amzn.to/3GtFKVH"
    },
    {
        title: "AMD Ryzen 7 9700X",
        description: "El AMD Ryzen 7 9700X representa el equilibrio perfecto entre rendimiento y valor, con 8 núcleos y 16 hilos basados en la arquitectura Zen 5. Alcanzando frecuencias de hasta 5.4GHz, este procesador domina juegos AAA y aplicaciones creativas con facilidad. Compatible con el ecosistema AM5 y memoria DDR5 de alta velocidad, incluye tecnologías avanzadas de eficiencia energética y un TDP optimizado para sistemas de gama media-alta.",
        image: "https://m.media-amazon.com/images/I/61F3ZChalyL.jpg",
        link: "https://amzn.to/3GqTf8A"
    },
    {
        title: "NVIDIA RTX 5090",
        description: "La NVIDIA GeForce RTX 5090 redefine el gaming de élite con arquitectura Blackwell de 4nm, 32GB de memoria GDDR7 ultrarrápida y 24,576 núcleos CUDA para un rendimiento 60% superior a la generación anterior. Experimenta ray tracing en tiempo real con 128 núcleos RT de 4ª generación y resolución 8K con DLSS 4.0, aprovechando la inteligencia artificial para multiplicar el rendimiento. Con soporte AV1, DisplayPort 2.1, y consumo optimizado, esta GPU tope de gama establece nuevos estándares para creadores y gamers sin límites de presupuesto.",
        image: "https://www.pcgamesn.com/wp-content/sites/pcgamesn/2024/02/nvidia-geforce-rtx-5090-mockup.jpg",
        link: ""
    },
    {
        title: "AMD Radeon RX 8900 XT",
        description: "La AMD Radeon RX 8900 XT eleva el rendimiento con arquitectura RDNA 4, 24GB de memoria GDDR7 y tecnología FSR 4.0 impulsada por IA para gaming fluido en resolución 4K y 8K. Con 18,000 stream processors, ray tracing mejorado de 3ª generación y tecnología AMD Infinity Cache expandida, esta tarjeta gráfica ofrece experiencias inmersivas con menor latencia. Incluye codificación AV1, soporte DisplayPort 2.1 y un sistema de refrigeración triple ventilador rediseñado para mantener temperaturas óptimas incluso en los juegos más exigentes.",
        image: "https://www.alliedgamingpc.com.au/assets/images/news/209.jpg",
        link: ""
    },
    {
        title: "AMD X870",
        description: "La placa madre AMD X870 representa la plataforma definitiva para procesadores Ryzen 9000, con arquitectura PCIe 5.0 completa para GPU y almacenamiento ultrarrápido. Ofrece soporte DDR5 hasta 8400MHz, hasta cuatro ranuras M.2 Gen 5 y conectividad USB4 de 40Gbps. Con VRMs robustos de 24+2 fases, refrigeración avanzada y Wi-Fi 7 integrado, esta placa madre premium incluye iluminación RGB personalizable y compatibilidad con tecnología AMD StoreMI 2.0. Perfecta para entusiastas que buscan máxima expansibilidad y rendimiento sin limitaciones.",
        image: "https://m.media-amazon.com/images/I/81OtLGxXwFL.jpg",
        link: "https://amzn.to/44xnRgU"
    },
    {
        title: "Intel Z890",
        description: "La placa madre Intel Z890 establece nuevos estándares para procesadores de 14ª generación con soporte overclocking avanzado y arquitectura PCIe 5.0 completa. Ofrece memoria DDR5 hasta 8000MHz, cuatro puertos M.2 con disipación térmica activa y sistema de alimentación digital de 20+1+2 fases para estabilidad máxima. Con tecnología Intel Killer Wi-Fi 7, LAN 5Gbps, iluminación ARGB sincronizada y audio premium de 130dB SNR, esta plataforma innovadora incluye diagnóstico inteligente y botones integrados para overclocking. Perfecta para entusiastas que exigen lo mejor en conectividad y rendimiento.",
        image: "https://www.asus.com/microsite/motherboard/intel-ultra-series-2-arrow-lake-s-z890-h810-b860/v1/img/series/rog-maximus-z890-extreme.png",
        link: "https://amzn.to/4ktAzDq"
    },
    {
        title: "DDR5-8000MHz 32GB",
        description: "Memoria DDR5-8000MHz 32GB (2x16GB) de última generación con latencias ultrabajas CL36-46-46-120 y perfiles de overclocking XMP 3.0/EXPO optimizados para plataformas Intel y AMD. Con chips seleccionados de grado A, gestión térmica avanzada mediante disipadores de aluminio de alta conductividad y voltaje estabilizado de 1.4V, esta RAM premium garantiza máxima estabilidad en gaming 4K/8K, renderizado y multitarea intensiva. Incluye iluminación RGB personalizable y diagnóstico por software para monitoreo en tiempo real, ideal para entusiastas que buscan eliminar cuellos de botella en sistemas tope de gama.",
        image: "https://m.media-amazon.com/images/I/51ldC8u9j8L._AC_UF894,1000_QL80_.jpg",
        link: "https://amzn.to/4lAE0ZP"
    },
    {
        title: "DDR5-6400MHz 16GB",
        description: "Memoria DDR5-6400MHz 16GB (2x8GB) con latencias optimizadas CL32-38-38-96 para gaming fluido y multitarea eficiente en sistemas de gama media. Diseñada con perfiles XMP 3.0/EXPO precertificados, disipadores térmicos de perfil bajo compatibles con la mayoría de refrigeradores CPU, y voltaje estable de 1.35V para longevidad mejorada. Esta RAM equilibrada ofrece ancho de banda 40% superior a DDR4, incluye detección de errores on-die y circuitos de administración de energía integrados, proporcionando el rendimiento necesario para juegos modernos y aplicaciones productivas sin exceder presupuestos moderados.",
        image: "https://m.media-amazon.com/images/I/61D2DDpDITL._AC_UF894,1000_QL80_.jpg",
        link: "https://amzn.to/4npzPlr"
    },
    {
        title: "SSD PCIe Gen 5",
        description: "SSD PCIe Gen 5 NVMe 1.4 de 4TB con velocidades asombrosas de hasta 14,000 MB/s lectura y 12,000 MB/s escritura, superando hasta 3 veces el rendimiento de la generación anterior. Equipado con controlador personalizado de 8 canales, memoria NAND TLC de 232 capas, caché DRAM DDR5 y búfer SLC dinámico para mantener velocidades máximas en transferencias prolongadas. Incluye disipador térmico de grafeno con cámara de vapor para prevenir throttling térmico, cifrado AES-256, protección contra cortes de energía y 1.8 millones de horas MTBF. Transforme su sistema con tiempos de carga instantáneos y transferencias de archivos ultrarrápidas.",
        image: "https://www.crucial.com/content/dam/crucial/ssd-products/t700/images/web/crucial-T700-ssd-dual-dynamic-hero-image.psd.transform/small-png/img.png",
        link: "https://amzn.to/4nv3nOe"
    },
];

const TopComponents2025 = () => {
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
                            <span className="text-blue-600">Componentes PC 2025</span>
                        </h1>

                        {/* Description */}
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                            Descubre los componentes más potentes del 2025 para armar tu PC ideal. Desde procesadores de última generación hasta tarjetas gráficas revolucionarias.
                        </p>

                        {/* Stats */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                            <div className="flex items-center text-gray-500">
                                <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                                <span>Última tecnología</span>
                            </div>
                            <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
                            <div className="flex items-center text-gray-500">
                                <Star className="h-5 w-5 mr-2 text-yellow-500" />
                                <span>Máximo rendimiento</span>
                            </div>
                            <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
                            <div className="flex items-center text-gray-500">
                                <Cpu className="h-5 w-5 mr-2 text-blue-600" />
                                <span>Todas las categorías</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Components Grid */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {computers.map((computer, index) => (
                        <ComputersCard key={index} computer={computer} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopComponents2025;