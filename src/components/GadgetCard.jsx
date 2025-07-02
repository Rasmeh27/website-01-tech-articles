
import { ExternalLink, Star, Zap, Award, TrendingUp, Smartphone, Wifi, Camera, Headphones, Monitor, Gamepad2 } from "lucide-react";

const GadgetCard = ({ gadget, index }) => {
    const isTopRated = index < 3; // Los primeros 3 son destacados
    const getRankBadge = (index) => {
        const badges = {
            0: { text: "🏆 #1", color: "bg-gradient-to-r from-yellow-400 to-yellow-600", textColor: "text-white" },
            1: { text: "🥈 #2", color: "bg-gradient-to-r from-gray-300 to-gray-500", textColor: "text-white" },
            2: { text: "🥉 #3", color: "bg-gradient-to-r from-orange-400 to-orange-600", textColor: "text-white" }
        };
        return badges[index] || { text: `#${index + 1}`, color: "bg-gradient-to-r from-blue-500 to-blue-600", textColor: "text-white" };
    };

    const getGadgetIcon = (title) => {
        const titleLower = title.toLowerCase();
        if (titleLower.includes('proyector') || titleLower.includes('tv') || titleLower.includes('stick')) {
            return <Monitor className="h-4 w-4" />;
        } else if (titleLower.includes('airpods') || titleLower.includes('auriculares')) {
            return <Headphones className="h-4 w-4" />;
        } else if (titleLower.includes('cámara') || titleLower.includes('camera')) {
            return <Camera className="h-4 w-4" />;
        } else if (titleLower.includes('wifi') || titleLower.includes('repetidor')) {
            return <Wifi className="h-4 w-4" />;
        } else if (titleLower.includes('teclado') || titleLower.includes('tactsuit') || titleLower.includes('gaming')) {
            return <Gamepad2 className="h-4 w-4" />;
        } else if (titleLower.includes('lámpara') || titleLower.includes('cargador') || titleLower.includes('gafas') || titleLower.includes('lentillas')) {
            return <Smartphone className="h-4 w-4" />;
        }
        return <Zap className="h-4 w-4" />;
    };

    const badge = getRankBadge(index);

    return (
        <div className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border ${
            isTopRated ? 'border-yellow-200 ring-2 ring-yellow-100' : 'border-gray-200 hover:border-blue-200'
        } transform hover:scale-[1.02]`}>
            
            {/* Ranking Badge */}
            <div className="absolute top-4 left-4 z-10">
                <div className={`${badge.color} ${badge.textColor} px-3 py-1 rounded-full text-sm font-bold shadow-lg`}>
                    {badge.text}
                </div>
            </div>

            {/* Top Rated Badge */}
            {isTopRated && (
                <div className="absolute top-4 right-4 z-10">
                    <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center">
                        <Star className="h-3 w-3 mr-1 fill-current" />
                        TOP
                    </div>
                </div>
            )}

            {/* Image Container */}
            <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                <img 
                    src={gadget.image}
                    alt={gadget.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Floating Action Button */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                        <TrendingUp className="h-5 w-5 text-green-600" />
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                    {gadget.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-4">
                    {gadget.description}
                </p>

                {/* Features Highlights */}
                <div className="flex flex-wrap gap-2 mb-6">
                    <div className="flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                        {getGadgetIcon(gadget.title)}
                        <span className="ml-1">Innovador</span>
                    </div>
                    {isTopRated && (
                        <div className="flex items-center bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                            <Award className="h-3 w-3 mr-1" />
                            Recomendado
                        </div>
                    )}
                </div>

                {/* Action Button */}
                {gadget.link ? (
                    <a
                        href={gadget.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        <span>Ver en Amazon</span>
                        <ExternalLink className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </a>
                ) : (
                    <div className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-gray-400 to-gray-500 text-white font-semibold rounded-xl cursor-not-allowed opacity-75">
                        <span>Próximamente</span>
                    </div>
                )}
            </div>

            {/* Hover Effect Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>
    );
};

export default GadgetCard;