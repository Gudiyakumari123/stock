// src/components/Carousel.jsx

import React, { useEffect, useState } from 'react';

const testimonials = [
  {
    quote: "This course changed my life! I now understand how to invest properly.",
    name: "John Doe",
    title: "Investor",
    image: "https://via.placeholder.com/150"
  },
  {
    quote: "The best online course I've ever taken. Highly recommend it to anyone.",
    name: "Jane Smith",
    title: "Financial Analyst",
    image: "https://via.placeholder.com/150"
  },
  {
    quote: "Incredible value and very well explained. 10/10.",
    name: "Sam Wilson",
    title: "Entrepreneur",
    image: "https://via.placeholder.com/150"
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="relative w-full h-full">
         <button 
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full"
        onClick={handlePrev}
      >
        &lt;
      </button>
      <div className="bg-red-500 text-white p-8 rounded-lg shadow-lg">
        <p className="text-lg italic">"{testimonials[currentIndex].quote}"</p>
        <div className="flex items-center mt-4">
          <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="w-16 h-16 rounded-full mr-4"/>
          <div>
            <p className="font-bold">{testimonials[currentIndex].name}</p>
            <p className="text-sm">{testimonials[currentIndex].title}</p>
          </div>
        </div>
      </div>
     
      <button 
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full"
        onClick={handleNext}
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
