import React, { useState } from 'react';
import { CheckCircle, X, Zap, BookOpen, Users, Rocket, Check } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUser } from "../contexts/UserContext";

const SubscriptionPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('free');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [showAnnual, setShowAnnual] = useState(false);
  const navigate = useNavigate();
  const { login, updateSubscription } = useUser();

  const plans = [
    {
      name: 'FREE',
      monthlyPrice: '€0',
      annualPrice: '€0',
      smallTalk: 'Start your design journey',
      features: [
        'Weekly design inspiration',
        'Limited access to blog posts',
        'Basic community features'
      ]
    },
    {
      name: 'BASIC',
      monthlyPrice: '€7',
      annualPrice: '€65',
      smallTalk: 'Elevate your design skills',
      features: [
        'Full access to all blog posts',
        'Weekly curated design resources',
        'Monthly live Q&A sessions',
        'Access to design job board'
      ]
    },
    {
      name: 'PREMIUM',
      monthlyPrice: '€12',
      annualPrice: '€110',
      smallTalk: 'Master the art of design',
      features: [
        'Exclusive workshops and webinars',
        'One-on-one mentoring sessions',
        'Early access to design trend reports',
        'Custom portfolio review'
      ]
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/users', {
        name,
        email,
        password,
        role: 'user',
        subscription: selectedPlan
      });
      console.log('User registered:', response.data);
      
      login({
        id: response.data.id,
        name: response.data.name,
        email: response.data.email,
        subscriptionType: response.data.subscription as 'free' | 'basic' | 'premium'
      });

      updateSubscription(response.data.subscription as 'free' | 'basic' | 'premium');

      navigate('/');
    } catch (error) {
      console.error('Registration error:', error);
      alert('An error occurred during registration. Please try again.');
    }
  };

  const calculateSavings = (monthlyPrice: string, annualPrice: string) => {
    const monthly = parseFloat(monthlyPrice.replace('€', ''));
    const annual = parseFloat(annualPrice.replace('€', ''));
    const monthlyCost = monthly * 12;
    const savings = ((monthlyCost - annual) / monthlyCost) * 100;
    return savings.toFixed(0);
  };

  const allFeatures = Array.from(new Set(plans.flatMap(plan => plan.features)));

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-indigo-100 to-white">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex-1">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              <X className="h-6 w-6" />
            </Link>
          </div>
          <Link to="/" className="flex items-center space-x-2 flex-1 justify-center">
            <Rocket className="h-8 w-8 text-indigo-600" />
            <div className="flex flex-col">
              <span className="text-xs font-light tracking-wider text-gray-500 uppercase">THE</span>
              <span className="text-xl font-extrabold text-indigo-600 tracking-tight leading-none" style={{ fontFamily: "'Poppins', sans-serif" }}>Design Flow</span>
            </div>
          </Link>
          <div className="flex-1"></div>
        </div>
      </header>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-center mb-2 text-indigo-900">Choose Your Design Flow Plan</h1>
          <p className="text-lg text-gray-600 mb-6 text-center max-w-3xl mx-auto">
            Join our community of designers and elevate your creative process with curated resources and insights.
          </p>

          <div className="flex justify-center mb-6">
            <div className="bg-white rounded-full shadow-md p-1 inline-flex">
              <button
                onClick={() => setShowAnnual(false)}
                className={`px-4 py-2 rounded-full font-semibold transition duration-300 ${
                  !showAnnual ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setShowAnnual(true)}
                className={`px-4 py-2 rounded-full font-semibold transition duration-300 ${
                  showAnnual ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Annual
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {plans.map((plan) => (
              <div 
                key={plan.name} 
                className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 ${selectedPlan === plan.name.toLowerCase() ? 'ring-2 ring-indigo-600' : ''}`}
              >
                <div className="p-6">
                  <div className="flex flex-col items-center mb-4">
                    <span className="text-xs font-light tracking-wider text-gray-500 uppercase">THE</span>
                    <span className="text-lg font-extrabold text-indigo-600 tracking-tight leading-none" style={{ fontFamily: "'Poppins', sans-serif" }}>Design Flow</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-center text-indigo-900">{plan.name}</h3>
                  <p className="text-sm text-gray-600 text-center mb-4">{plan.smallTalk}</p>
                  <div className="mb-4 text-center">
                    <p className="text-3xl font-bold text-indigo-600">
                      {showAnnual ? plan.annualPrice : plan.monthlyPrice}
                      <span className="text-lg font-normal text-gray-600">
                        {showAnnual ? '/year' : '/month'}
                      </span>
                    </p>
                    {showAnnual && plan.name !== 'FREE' && (
                      <p className="text-sm text-green-600 mt-1">
                        Save {calculateSavings(plan.monthlyPrice, plan.annualPrice)}% per year
                      </p>
                    )}
                  </div>
                  <button
                    onClick={() => setSelectedPlan(plan.name.toLowerCase())}
                    className={`w-full py-2 px-4 rounded-full font-semibold transition duration-300 ${
                      selectedPlan === plan.name.toLowerCase()
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                        : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'
                    }`}
                  >
                    {selectedPlan === plan.name.toLowerCase() ? 'Selected' : 'Select Plan'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="grid md:grid-cols-2">
              <div className="bg-indigo-600 p-6 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-white mb-2">Subscribe Now</h2>
                <p className="text-indigo-100 mb-4 text-sm">
                  Join our community of designers and get access to exclusive content, resources, and insights.
                </p>
                <ul className="text-indigo-100 space-y-1 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Curated design resources
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Weekly newsletters
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Exclusive community access
                  </li>
                </ul>
              </div>
              <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold mb-2 text-indigo-900">
                    {selectedPlan === 'free' ? 'Register for Free Plan' : 'Subscribe to ' + selectedPlan.toUpperCase()}
                  </h3>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-indigo-700 transition duration-300"
                  >
                    {selectedPlan === 'free' ? 'Register' : 'Subscribe Now'}
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-6 text-center text-indigo-900">Feature Comparison</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-indigo-900 bg-indigo-50 border-b-2 border-indigo-200">Feature</th>
                      {plans.map(plan => (
                        <th key={plan.name} className={`px-6 py-3 text-center text-sm font-semibold text-indigo-900 bg-indigo-50 border-b-2 border-indigo-200 ${selectedPlan === plan.name.toLowerCase() ? 'bg-indigo-100' : ''}`}>
                          <span className="block text-lg mb-1">{plan.name}</span>
                          <span className="block text-indigo-600 font-bold">
                            {showAnnual ? plan.annualPrice : plan.monthlyPrice}
                            <span className="text-xs font-normal text-indigo-400">
                              {showAnnual ? '/year' : '/month'}
                            </span>
                          </span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {allFeatures.map((feature, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-6 py-4 text-sm text-gray-900 border-b border-gray-200">{feature}</td>
                        {plans.map(plan => (
                          <td key={plan.name} className={`px-6 py-4 text-center border-b border-gray-200 ${selectedPlan === plan.name.toLowerCase() ? 'bg-indigo-50' : ''}`}>
                            {plan.features.includes(feature) || plans.slice(0, plans.findIndex(p => p.name === plan.name)).some(p => p.features.includes(feature)) ? (
                              <Check className="w-6 h-6 text-green-500 mx-auto" />
                            ) : (
                              <X className="w-6 h-6 text-red-400 mx-auto" />
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td className="px-6 py-4 border-t-2 border-indigo-200"></td>
                      {plans.map(plan => (
                        <td key={plan.name} className={`px-6 py-4 text-center border-t-2 border-indigo-200 ${selectedPlan === plan.name.toLowerCase() ? 'bg-indigo-50' : ''}`}>
                          <button
                            onClick={() => setSelectedPlan(plan.name.toLowerCase())}
                            className={`py-2 px-4 rounded-full font-semibold transition duration-300 ${
                              selectedPlan === plan.name.toLowerCase()
                                ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                                : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'
                            }`}
                          >
                            {selectedPlan === plan.name.toLowerCase() ? 'Selected' : 'Select'}
                          </button>
                        </td>
                      ))}
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="bg-indigo-50 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-indigo-900">Why Subscribe?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-xl shadow-md">
              <Zap className="w-10 h-10 text-indigo-600 mb-2" />
              <h3 className="text-lg font-bold mb-1 text-gray-900">Exclusive Content</h3>
              <p className="text-sm text-gray-600">Access premium design resources and in-depth articles to boost your skills.</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md">
              <BookOpen className="w-10 h-10 text-indigo-600 mb-2" />
              <h3 className="text-lg font-bold mb-1 text-gray-900">Weekly Insights</h3>
              <p className="text-sm text-gray-600">Receive curated design tools and trends delivered straight to your inbox.</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md">
              <Users className="w-10 h-10 text-indigo-600 mb-2" />
              <h3 className="text-lg font-bold mb-1 text-gray-900">Community Access</h3>
              <p className="text-sm text-gray-600">Join a network of passionate designers for collaboration and growth.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubscriptionPage;