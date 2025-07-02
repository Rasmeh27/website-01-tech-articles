import React from "react";
import GadgetCard from "../components/GadgetCard";
import { Package, Star, TrendingUp, Award, Filter, Search, Smartphone, Wifi, Camera, Headphones } from "lucide-react";

const gadgets = [
    {
        title: "Mini Proyector Portátil WiFi",
        description: "Lleva tu cine a cualquier parte con este mini proyector inalámbrico. Ideal para películas, presentaciones y más.",
        image: "https://m.media-amazon.com/images/I/61DLzqzP6mL._AC_SL1500_.jpg",
        link: ""
    },
    {
        title: "Lámpara LED con Cargador Inalámbrico",
        description: "Ilumina tu escritorio y carga tu celular al mismo tiempo, con diseño moderno y regulable.",
        image: "https://m.media-amazon.com/images/I/71IlL3q7znL._AC_SL1500_.jpg",
        link: ""
    },
    {
        title: "Teclado Mecánico Compacto RGB",
        description: "Ideal para trabajar o jugar, con iluminación personalizable y tamaño perfecto para cualquier setup.",
        image: "https://m.media-amazon.com/images/I/71oooMQxjLL._AC_SL1500_.jpg",
        link: ""
    },
    {
        title: "Amazon Fire TV Stick",
        description: "Convierte cualquier televisor en smart y accede a tus plataformas favoritas en segundos. Esta nueva generación incluye control por voz con Alexa y rendimiento mejorado.",
        image: "https://m.media-amazon.com/images/I/51181cMWQ-L._AC_SL1000_.jpg",
        link: ""
    },
    {
        title: "AirPods 3",
        description: "Auriculares Bluetooth con audio espacial personalizado, resistentes al sudor y al agua, funda de carga USB-C, chip H2, hasta 30 horas de duración de la batería.",
        image: "https://m.media-amazon.com/images/I/61fTopgP4bL._AC_SL1500_.jpg",
        link: ""
    },
    {
        title: "Gafas RayNeo X3 Pro",
        description: "Gafas de realidad aumentada con cámaras integradas, presentadas por TCL.",
        image: "https://m.media-amazon.com/images/I/51-zS9bsm7L._AC_SL1500_.jpg",
        link: ""
    },
    {
        title: "Lentillas inteligentes de Xpanceo",
        description: "Lentillas que integran realidad aumentada y analizan datos de salud del usuario.",
        image: "https://media.wired.com/photos/65ddff79614031b6541fa341/master/w_1600,c_limit/Xpanceo%20SOURCE%20Julian%20Chokkattu.jpg",
        link: ""
    },
    {
        title: "TactSuit de bHaptic",
        description: "Chaleco háptico con muñequeras que proporcionan retroalimentación táctil en juegos, compatible con varias plataformas.",
        image: "https://www.knoxlabs.com/cdn/shop/files/TactSuitPro01_6c57ef68-30c0-4ed2-80de-e5b3e00127f3_700x700.webp?v=1731703770",
        link: ""
    },
    {
        title: "Cámara TP-Link Tapo C210",
        description: "Una de las cámaras más completas de este año. Con resolución 2K y visión nocturna, permite vigilar cualquier rincón de la casa desde el móvil. Además, detecta movimiento y sigue los objetos en tiempo real.",
        image: "https://m.media-amazon.com/images/I/41tRa2xorHL._AC_UF894,1000_QL80_.jpg",
        link: ""
    },
    {
        title: "Repetidor WiFi TP-Link N300",
        description: "Este pequeño dispositivo amplía la cobertura WiFi en casa, especialmente útil si tienes muchas habitaciones o paredes gruesas.",
        image: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_85414806?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402",
        link: ""
    },
];

const TopGadgets2025 = () => {
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
                            <span className="text-blue-600">Gadgets 2025</span>
                        </h1>

                        {/* Description */}
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                            Descubre los gadgets más innovadores del 2025. Desde dispositivos inteligentes hasta accesorios revolucionarios que transformarán tu día a día.
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
                                <span>Más innovadores</span>
                            </div>
                            <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
                            <div className="flex items-center text-gray-500">
                                <Package className="h-5 w-5 mr-2 text-blue-600" />
                                <span>Todas las categorías</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gadgets Grid */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {gadgets.map((gadget, index) => (
                        <GadgetCard key={index} gadget={gadget} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopGadgets2025;