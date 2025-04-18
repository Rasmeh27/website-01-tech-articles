import React from "react";
import ComputersCard from "../components/ComputersCard";

const computers = [
    {
        title: "Procesador AMD Ryzen 9 9950X",
        description: "Procesador tope de gama AMD Ryzen 9 9950X con arquitectura Zen 5 de última generación, 16 núcleos y 32 hilos para rendimiento extremo en gaming y multitarea profesional. Disfruta de velocidades de hasta 5.8GHz, soporte PCIe 5.0 y tecnología 3D V-Cache para minimizar la latencia en juegos exigentes. Compatible con placas madre AM5 y optimizado para DDR5, este CPU ofrece eficiencia energética mejorada y domina cualquier carga de trabajo en 2025.",
        image: "https://www.amd.com/content/dam/amd/en/images/products/processors/ryzen/2613900-ryzen-9-9950x.jpg",
        link: ""
    },
    {
        title: "Intel Core i9-14900K",
        description: "Experimenta potencia sin límites con el Intel Core i9-14900K, el procesador insignia con 24 núcleos (8P+16E) y 32 hilos. Alcanza velocidades turbo de hasta 6.0GHz con tecnología Thermal Velocity Boost, ideal para gaming competitivo, streaming y creación de contenido 4K/8K. Con arquitectura híbrida mejorada, soporte DDR5 y PCIe 5.0, este procesador desbloqueado ofrece capacidades de overclocking excepcionales para entusiastas y profesionales exigentes.",
        image: "https://c1.neweggimages.com/productimage/nb640/19-118-462-01.jpg",
        link: ""
    },
    {
        title: "AMD Ryzen 7 9700X",
        description: "El AMD Ryzen 7 9700X representa el equilibrio perfecto entre rendimiento y valor, con 12 núcleos y 24 hilos basados en la arquitectura Zen 5. Alcanzando frecuencias de hasta 5.4GHz, este procesador domina juegos AAA y aplicaciones creativas con facilidad. Compatible con el ecosistema AM5 y memoria DDR5 de alta velocidad, incluye tecnologías avanzadas de eficiencia energética y un TDP optimizado para sistemas de gama media-alta.",
        image: "https://m.media-amazon.com/images/I/61F3ZChalyL.jpg",
        link: ""
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
        link: ""
    },
    {
        title: "Intel Z890",
        description: "La placa madre Intel Z890 establece nuevos estándares para procesadores de 14ª generación con soporte overclocking avanzado y arquitectura PCIe 5.0 completa. Ofrece memoria DDR5 hasta 8000MHz, cuatro puertos M.2 con disipación térmica activa y sistema de alimentación digital de 20+1+2 fases para estabilidad máxima. Con tecnología Intel Killer Wi-Fi 7, LAN 5Gbps, iluminación ARGB sincronizada y audio premium de 130dB SNR, esta plataforma innovadora incluye diagnóstico inteligente y botones integrados para overclocking. Perfecta para entusiastas que exigen lo mejor en conectividad y rendimiento.",
        image: "https://www.asus.com/microsite/motherboard/intel-ultra-series-2-arrow-lake-s-z890-h810-b860/v1/img/series/rog-maximus-z890-extreme.png",
        link: ""
    },
    {
        title: "DDR5-8000MHz 32GB",
        description: "Memoria DDR5-8000MHz 32GB (2x16GB) de última generación con latencias ultrabajas CL36-46-46-120 y perfiles de overclocking XMP 3.0/EXPO optimizados para plataformas Intel y AMD. Con chips seleccionados de grado A, gestión térmica avanzada mediante disipadores de aluminio de alta conductividad y voltaje estabilizado de 1.4V, esta RAM premium garantiza máxima estabilidad en gaming 4K/8K, renderizado y multitarea intensiva. Incluye iluminación RGB personalizable y diagnóstico por software para monitoreo en tiempo real, ideal para entusiastas que buscan eliminar cuellos de botella en sistemas tope de gama.",
        image: "https://m.media-amazon.com/images/I/51ldC8u9j8L._AC_UF894,1000_QL80_.jpg",
        link: ""
    },
    {
        title: "DDR5-6400MHz 16GB",
        description: "Memoria DDR5-6400MHz 16GB (2x8GB) con latencias optimizadas CL32-38-38-96 para gaming fluido y multitarea eficiente en sistemas de gama media. Diseñada con perfiles XMP 3.0/EXPO precertificados, disipadores térmicos de perfil bajo compatibles con la mayoría de refrigeradores CPU, y voltaje estable de 1.35V para longevidad mejorada. Esta RAM equilibrada ofrece ancho de banda 40% superior a DDR4, incluye detección de errores on-die y circuitos de administración de energía integrados, proporcionando el rendimiento necesario para juegos modernos y aplicaciones productivas sin exceder presupuestos moderados. ",
        image: "https://m.media-amazon.com/images/I/61D2DDpDITL._AC_UF894,1000_QL80_.jpg",
        link: ""
    },
    {
        title: "SSD PCIe Gen 5",
        description: "SSD PCIe Gen 5 NVMe 1.4 de 4TB con velocidades asombrosas de hasta 14,000 MB/s lectura y 12,000 MB/s escritura, superando hasta 3 veces el rendimiento de la generación anterior. Equipado con controlador personalizado de 8 canales, memoria NAND TLC de 232 capas, caché DRAM DDR5 y búfer SLC dinámico para mantener velocidades máximas en transferencias prolongadas. Incluye disipador térmico de grafeno con cámara de vapor para prevenir throttling térmico, cifrado AES-256, protección contra cortes de energía y 1.8 millones de horas MTBF. Transforme su sistema con tiempos de carga instantáneos y transferencias de archivos ultrarrápidas.​",
        image: "https://www.crucial.com/content/dam/crucial/ssd-products/t700/images/web/crucial-T700-ssd-dual-dynamic-hero-image.psd.transform/small-png/img.png",
        link: ""
    },
]

const TopComponents2025 = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Top 10 Mejores Componentes para PC</h1>
            <p className="text-gray-700 mb-8">Te presentamos los mejores componentes para un armado de PC</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {computers.map((computer, index) => (
                    <ComputersCard key={index} computer={computer} />
                ))}
            </div>
        </div>
    )
}

export default TopComponents2025;