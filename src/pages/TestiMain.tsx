// src/App.js

import React from 'react';
import Carousel from './Testimonial';

function App() {
  return (
    <div className="min-h-screen flex">
      <div className="w-1/2 bg-gray-100 p-8 flex items-center justify-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Course</h1>
          <p className="text-lg">Learn how to invest in the stock market with our comprehensive online course. Gain the skills and knowledge you need to become a successful investor.</p>
        </div>
      </div>
      <div className="w-1/2 p-8 flex items-center justify-center bg-blue-50">
        <Carousel />
      </div>
    </div>
  );
}

export default App;
