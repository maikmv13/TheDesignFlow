import React from 'react';
import { ExternalLink } from 'lucide-react';

const PreviewPage: React.FC = () => {
  const previewItems = [
    {
      title: 'Lemanoosh',
      description: 'Specialized website offering inspiration and resources for industrial design. Discover cutting-edge product designs and innovative concepts to fuel your creativity.',
      category: 'Product Design',
      link: 'https://lemanoosh.com/',
      pricing: 'Free',
      rating: '5/5'
    },
    {
      title: 'Designspiration',
      description: 'A visual inspiration platform focused on graphic design and art. Explore a vast collection of curated designs to spark your imagination and refine your style.',
      category: 'Graphic Design',
      link: 'https://www.designspiration.com/',
      pricing: 'Free, Premium options available',
      rating: '4/5'
    },
    {
      title: 'Behance',
      description: 'Adobe\'s portfolio and social networking platform for creatives. Showcase your work, discover trending projects, and connect with fellow designers from around the world.',
      category: 'Multiple Design Fields',
      link: 'https://www.behance.net/',
      pricing: 'Free',
      rating: '4/5'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Preview of The Design Flow</h1>
      
      <p className="text-lg text-gray-600 mb-8 text-center">
        Here's a sneak peek of the type of content you'll receive in our newsletter. 
        Subscribe to get full access to these tools and many more!
      </p>
      
      <div className="space-y-8">
        {previewItems.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-2.5 py-0.5 rounded">
                {item.category}
              </span>
            </div>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-500">Pricing: {item.pricing}</span>
              <span className="text-sm text-gray-500">Rating: {item.rating}</span>
            </div>
            <a 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
            >
              Visit Website <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-lg mb-4">Want to access all our curated design tools and insights?</p>
        <a 
          href="/subscribe" 
          className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-indigo-700 transition duration-300"
        >
          Subscribe Now
        </a>
      </div>
    </div>
  );
};

export default PreviewPage;