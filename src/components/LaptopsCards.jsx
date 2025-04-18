import React from "react";

const LaptopsCard = ({ laptop }) => {
    return (
        <div className="bg-white rounded-xl shadow-md p-4 flex flex-col hover:shadow-lg transition duration-300 ">
            <img src={laptop.image} alt={laptop.title} className="rounded-lg mb-3 h-48 object-cover"/>
            <h3 className="text-lg font-semibold  mb-1">{laptop.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{laptop.description}</p>
            {laptop.link && (
                <a
                    href={laptop.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-medium hover:underline"
                >
                    Ver en Amazon →
                </a>
            )}
        </div>
    )
};

export default LaptopsCard;