import React from "react";

const ComputersCard = ({ computer }) => {
    return (
        <div className="bg-white rounded-xl shadow-md p-4 flex flex-col hover:shadow-lg transition duration-300 ">
            <img src={computer.image} alt={computer.title} className="rounded-lg mb-3 h-48 object-cover"/>
            <h3 className="text-lg font-semibold  mb-1">{computer.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{computer.description}</p>
            {computer.link && (
                <a
                    href={computer.link}
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

export default ComputersCard;