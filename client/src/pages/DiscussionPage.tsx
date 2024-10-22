import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle, ThumbsUp, Send, Lock } from 'lucide-react';

interface Discussion {
  id: number;
  title: string;
  author: string;
  date: string;
  content: string;
  replies: Reply[];
  likes: number;
}

interface Reply {
  id: number;
  author: string;
  date: string;
  content: string;
  likes: number;
}

const DiscussionPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [discussion, setDiscussion] = useState<Discussion | null>(null);
  const [newReply, setNewReply] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This should be determined by your authentication logic

  useEffect(() => {
    // Simulating an API call to fetch the discussion
    const fetchDiscussion = async () => {
      // In a real application, you would fetch this data from your API
      const dummyDiscussion: Discussion = {
        id: Number(id),
        title: "Best practices for responsive design in 2023",
        author: "Alice Johnson",
        date: "2023-10-15",
        content: "As we move further into 2023, responsive design remains crucial for creating seamless user experiences across devices. What are some of the best practices you've found effective this year? I'm particularly interested in hearing about new techniques for handling complex layouts and improving performance on mobile devices.",
        replies: [
          {
            id: 1,
            author: "Bob Smith",
            date: "2023-10-16",
            content: "Great topic! One practice I've found effective is using CSS Grid for layout and Flexbox for component-level arrangements. This combination provides both flexibility and control.",
            likes: 5
          },
          {
            id: 2,
            author: "Charlie Brown",
            date: "2023-10-17",
            content: "I've been focusing on performance lately. Using responsive images with srcset and sizes attributes has made a big difference in load times on mobile devices.",
            likes: 3
          }
        ],
        likes: 45
      };
      setDiscussion(dummyDiscussion);
    };

    fetchDiscussion();

    // Check if user is logged in (this should be replaced with your actual authentication logic)
    setIsLoggedIn(false); // Set to true to test logged-in user view
  }, [id]);

  const handleReplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReply.trim() && discussion && isLoggedIn) {
      const newReplyObj: Reply = {
        id: discussion.replies.length + 1,
        author: "Current User", // This should be the logged-in user's name
        date: new Date().toISOString().split('T')[0],
        content: newReply,
        likes: 0
      };
      setDiscussion({
        ...discussion,
        replies: [...discussion.replies, newReplyObj]
      });
      setNewReply('');
    }
  };

  if (!discussion) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/community" className="flex items-center text-indigo-600 hover:text-indigo-800 mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Community
      </Link>
      
      <article className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{discussion.title}</h1>
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <span>{discussion.author} • {discussion.date}</span>
            <span className="ml-4 flex items-center">
              <ThumbsUp className="w-4 h-4 mr-1" /> {discussion.likes} likes
            </span>
          </div>
          <div className="prose max-w-none mb-4">
            <p>{discussion.content}</p>
          </div>
        </div>
      </article>

      <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
        <h2 className="text-xl font-bold p-6 bg-indigo-50 text-indigo-900">Replies</h2>
        <ul>
          {discussion.replies.map((reply) => (
            <li key={reply.id} className="border-b border-gray-200 last:border-b-0 p-6">
              <div className="flex justify-between items-start mb-2">
                <span className="font-semibold">{reply.author}</span>
                <span className="text-sm text-gray-500">{reply.date}</span>
              </div>
              <p className="text-gray-700 mb-2">{reply.content}</p>
              <div className="flex items-center text-sm text-gray-500">
                <ThumbsUp className="w-4 h-4 mr-1" /> {reply.likes} likes
              </div>
            </li>
          ))}
        </ul>
      </div>

      {isLoggedIn ? (
        <form onSubmit={handleReplySubmit} className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Add a Reply</h2>
            <textarea
              value={newReply}
              onChange={(e) => setNewReply(e.target.value)}
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-indigo-500"
              rows={4}
              placeholder="Type your reply here..."
              required
            ></textarea>
            <button
              type="submit"
              className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-indigo-700 transition duration-300 flex items-center"
            >
              <Send className="w-4 h-4 mr-2" />
              Post Reply
            </button>
          </div>
        </form>
      ) : (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <Lock className="w-6 h-6 text-indigo-600 mr-2" />
              <h2 className="text-xl font-bold">Join the Conversation</h2>
            </div>
            <p className="text-gray-700 mb-4">
              To participate in discussions and post replies, please log in or create an account.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/login"
                className="bg-indigo-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-indigo-700 transition duration-300"
              >
                Log In
              </Link>
              <Link
                to="/subscribe"
                className="bg-white text-indigo-600 px-4 py-2 rounded-full font-semibold border border-indigo-600 hover:bg-indigo-50 transition duration-300"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiscussionPage;