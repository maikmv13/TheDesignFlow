import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { designers, Designer } from './DesignersPage';

const DesignerDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const designer: Designer | undefined = designers.find(d => d.id === Number(id));

  if (!designer) {
    return <div>Designer not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/designers" className="flex items-center text-indigo-600 hover:text-indigo-800 mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Designers
      </Link>
      <h1 className="text-3xl font-bold mb-4">{designer.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">Details</h2>
          <p><strong>Nationality:</strong> {designer.nationality}</p>
          <p><strong>Period:</strong> {designer.period}</p>
          <p><strong>Specialty:</strong> {designer.specialty}</p>
          <a
            href={designer.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 flex items-center mt-2"
          >
            Visit Website <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Biography</h2>
          <p>{designer.description}</p>
          {/* Add more detailed biography here */}
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Notable Works</h2>
        {/* Add a list or grid of notable works here */}
        <p>Coming soon: A showcase of {designer.name}'s most influential designs and projects.</p>
      </div>
    </div>
  );
};

export default DesignerDetailPage;