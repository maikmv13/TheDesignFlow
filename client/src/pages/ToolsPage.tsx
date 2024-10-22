import React, { useState } from 'react';
import { ExternalLink, Lock, Mail, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Tool {
  id: number;
  name: string;
  description: string;
  category: string;
  website: string;
}

const tools: Tool[] = [
  {
    id: 1,
    name: "Figma",
    description: "A collaborative interface design tool.",
    category: "UI/UX Design",
    website: "https://www.figma.com/"
  },
  {
    id: 2,
    name: "Adobe XD",
    description: "A vector-based user experience design tool.",
    category: "UI/UX Design",
    website: "https://www.adobe.com/products/xd.html"
  },
  {
    id: 3,
    name: "Sketch",
    description: "A digital design app for Mac.",
    category: "UI/UX Design",
    website: "https://www.sketch.com/"
  },
  {
    id: 4,
    name: "InVision",
    description: "A digital product design platform.",
    category: "Prototyping",
    website: "https://www.invisionapp.com/"
  },
  {
    id: 5,
    name: "Axure RP",
    description: "A tool for creating prototypes and specifications for websites and apps.",
    category: "Prototyping",
    website: "https://www.axure.com/"
  },
  // Add more tools as needed
];

const ToolsPage: React.FC = () => {
  const [isSubscriber, setIsSubscriber] = useState(false); // This should be determined by your authentication logic
  const [subscriptionLevel, setSubscriptionLevel] = useState(1); // This should be determined by your authentication logic
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const displayedTools = isSubscriber && subscriptionLevel >= 2 ? tools : tools.slice(0, 3);

  const filteredTools = displayedTools.filter(tool => 
    tool.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (categoryFilter === '' || tool.category === categoryFilter)
  );

  const categories = Array.from(new Set(tools.map(tool => tool.category)));

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-indigo-900">Design Tools Database</h1>
      
      <div className="mb-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search tools..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="w-full md:w-1/2">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTools.map((tool) => (
          <div key={tool.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2 text-indigo-900">{tool.name}</h2>
              <p className="text-gray-600 mb-4">{tool.description}</p>
              <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-4">
                {tool.category}
              </span>
              <div className="flex justify-between items-center">
                <a
                  href={tool.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 flex items-center"
                >
                  Visit Website <ExternalLink className="w-4 h-4 ml-1" />
                </a>
                <Link to={`/tools/${tool.id}`} className="text-indigo-600 hover:text-indigo-800 flex items-center">
                  Read More <Mail className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {(!isSubscriber || subscriptionLevel < 2) && (
        <div className="mt-12 bg-indigo-50 border border-indigo-200 rounded-lg p-8">
          <div className="flex items-center mb-4">
            <Lock className="w-8 h-8 text-indigo-600 mr-4" />
            <h2 className="text-2xl font-bold text-indigo-900">Unlock More Design Tools</h2>
          </div>
          <p className="text-lg mb-6 text-gray-700">
            You're currently viewing {displayedTools.length} out of {tools.length} design tools in our database. 
            Subscribe to The Design Flow (BASIC or PREMIUM plan) to access our full database of design tools and receive weekly newsletters featuring new tools and in-depth guides.
          </p>
          <Link
            to="/subscribe"
            className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition duration-300 shadow-md hover:shadow-lg"
          >
            <Lock className="w-5 h-5 mr-2" />
            Upgrade Subscription
          </Link>
        </div>
      )}
    </div>
  );
};

export default ToolsPage;