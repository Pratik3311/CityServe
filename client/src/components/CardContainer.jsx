import React, { useState } from 'react';

const ServiceCategory = ({ name, imageUrl, subCategories }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="p-4 border border-gray-300 rounded-md bg-white shadow-md mb-4 mr-9">
      <a>
        <img
          src={`/assets/${imageUrl}`}
          alt={name}
          className="w-full h-32 object-cover mb-4 cursor-pointer"
          onClick={openModal}
        />
      </a>
      <h2 className="text-lg font-semibold mb-2">{name}</h2>
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{name} Subcategories</h2>
              <button onClick={closeModal}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500 hover:text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <ul>
              {subCategories?.map(subCategory => (
                <li key={subCategory.id}>{subCategory.name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

const CardContainer = ({ serviceCategories, subCategories }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle search input change
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Ensure serviceCategories is defined before using filter
  const filteredCategories = serviceCategories ? serviceCategories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  ) : [];

  return (
    <div className="w-7/12 h-screen/2 bg-none overflow-y-auto flex flex-wrap p-10 m-10 ">
     
      {/* Display filtered categories */}
      {filteredCategories.map(category => (
        <ServiceCategory
          key={category.id}
          name={category.name}
          imageUrl={category.imageUrl}
          subCategories={subCategories[category.id]}
        />
      ))}
      {/* Display message if no categories match the search query */}
      {filteredCategories.length === 0 && (
        <p>No categories found matching your search query.</p>
      )}
    </div>
  );
};

export default CardContainer;
