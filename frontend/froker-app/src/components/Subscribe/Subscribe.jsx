import React from 'react';
import subscribeImage from '../../assets/subscribe-logo.png';

const Subscribe = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 mt-8 max-w-5xl mx-auto border border-gray-300 flex items-center">
      <div className="flex-shrink-0">
        <img src={subscribeImage} alt="Subscribe" className="h-40" />
      </div>
      <div className="ml-6">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Subscribe to our newsletter to get the latest updates and news</h2>
        <div className="flex mt-4 rounded-lg overflow-hidden">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 w-full"
          />
          <button className="p-3 bg-orange-500 text-white rounded-r-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
