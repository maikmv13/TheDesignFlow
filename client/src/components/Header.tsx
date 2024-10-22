import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Menu, X, User, LogOut } from 'lucide-react';
import { useUser } from '../contexts/UserContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user, isLoggedIn, logout } = useUser();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/" className="flex items-center space-x-2">
              <Rocket className="h-10 w-10 text-indigo-600" />
              <div className="flex flex-col">
                <span className="text-xs font-light tracking-wider text-gray-500 uppercase">THE</span>
                <span className="text-2xl font-extrabold text-indigo-600 tracking-tight leading-none" style={{ fontFamily: "'Poppins', sans-serif" }}>Design Flow</span>
              </div>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link to="/" className="text-base font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Home</Link>
            <Link to="/tools" className="text-base font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Tools</Link>
            <Link to="/designers" className="text-base font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Designers</Link>
            <Link to="/community" className="text-base font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Community</Link>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            {isLoggedIn ? (
              <div className="flex items-center">
                <span className="text-gray-700 mr-4">Welcome, {user?.name}</span>
                <button
                  onClick={logout}
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link to="/login" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                  Sign in
                </Link>
                <Link
                  to="/subscribe"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Subscribe
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
          <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition duration-150 ease-in-out">Home</Link>
          <Link to="/tools" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition duration-150 ease-in-out">Tools</Link>
          <Link to="/designers" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition duration-150 ease-in-out">Designers</Link>
          <Link to="/community" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition duration-150 ease-in-out">Community</Link>
          {isLoggedIn ? (
            <>
              <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-700">Welcome, {user?.name}</span>
              <button
                onClick={logout}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150 ease-in-out"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition duration-150 ease-in-out">Sign in</Link>
              <Link to="/subscribe" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150 ease-in-out">Subscribe</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;