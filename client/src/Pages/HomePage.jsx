import React from "react";
import Mens from "../components/Mens";
import Womens from "../components/Womens";
import Electronics from "../components/Electronics";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import "../../src/index.css";
import { button } from "@material-tailwind/react";
import { Navigate, useNavigate } from "react-router-dom";
import image from '../../public/assets/main.png'
const HomePage = () => {
  const bannerImages = [
    "src/assets/banner1.jpg",
    "src/assets/banner2.jpg",
    "src/assets/banner1.jpg"
  ];

  return (
    <div>
      {/* Main Section */}
      <div className="px-14 mt-32 font-home">
        <h1 className="text-5xl font-bold">Seamless Solutions for Local Needs</h1>
        <h2 className="text-3xl font-bold mt-5">Your Local Service Network Hub</h2>
      </div>

      {/* Content Section */}
      <div className="flex ml-14 flex-row-reverse">
        <div className="">
          <img className="w-1/2 h-auto mr-8 float-right mt-[-12rem] animate-float" src={image} alt="Home Image" />
        </div>
        <NextBtn  />
        <Electronics />
        
        <Womens />
        <Mens />
      </div>

      <h1 className="flex text-4xl font-bold m-16 pt-10 justify-center">Explore Our Exciting Offers !!</h1>
      <div className="bg-gray-200 py-8">
        <BannerLogic images={bannerImages} />
        <Footer />
      </div>
    </div>
  );
};

const BannerLogic = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Automatically move to the next slide every 2 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 2000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentSlide]); // Re-run effect when currentSlide changes

  // Handle manual navigation to previous slide
  const handlePrevSlide = () => {
    clearInterval(intervalId); // Pause automatic sliding when manually navigating
    prevSlide();
  };

  // Handle manual navigation to next slide
  const handleNextSlide = () => {
    clearInterval(intervalId); // Pause automatic sliding when manually navigating
    nextSlide();
  };

  return (
    <div className="relative overflow-hidden">
      <div className="flex" style={{ transform: `translateX(-${currentSlide * 100}%)`, transition: "transform 0.5s ease" }}>
        {images.map((image, index) => (
          <div key={index} className="slide min-w-full">
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-auto max-h-48 object-cover" />
          </div>
        ))}
      </div>
      <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-l" onClick={handlePrevSlide} style={{ zIndex: 10 }}>&larr;</button>
      <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-r" onClick={handleNextSlide} style={{ zIndex: 10 }}>&rarr;</button>
    </div>
  );
};

function NextBtn() {
  const navigate = useNavigate();
  return (
    <div className="justify-center text-center mt-20 ml-10">
    <button 
    onClick={()=>{
      navigate("/services")
    }}
    type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800">
    Load More
    <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 12h14"></path>
      <path d="m12 5 7 7-7 7"></path>
    </svg>
  </button>
  </div>
  




  
  
  

  
  );
}

export default HomePage;
