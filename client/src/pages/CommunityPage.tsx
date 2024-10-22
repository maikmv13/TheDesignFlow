import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Users, MessageCircle, Zap, Lock, MessageSquare, ThumbsUp } from 'lucide-react';

interface Discussion {
  id: number;
  title: string;
  author: string;
  date: string;
  replies: number;
  likes: number;
}

const CommunityPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSubscriber, setIsSubscriber] = useState(false); // This should be determined by your authentication logic

  const discussions: Discussion[] = [
    { id: 1, title: "Best practices for responsive design in 2023", author: "Alice Johnson", date: "2023-10-15", replies: 23, likes: 45 },
    { id: 2, title: "How to effectively use color theory in UI design", author: "Bob Smith", date: "2023-10-14", replies: 15, likes: 32 },
    { id: 3, title: "Tips for improving website accessibility", author: "Charlie Brown", date: "2023-10-13", replies: 18, likes: 27 },
    { id: 4, title: "Designing for dark mode: Dos and Don'ts", author: "Diana Prince", date: "2023-10-12", replies: 30, likes: 56 },
    { id: 5, title: "The impact of AI on UX design", author: "Ethan Hunt", date: "2023-10-11", replies: 42, likes: 78 },
  ];

  const filteredDiscussions = discussions.filter(discussion =>
    discussion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    discussion.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-indigo-900">The Design Flow Community</h1>
      <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        Connect with fellow designers, share your insights, and grow together in our vibrant community.
      </p>

      <div className="mb-12 flex justify-center">
        <a
          href="https://discord.gg/your-discord-invite-link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition duration-300 shadow-md hover:shadow-lg"
        >
          <MessageSquare className="w-5 h-5 mr-2" />
          Join our Discord Community
        </a>
      </div>

      <div className="mb-8">
        <div className="max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search discussions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden mb-12">
        <h2 className="text-2xl font-bold p-6 bg-indigo-50 text-indigo-900">Recent Discussions</h2>
        <ul>
          {filteredDiscussions.map((discussion) => (
            <li key={discussion.id} className="border-b border-gray-200 last:border-b-0">
              <Link to={`/community/discussion/${discussion.id}`} className="block p-6 hover:bg-gray-50 transition duration-150 ease-in-out">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{discussion.title}</h3>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{discussion.author} • {discussion.date}</span>
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center"><MessageCircle className="w-4 h-4 mr-1" /> {discussion.replies}</span>
                    <span className="flex items-center"><ThumbsUp className="w-4 h-4 mr-1" /> {discussion.likes}</span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {!isSubscriber && (
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-8 mb-12">
          <div className="flex items-center mb-4">
            <Lock className="w-8 h-8 text-indigo-600 mr-4" />
            <h2 className="text-2xl font-bold text-indigo-900">Unlock Full Community Access</h2>
          </div>
          <p className="text-lg mb-6 text-gray-700">
            Join our community to participate in discussions, access exclusive content, and connect with fellow designers. 
            Subscribe to The Design Flow to unlock all community features.
          </p>
          <Link
            to="/subscribe"
            className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition duration-300 shadow-md hover:shadow-lg"
          >
            <Users className="w-5 h-5 mr-2" />
            Join the Community
          </Link>
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Users className="w-12 h-12 text-indigo-600 mb-4" />
          <h3 className="text-xl font-bold mb-2 text-gray-900">Connect with Peers</h3>
          <p className="text-gray-600">Network with designers from around the world and expand your professional circle.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <MessageCircle className="w-12 h-12 text-indigo-600 mb-4" />
          <h3 className="text-xl font-bold mb-2 text-gray-900">Share Knowledge</h3>
          <p className="text-gray-600">Participate in discussions, ask questions, and share your expertise with the community.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Zap className="w-12 h-12 text-indigo-600 mb-4" />
          <h3 className="text-xl font-bold mb-2 text-gray-900">Stay Inspired</h3>
          <p className="text-gray-600">Get inspired by the latest design trends and creative ideas shared by community members.</p>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;