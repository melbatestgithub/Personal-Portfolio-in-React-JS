import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'; // Import icons

const Works = ({ title, imageUrl, liveDemoUrl, sourceCodeUrl, style }) => {
  return (
    <div 
      style={{
        backgroundColor: '#1E2A47', 
        borderRadius: '10px', 
        padding: '20px', 
        margin: '10px', 
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.3s ease-in-out', // Smooth hover effect
        ...style
      }}
      className="hover:scale-105"
    >
      <img 
        style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
        src={imageUrl} 
        alt={title} 
      />
      <p 
        style={{ 
          fontSize: '1.2rem', 
          fontWeight: 'bold', 
          color: '#ffffff', 
          marginTop: '15px',
          textAlign: 'center' 
        }}
      >
        {title}
      </p>
      <div className="flex justify-center gap-6 mt-4">
        {/* Live Demo Button */}
        <a 
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 transition-all px-4 py-2 rounded-md"
          style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}
          href={liveDemoUrl} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaExternalLinkAlt /> {/* Icon for live demo */}
         
        </a>
        {/* Source Code Button */}
        <a 
          className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 transition-all px-4 py-2 rounded-md"
          style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}
          href={sourceCodeUrl} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaGithub /> {/* Icon for source code */}
         
        </a>
      </div>
    </div>
  );
};

export default Works;
