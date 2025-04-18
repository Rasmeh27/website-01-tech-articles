import React from "react";
import GadgetCard from "../components/GadgetCard";

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
        description: "Una de las cámaras más completas de este año. Con resolución 2K y visión nocturna, permite vigilar cualquier rincón de la casa desde el móvil. Además, detecta movimiento y sigue los objetos en tiempo real. ",
        image: "https://m.media-amazon.com/images/I/41tRa2xorHL._AC_UF894,1000_QL80_.jpg",
        link: ""
    },
    {
        title: "Repetidor WiFi TP-Link N300",
        description: "Este pequeño dispositivo amplía la cobertura WiFi en casa, especialmente útil si tienes muchas habitaciones o paredes gruesas. ​",
        image: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_85414806?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402",
        link: ""
    },
];

const TopGadgets2025 = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Top 10 Gadgets Tecnológicos que no sabías que necesitas en 2025</h1>
            <p className="text-gray-700 mb-8">
            ¿Creías que lo habías visto todo? Te presentamos una selección de gadgets útiles, creativos y a veces inesperados que podrían mejorar tu día a día en 2025.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {gadgets.map((gadget, index) => (
                    <GadgetCard key={index} gadget={gadget} />
                ))}
            </div>
        </div>
    );
};

export default TopGadgets2025;