import React from 'react';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

const FloatingSubscribeButton: React.FC = () => {
  return (
    <Link
      to="/subscribe"
      className="fixed bottom-6 right-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center space-x-2"
    >
      <Zap className="w-5 h-5" />
      <span className="font-bold">Subscribe Now</span>
    </Link>
  );
};

export default FloatingSubscribeButton;