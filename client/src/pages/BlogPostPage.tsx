import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, ArrowLeft, Star, Lock, Calendar, User, Tag, ThumbsUp, MessageCircle, Share2 } from 'lucide-react';
import { useUser } from '../../client/src/contexts/UserContext';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  readTime: string;
  content: string;
  category: string;
  author: string;
  featured?: boolean;
  subscriberOnly?: boolean;
  likes: number;
  comments: number;
}

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { isSubscriber } = useUser();

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      // In a real application, you would fetch this data from your API
      const posts: BlogPost[] = [
        {
          id: 1,
          title: "Mastering Figma: The Ultimate Collaborative Design Tool",
          date: "Oct 18, 2023",
          readTime: "8 min read",
          category: "UI/UX Design",
          author: "John Doe",
          featured: true,
          subscriberOnly: false,
          likes: 120,
          comments: 25,
          content: `
            <h2>Introduction to Figma</h2>
            <p>Figma has revolutionized the world of design with its powerful collaborative features and intuitive interface. As a vector graphics editor and prototyping tool, Figma stands out for its ability to facilitate real-time collaboration, making it an indispensable asset for modern design teams.</p>
            <!-- More content... -->
          `
        },
        {
          id: 2,
          title: "Adobe XD: Streamlining UI/UX Design and Prototyping",
          date: "Oct 11, 2023",
          readTime: "7 min read",
          category: "UI/UX Design",
          author: "Jane Smith",
          featured: false,
          subscriberOnly: true,
          likes: 85,
          comments: 18,
          content: `
            <h2>Introduction to Adobe XD</h2>
            <p>Adobe XD (Experience Design) is a powerful vector-based user experience design tool that has quickly become a favorite among designers. Part of the Adobe Creative Cloud suite, XD seamlessly integrates with other Adobe products, offering a comprehensive solution for UI/UX design and prototyping.</p>
            <!-- More content... -->
          `
        },
        {
          id: 3,
          title: "Sketch: The Digital Design App for Mac",
          date: "Oct 04, 2023",
          readTime: "7 min read",
          category: "UI/UX Design",
          author: "Mike Johnson",
          featured: false,
          subscriberOnly: true,
          likes: 92,
          comments: 22,
          content: `
            <h2>Introduction to Sketch</h2>
            <p>Sketch is a vector graphics editor and digital design app exclusively for macOS. Since its launch in 2010, Sketch has become a staple in many designers' toolkits, known for its simplicity, powerful features, and extensive plugin ecosystem.</p>
            <!-- More content... -->
          `
        }
      ];

      const selectedPost = posts.find(p => p.id === Number(id));
      setPost(selectedPost || null);
      setIsLoading(false);
    };

    fetchPost();
  }, [id]);

  const renderContent = () => {
    if (!post) {
      return (
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-indigo-900 mb-4">Article Not Found</h2>
          <p className="text-lg text-gray-700">
            We couldn't find the article you're looking for. It may have been moved or deleted.
          </p>
          <Link
            to="/"
            className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition duration-300 shadow-md hover:shadow-lg mt-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
      );
    }

    if (post.subscriberOnly && !isSubscriber) {
      return (
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-8 mt-8">
          <div className="flex items-center mb-4">
            <Lock className="w-8 h-8 text-indigo-600 mr-4" />
            <h2 className="text-2xl font-bold text-indigo-900">Subscriber-Only Content</h2>
          </div>
          <p className="text-lg mb-6 text-gray-700">
            This article is exclusive to our subscribers. Join The Design Flow to access this and other premium content.
          </p>
          <Link
            to="/subscribe"
            className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition duration-300 shadow-md hover:shadow-lg"
          >
            <Lock className="w-5 h-5 mr-2" />
            Subscribe Now
          </Link>
        </div>
      );
    }

    return <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }}></div>;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/" className="flex items-center text-indigo-600 hover:text-indigo-800 mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Articles
      </Link>
      <article className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {isLoading ? "Loading..." : post ? post.title : "Article Not Found"}
          </h1>
          {!isLoading && post && (
            <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6">
              <span className="flex items-center mr-4 mb-2">
                <Calendar className="w-4 h-4 mr-1" />
                {post.date}
              </span>
              <span className="flex items-center mr-4 mb-2">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTime}
              </span>
              <span className="flex items-center mr-4 mb-2">
                <User className="w-4 h-4 mr-1" />
                {post.author}
              </span>
              <span className="flex items-center mr-4 mb-2">
                <Tag className="w-4 h-4 mr-1" />
                {post.category}
              </span>
              {post.featured && (
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center mb-2">
                  <Star className="w-3 h-3 mr-1" /> Featured
                </span>
              )}
            </div>
          )}
          {renderContent()}
          {!isLoading && post && !post.subscriberOnly && (
            <div className="mt-8 flex items-center justify-between border-t pt-4">
              <div className="flex items-center space-x-4">
                <button className="flex items-center text-gray-500 hover:text-indigo-600">
                  <ThumbsUp className="w-5 h-5 mr-1" />
                  <span>{post.likes} Likes</span>
                </button>
                <button className="flex items-center text-gray-500 hover:text-indigo-600">
                  <MessageCircle className="w-5 h-5 mr-1" />
                  <span>{post.comments} Comments</span>
                </button>
              </div>
              <button className="flex items-center text-gray-500 hover:text-indigo-600">
                <Share2 className="w-5 h-5 mr-1" />
                <span>Share</span>
              </button>
            </div>
          )}
        </div>
      </article>
    </div>
  );
};

export default BlogPostPage;