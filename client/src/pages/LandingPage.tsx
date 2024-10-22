import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Zap, BookOpen, Users, Star, ChevronDown } from 'lucide-react';

interface Article {
  id: number;
  date: string;
  title: string;
  readTime: string;
  featured?: boolean;
}

interface FreeNewsletter {
  id: number;
  titleBold: string;
  titleLight: string;
  pattern: string;
  bgColor: string;
  textColor: string;
  smallTalk: string;
}

const LandingPage: React.FC = () => {
  const [visibleArticles, setVisibleArticles] = useState(5);

  const freeNewsletters: FreeNewsletter[] = [
    {
      id: 1,
      titleBold: "FLOW FREE #1 Figma",
      titleLight: "The Ultimate Collaborative Design Tool",
      pattern: "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
      bgColor: "#6366f1",
      textColor: "white",
      smallTalk: "Discover how Figma is revolutionizing collaborative design workflows!"
    },
    {
      id: 2,
      titleBold: "FLOW FREE #2 Adobe XD",
      titleLight: "Streamlining UI/UX Design and Prototyping",
      pattern: "data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
      bgColor: "#8b5cf6",
      textColor: "white",
      smallTalk: "Learn how Adobe XD is transforming the UI/UX design process!"
    },
    {
      id: 3,
      titleBold: "FLOW FREE #3 Sketch",
      titleLight: "The Digital Design App for Mac",
      pattern: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='24' viewBox='0 0 88 24'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='autumn' fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M10 0l30 15 2 1V2.18A10 10 0 0 0 41.76 0H39.7a8 8 0 0 1 .3 2.18v10.58L14.47 0H10zm31.76 24a10 10 0 0 0-5.29-6.76L4 1 2 0v13.82a10 10 0 0 0 5.53 8.94L10 24h4.47l-6.05-3.02A8 8 0 0 1 4 13.82V3.24l31.58 15.78A8 8 0 0 1 39.7 24h2.06zM78 24l2.47-1.24A10 10 0 0 0 86 13.82V0l-2 1-32.47 16.24A10 10 0 0 0 46.24 24h2.06a8 8 0 0 1 4.12-4.98L84 3.24v10.58a8 8 0 0 1-4.42 7.16L73.53 24H78zm0-24L48 15l-2 1V2.18A10 10 0 0 1 46.24 0h2.06a8 8 0 0 0-.3 2.18v10.58L73.53 0H78z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
      bgColor: "#ec4899",
      textColor: "white",
      smallTalk: "Explore the power of Sketch for creating stunning digital designs on Mac!"
    },
  ];

  const allArticles: Article[] = [
    { id: 1, date: 'OCT. 18', title: 'FLOW #130 - [SPECIAL] 10 Innovative Design Software Solutions', readTime: '5 min read', featured: true },
    { id: 2, date: 'OCT. 11', title: 'FLOW #129 - Revolutionizing Design in E-commerce and Education', readTime: '8 min read' },
    { id: 3, date: 'OCT. 04', title: 'FLOW #128 - AI-Powered Design: The Future of Creativity', readTime: '5 min read' },
    { id: 4, date: 'SEP. 27', title: 'FLOW #127 - Designing for a Better World: Sustainable UX Practices', readTime: '8 min read' },
    { id: 5, date: 'SEP. 20', title: 'FLOW #126 - [SPECIAL] 18 Game-Changing Design Extensions', readTime: '6 min read' },
    { id: 6, date: 'SEP. 13', title: 'FLOW #125 - The Rise of No-Code Design Platforms', readTime: '7 min read' },
    { id: 7, date: 'SEP. 06', title: 'FLOW #124 - Mastering Color Theory in Digital Design', readTime: '6 min read' },
    { id: 8, date: 'AUG. 30', title: 'FLOW #123 - Accessibility in Design: Creating for All Users', readTime: '7 min read' },
    { id: 9, date: 'AUG. 23', title: 'FLOW #122 - The Impact of Virtual Reality on UX Design', readTime: '8 min read' },
    { id: 10, date: 'AUG. 16', title: 'FLOW #121 - Minimalism vs. Maximalism: Finding the Right Balance', readTime: '6 min read' },
  ];

  const loadMore = () => {
    setVisibleArticles(prevCount => Math.min(prevCount + 5, allArticles.length));
  };

  const subscriptionBenefits = [
    { icon: Zap, title: 'Exclusive Content', description: 'Access premium design resources and in-depth articles', color: 'text-yellow-400' },
    { icon: BookOpen, title: 'Weekly Insights', description: 'Curated design tools and trends delivered to your inbox', color: 'text-green-400' },
    { icon: Users, title: 'Community Access', description: 'Join a network of passionate designers for collaboration and growth', color: 'text-pink-400' },
  ];

  return (
    <div className="bg-gradient-to-b from-indigo-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-12 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-900 mb-4">
            The Design Flow
          </h1>
          <p className="text-xl md:text-2xl font-light text-indigo-700 uppercase tracking-wide mb-4">
            Your Weekly Design Inspiration
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover curated design tools, resources, and insights every week. Join our community of 10,000+ designers and elevate your creative process. 🎨✨
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/subscribe"
              className="inline-flex items-center bg-indigo-600 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300 shadow-lg hover:shadow-xl"
            >
              Subscribe Now <ArrowRight className="ml-2" />
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center bg-white text-indigo-600 px-6 py-2 rounded-full text-lg font-semibold hover:bg-indigo-50 transition duration-300 shadow-lg hover:shadow-xl"
            >
              Login
            </Link>
          </div>
        </section>

        <section className="py-10">
          <h2 className="text-3xl font-bold text-indigo-900 mb-2 text-center">Free Newsletters</h2>
          <p className="text-lg text-gray-600 mb-8 text-center">Get a taste of our premium content with these free newsletters</p>
          <div className="grid md:grid-cols-3 gap-6">
            {freeNewsletters.map((newsletter) => (
              <Link 
                key={newsletter.id} 
                to={`/blog/${newsletter.id}`}
                className="rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
                style={{
                  backgroundColor: newsletter.bgColor,
                  backgroundImage: `url("${newsletter.pattern}")`,
                }}
              >
                <div className="p-6 h-48 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-1" style={{ color: newsletter.textColor }}>{newsletter.titleBold}</h3>
                    <p className="text-sm uppercase tracking-wide mb-2" style={{ color: newsletter.textColor, opacity: 0.8 }}>{newsletter.titleLight}</p>
                    <p className="text-sm" style={{ color: newsletter.textColor }}>{newsletter.smallTalk}</p>
                  </div>
                  <span className="bg-white text-indigo-800 text-sm font-medium px-3 py-1 rounded-full self-start">
                    FREE
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="py-10">
          <div className="space-y-4">
            {allArticles.slice(0, visibleArticles).map((article) => (
              <div key={article.id} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-indigo-600">{article.date}</span>
                  {article.featured && (
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-0.5 rounded-full flex items-center">
                      <Star className="w-3 h-3 mr-1" /> Featured
                    </span>
                  )}
                </div>
                <Link to={`/blog/${article.id}`} className="text-lg font-bold text-gray-900 hover:text-indigo-600 block mb-1">
                  {article.title}
                </Link>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{article.readTime}</span>
                </div>
              </div>
            ))}
          </div>
          {visibleArticles < allArticles.length && (
            <div className="text-center mt-8">
              <button
                onClick={loadMore}
                className="bg-indigo-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-indigo-700 transition duration-300 flex items-center mx-auto"
              >
                Load More <ChevronDown className="ml-2" />
              </button>
            </div>
          )}
        </section>
      </div>

      <section
        className="w-full py-16"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"), linear-gradient(to right, #6366f1, #8b5cf6)`,
          backgroundRepeat: "repeat, no-repeat",
          backgroundSize: "auto, cover",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Why Subscribe?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {subscriptionBenefits.map((benefit, index) => (
              <div key={index} className="bg-white bg-opacity-20 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
                <benefit.icon className={`w-12 h-12 ${benefit.color} mb-4`} />
                <h3 className="text-xl font-bold mb-2 text-white">{benefit.title}</h3>
                <p className="text-indigo-100">{benefit.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/subscribe"
              className="inline-flex items-center bg-white text-indigo-700 px-6 py-3 rounded-full text-lg font-semibold hover:bg-indigo-100 transition duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Journey <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;