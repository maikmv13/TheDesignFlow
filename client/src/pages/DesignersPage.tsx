import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ChevronDown, Lock, Filter, Search } from 'lucide-react';

export interface Designer {
  id: number;
  name: string;
  website: string;
  nationality: string;
  period: string;
  specialty: string;
  description: string;
}

export const designers: Designer[] = [
  {
    id: 1,
    name: "Ferruccio Laviani",
    website: "http://www.ferrucciolaviani.com",
    nationality: "Italian",
    period: "1990s-present",
    specialty: "Product Design",
    description: "Italian designer known for his work in lighting and furniture for Kartell and others."
  },
  {
    id: 2,
    name: "Vitaly Bulgarov",
    website: "http://vitalybulgarov.com",
    nationality: "Moldovan",
    period: "2010s-present",
    specialty: "Diseño Mecánico 3D",
    description: "Diseñador para cine, juegos y robótica, trabajó para Blizzard, ILM, Boston Dynamics"
  },
  {
    id: 3,
    name: "Gleb Alexandrov",
    website: "https://www.creativeshrimp.com",
    nationality: "Belarusian",
    period: "2010s-present",
    specialty: "Arte y Educación en 3D",
    description: "Educador de Blender, conocido por tutoriales y recursos de iluminación"
  },
  {
    id: 4,
    name: "Grant Warwick",
    website: "http://masteringcgi.com.au",
    nationality: "Australian",
    period: "2010s-present",
    specialty: "Educación en 3D",
    description: "Especialista en V-Ray y educador en técnicas de iluminación y texturización"
  },
  {
    id: 5,
    name: "Rafael Grassetti",
    website: "https://www.artstation.com/rafagrassetti",
    nationality: "Brazilian",
    period: "2010s-present",
    specialty: "Modelado y Escultura 3D",
    description: "Artista principal de God of War y escultor de personajes"
  },
  {
    id: 6,
    name: "Fausto De Martini",
    website: "https://www.artstation.com/fausto",
    nationality: "Brazilian",
    period: "2010s-present",
    specialty: "Diseño y Concepto 3D",
    description: "Trabajó para Blizzard, Paramount, Netflix, en diseño de personajes y vehículos"
  },
  {
    id: 7,
    name: "Oleg Ushenok",
    website: "https://www.artstation.com/olegushenok",
    nationality: "Ukrainian",
    period: "2010s-present",
    specialty: "Diseño Hard-Surface",
    description: "Conocido por sus kits de diseño y modelado hard-surface"
  },
  {
    id: 8,
    name: "Jama Jurabaev",
    website: "https://www.jama-jurabaev.com",
    nationality: "Tajik",
    period: "2010s-present",
    specialty: "Concepto y Arte 3D",
    description: "Trabajó en películas como Star Wars y Avengers, educador en 2D y 3D"
  },
  {
    id: 9,
    name: "Goro Fujita",
    website: "http://gorosart.com",
    nationality: "Japanese",
    period: "2010s-present",
    specialty: "Arte y Animación VR",
    description: "Pionero en la creación de arte y animaciones en VR"
  },
  {
    id: 10,
    name: "Julien Kaspar",
    website: "https://www.julienkaspar.com",
    nationality: "German",
    period: "2010s-present",
    specialty: "Escultura y Modelado 3D",
    description: "Artista y educador en Blender, trabajó en el estudio Blender Animation"
  },
  {
    id: 11,
    name: "José Alves da Silva",
    website: "https://www.artstation.com/zepedroalves",
    nationality: "Portuguese",
    period: "2010s-present",
    specialty: "Carácter y Escultura 3D",
    description: "Ganador de múltiples premios en diseño de personajes y esculturas"
  },
  {
    id: 12,
    name: "YanSculpts",
    website: "https://www.youtube.com/c/YanSculpts",
    nationality: "Unknown",
    period: "2010s-present",
    specialty: "Educación y Escultura 3D",
    description: "Conocido por sus tutoriales de escultura en Blender en YouTube"
  },
  {
    id: 13,
    name: "Steven Wang",
    website: "https://www.artstation.com/swang",
    nationality: "Taiwanese",
    period: "2010s-present",
    specialty: "Modelado de Personajes",
    description: "Artista destacado en modelado y texturización de personajes"
  }
];

const DesignersPage: React.FC = () => {
  const [displayedDesigners, setDisplayedDesigners] = useState<Designer[]>([]);
  const [isSubscriber, setIsSubscriber] = useState(false); // This should be determined by your authentication logic
  const [isRegistered, setIsRegistered] = useState(false); // This should be determined by your authentication logic
  const [filters, setFilters] = useState({
    nationality: '',
    period: '',
    specialty: ''
  });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Apply filters and limit to 10 designers for non-subscribers
    let filteredDesigners = designers;
    if (isRegistered) {
      filteredDesigners = filteredDesigners.filter(d => 
        d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.nationality.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.specialty.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (filters.nationality) {
        filteredDesigners = filteredDesigners.filter(d => d.nationality.toLowerCase().includes(filters.nationality.toLowerCase()));
      }
      if (filters.period) {
        filteredDesigners = filteredDesigners.filter(d => d.period.toLowerCase().includes(filters.period.toLowerCase()));
      }
      if (filters.specialty) {
        filteredDesigners = filteredDesigners.filter(d => d.specialty.toLowerCase().includes(filters.specialty.toLowerCase()));
      }
    }
    setDisplayedDesigners(isSubscriber ? filteredDesigners : filteredDesigners.slice(0, 10));
  }, [isSubscriber, isRegistered, filters, searchTerm]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-indigo-900">Famous Designers</h1>
      <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        Explore our curated list of influential designers who have shaped the world of design.
      </p>
      
      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/2 relative">
            <input
              type="text"
              placeholder="Search designers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          {isRegistered && (
            <div className="w-full md:w-1/2 flex space-x-4">
              <input
                type="text"
                name="nationality"
                placeholder="Filter by Nationality"
                value={filters.nationality}
                onChange={handleFilterChange}
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                name="specialty"
                placeholder="Filter by Specialty"
                value={filters.specialty}
                onChange={handleFilterChange}
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          )}
        </div>
      </div>
      
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nationality</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Period</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specialty</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Website</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {displayedDesigners.map((designer) => (
              <tr key={designer.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link to={`/designers/${designer.id}`} className="text-indigo-600 hover:text-indigo-900 font-medium">
                    {designer.name}
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{designer.nationality}</td>
                <td className="px-6 py-4 whitespace-nowrap">{designer.period}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {designer.specialty}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <a
                    href={designer.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-900 flex items-center"
                  >
                    Visit <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {!isSubscriber && designers.length > displayedDesigners.length && (
        <div className="mt-12 bg-indigo-50 border border-indigo-200 rounded-lg p-8">
          <div className="flex items-center mb-4">
            <Lock className="w-8 h-8 text-indigo-600 mr-4" />
            <h2 className="text-2xl font-bold text-indigo-900">Unlock More Designer Profiles</h2>
          </div>
          <p className="text-lg mb-6 text-gray-700">
            You're currently viewing {displayedDesigners.length} out of {designers.length} designers in our database. 
            Subscribe to The Design Flow to access our full database of famous designers and their works.
            {isRegistered && " As a registered user, you can use the filters to explore the designers, but you'll need to subscribe to see all entries."}
          </p>
          <Link
            to="/subscribe"
            className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition duration-300 shadow-md hover:shadow-lg"
          >
            <Lock className="w-5 h-5 mr-2" />
            Subscribe Now
          </Link>
        </div>
      )}
    </div>
  );
};

export default DesignersPage;