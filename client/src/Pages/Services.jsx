import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "./data";

const Services = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <h1 className="flex justify-center text-4xl text-bold font-home mt-10 pt-10 mb-8 text-3xl sm:text-5xl tracking-tight">Explore our Services</h1>
      <SearchInput setSearchQuery={setSearchQuery}></SearchInput>
      <ServiceTypes data={data} searchQuery={searchQuery}></ServiceTypes>
    </div>
  );
};

function ServiceTypes({ data, searchQuery }) {
  const navigate = useNavigate();

  const filterSearch = data.filter((serviceType) => {
    const titleMatch = serviceType.title.toLowerCase().includes(searchQuery.toLowerCase());
    const serviceMatch = serviceType.services.some((service) =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return titleMatch || serviceMatch;
  });

  const handleClick = (serviceType) => {
    navigate(`/services/${serviceType.title.toLowerCase()}`);
  };

  return (
    <div className="bg-gray-100 w-full pt-10 gap-12 flex-wrap flex justify-center items-center font-home">
      {filterSearch.map((serviceType) => (
        <div  
          key={serviceType.id}
          className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl"
        >
          <h2 className="font-bold text-lg mb-2">{serviceType.title}</h2>
          <p className="text-sm text-gray-600 mb-5">{serviceType.description}</p>
          <div className="flex justify-center">
            <img className="h-32 " src={serviceType.src} alt="" />
          </div>

          <div className="mt-5 mb-5 flex justify-center">
            <button
              onClick={() => {
                handleClick(serviceType);
              }}
              className="text-white bg-black px-4 py-1 rounded-md hover:bg-black-700"
            >
              View Service
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

function SearchInput({ setSearchQuery }) {
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <form className="max-w-md mx-auto font-home">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative ">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input type="search" id="default-search" className="block w-full p-2 ps-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5" placeholder="Search Plumber, Carpenter..." onChange={handleSearchInputChange} required />
        </div>
      </form>
    </div>
  );
}

export default Services;