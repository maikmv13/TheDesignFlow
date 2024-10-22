import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, MessageCircle, ThumbsUp, Send, Lock } from 'lucide-react';

interface Tool {
  id: number;
  name: string;
  description: string;
  category: string;
  website: string;
  features: string[];
  pricing: string;
  pros: string[];
  cons: string[];
}

interface Comment {
  id: number;
  author: string;
  date: string;
  content: string;
  likes: number;
}

const ToolDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [tool, setTool] = useState<Tool | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This should be determined by your authentication logic

  useEffect(() => {
    // Simulating an API call to fetch the tool details
    const fetchTool = async () => {
      // In a real application, you would fetch this data from your API
      const dummyTool: Tool = {
        id: Number(id),
        name: "Figma",
        description: "Figma is a collaborative interface design tool that enables multiple designers to work together in real-time.",
        category: "UI/UX Design",
        website: "https://www.figma.com/",
        features: [
          "Real-time collaboration",
          "Vector networks",
          "Auto-layout",
          "Component libraries",
          "Prototyping",
          "Design systems"
        ],
        pricing: "Free for up to 3 projects, paid plans start at $12/month per editor",
        pros: [
          "Excellent collaboration features",
          "Browser-based, works on any OS",
          "Powerful prototyping capabilities",
          "Constantly improving with new features"
        ],
        cons: [
          "Requires internet connection",
          "Limited offline capabilities",
          "Learning curve for advanced features"
        ]
      };
      setTool(dummyTool);

      // Simulating fetching comments
      const dummyComments: Comment[] = [
        {
          id: 1,
          author: "Jane Doe",
          date: "2023-10-20",
          content: "Figma has revolutionized our design workflow. The collaboration features are unmatched!",
          likes: 15
        },
        {
          id: 2,
          author: "John Smith",
          date: "2023-10-21",
          content: "I love the auto-layout feature. It saves so much time when creating responsive designs.",
          likes: 8
        }
      ];
      setComments(dummyComments);
    };

    fetchTool();

    // Check if user is logged in (this should be replaced with your actual authentication logic)
    setIsLoggedIn(false); // Set to true to test logged-in user view
  }, [id]);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim() && isLoggedIn) {
      const newCommentObj: Comment = {
        id: comments.length + 1,
        author: "Current User", // This should be the logged-in user's name
        date: new Date().toISOString().split('T')[0],
        content: newComment,
        likes: 0
      };
      setComments([...comments, newCommentObj]);
      setNewComment('');
    }
  };

  if (!tool) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/tools" className="flex items-center text-indigo-600 hover:text-indigo-800 mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Tools
      </Link>
      
      <article className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{tool.name}</h1>
          <p className="text-lg text-gray-600 mb-4">{tool.description}</p>
          <div className="flex items-center mb-4">
            <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
              {tool.category}
            </span>
            <a
              href={tool.website}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 text-indigo-600 hover:text-indigo-800 flex items-center"
            >
              Visit Website <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Features</h2>
            <ul className="list-disc pl-5">
              {tool.features.map((feature, index) => (
                <li key={index} className="text-gray-600">{feature}</li>
              ))}
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Pricing</h2>
            <p className="text-gray-600">{tool.pricing}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Pros</h2>
              <ul className="list-disc pl-5">
                {tool.pros.map((pro, index) => (
                  <li key={index} className="text-green-600">{pro}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Cons</h2>
              <ul className="list-disc pl-5">
                {tool.cons.map((con, index) => (
                  <li key={index} className="text-red-600">{con}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>

      <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
        <h2 className="text-xl font-bold p-6 bg-indigo-50 text-indigo-900">Discussion</h2>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id} className="border-b border-gray-200 last:border-b-0 p-6">
              <div className="flex justify-between items-start mb-2">
                <span className="font-semibold">{comment.author}</span>
                <span className="text-sm text-gray-500">{comment.date}</span>
              </div>
              <p className="text-gray-700 mb-2">{comment.content}</p>
              <div className="flex items-center text-sm text-gray-500">
                <ThumbsUp className="w-4 h-4 mr-1" /> {comment.likes} likes
              </div>
            </li>
          ))}
        </ul>
      </div>

      {isLoggedIn ? (
        <form onSubmit={handleCommentSubmit} className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Add a Comment</h2>
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-indigo-500"
              rows={4}
              placeholder="Share your thoughts or experiences with this tool..."
              required
            ></textarea>
            <button
              type="submit"
              className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-indigo-700 transition duration-300 flex items-center"
            >
              <Send className="w-4 h-4 mr-2" />
              Post Comment
            </button>
          </div>
        </form>
      ) : (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <Lock className="w-6 h-6 text-indigo-600 mr-2" />
              <h2 className="text-xl font-bold">Join the Discussion</h2>
            </div>
            <p className="text-gray-700 mb-4">
              To participate in discussions and share your thoughts on this tool, please log in or create an account.
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

export default ToolDetailPage;