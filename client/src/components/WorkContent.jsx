import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';



const WorkContent = () => {
  const [services, setServices] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredServices, setFilteredServices] = useState([]);
  

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/services");
        setServices(response.data);
        setFilteredServices(response.data); // Initialize filtered services with all services
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchService();
  }, []);

  useEffect(() => {
    // Filter services when search input changes
    const filtered = services.filter(service =>
      service.title.toLowerCase().includes(searchInput.toLowerCase()) ||
      service.description.toLowerCase().includes(searchInput.toLowerCase()) ||
      service.location.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredServices(filtered);
  }, [searchInput, services]);

  const handleSearchInputChange = event => {
    setSearchInput(event.target.value);
  };
 
  return (
    <div className="bg-white dark:bg-gray-800 h-screen">
      <div className="relative pt-8">
        <div className="absolute inset-0 h-1/2 bg-gray-100 dark:bg-gray-700"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <input
            type="text"
            placeholder="Search for the Work Or Location"
            value={searchInput}
            onChange={handleSearchInputChange}
            className="border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 mb-4 w-full"
          />
          
          {filteredServices.map((service, index) => (
            <div key={index} className="mb-8">
              <div
                className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex"
              >
                <div className="flex-1 bg-white dark:bg-gray-900 px-6 py-8 lg:p-12">
                  <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-6 text-base text-gray-500 dark:text-gray-300">
                    {service.description}
                  </p>
                  <div className="mt-8">
                    <div className="flex items-center">
                      <h4 className="flex-shrink-0 pr-4 bg-white dark:bg-gray-900 text-sm tracking-wider font-semibold uppercase text-rose-600">
                        What's included
                      </h4>
                      <div className="flex-1 border-t-2 border-gray-200 dark:border-gray-600"></div>
                    </div>
                    <ul className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                      {service.categories.map((category, idx) => (
                        <li key={idx} className="flex items-start lg:col-span-1">
                          <div className="flex-shrink-0">
                            <svg
                              className="h-5 w-5 text-green-400 dark:text-green-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </div>
                          <p className="ml-3 text-sm text-gray-700 dark:text-gray-300">
                            {category}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="py-8 px-6 text-center bg-gray-50 dark:bg-gray-900 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                  <p className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                    Price Range
                  </p>
                  <div>
                    <span className="font-mono text-xl md:text-lg font-medium text-gray-400 dark:text-gray-400">
                    ₹
                    </span>
                    <span className="h1 line-through text-gray-600 dark:text-gray-400">
                      199.99
                    </span>
                    <span className="line-through relative text-gray-600 dark:text-gray-400 text-center text-sm mb-4">
                      /mo
                    </span>
                    <span className="text-red-600 text-sm">
                      Special promotion
                    </span>
                  </div>
                  <div className="mt-4 flex items-center justify-center text-3xl font-extrabold text-gray-900 dark:text-white">
                    <span>{service.price}</span>
                    <span className="ml-3 text-xl font-medium text-gray-500 dark:text-gray-400">
                    ₹
                    </span>
                  </div>
                  <div className="mt-6">
                    <div className="rounded-md shadow">
                      <Link to="/user-info"
                        
                        className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600"
                      >
                        Avail Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkContent;
