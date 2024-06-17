import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import serviceData from './ViewServicedata';

const ViewService = () => {
    const { serviceType } = useParams();
   

  

    const navigate = useNavigate();
    const formattedServiceType = serviceType.replace("%20", " ");
    const { title, description, services } = serviceData[formattedServiceType];

    return (
        <div className="bg-gray-100 w-full pt-10 mt-10 gap-12 flex flex-col items-center justify-center font-home overflow-x-hidden">
            <div className="w-full p-4 ml-10">
                <h1 className="text-4xl font-bold">{title}</h1>
                <p className="text-lg text-gray-600 mt-3">{description}</p>
            </div>
            <div className="w-full flex flex-wrap justify-center">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="w-1/3 p-4 bg-white rounded-xl shadow-lg m-4 flex flex-col justify-between"
                    >
                        <div>
                            <div className="text-xl font-bold mb-2">{service.name}</div>
                            <div className="text-gray-600 mb-2">{service.description}</div>
                            <ul className="text-sm text-gray-600">
                                {service.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex justify-end">
                            <img className="h-32 w-auto object-cover" src={service.image} alt={service.name} />
                        </div>
                        <button
                            onClick={()=>{
                                navigate("/user-info")
                              }}
                            className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
                        >
                            Book now
                        </button>
                    </div>
                ))}
            </div>
            
            
        </div>
    );
};



export default ViewService;
