import React from 'react';
import { Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const DatabasePage: React.FC = () => {
  const isSubscriber = false; // This should be determined by your authentication logic

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Design Tools Database</h1>
      
      {isSubscriber ? (
        <div>
          <p className="text-lg mb-4">Welcome to our comprehensive database of design tools!</p>
          <iframe
            className="w-full h-[600px] border-0"
            src="https://airtable.com/appT2HvuUBo7cxgvl/tblh0yLpKLGLFYEYD/viwVteUsAVXDMbK3f?blocks=hide"
          ></iframe>
        </div>
      ) : (
        <div className="bg-gray-100 border border-gray-200 rounded-lg p-8">
          <div className="flex items-center mb-4">
            <Lock className="w-6 h-6 text-indigo-600 mr-2" />
            <h2 className="text-xl font-semibold">Subscriber-Only Access</h2>
          </div>
          <p className="mb-4">
            Our Design Tools Database is an extensive collection of curated design resources, tools, and insights.
            Subscribe to The Design Flow to access this valuable resource and elevate your design process.
          </p>
          <p className="mb-6">
            As a preview, you can see a sample of our database with 9 innovative design tools for 2024 and 12 AI-powered design solutions.
          </p>
          <Link
            to="/subscribe"
            className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Subscribe Now
          </Link>
        </div>
      )}
    </div>
  );
};

export default DatabasePage;