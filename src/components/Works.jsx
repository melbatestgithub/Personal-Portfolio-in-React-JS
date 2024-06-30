// Works.js

import React from 'react';

const Works = ({ title, imageUrl, liveDemoUrl, sourceCodeUrl, style }) => {
  return (
    <div style={{ backgroundColor: ' #3D619B', borderRadius: '8px', padding: '20px', margin: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', ...style }}>
      <img style={{ width: '100%', height: 'auto', borderRadius: '8px' }} src={imageUrl} alt={title} />
      <p style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#ffffff',marginTop:"15px" }}>{title}</p>
      <div style={{ marginTop: '20px' }} className='flex gap-6'>
        <a className='bg-sky-700  px-2 py-3 rounded-md' style={{ fontWeight:"bold",color:"white", textDecoration: 'none', marginRight: '10px' }} href={liveDemoUrl} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
        <a className='bg-sky-700 text-white px-2 py-3 rounded-md' style={{  fontWeight:"bold",color: 'white', textDecoration: 'none', marginRight: '10px' }} href={sourceCodeUrl} target="_blank" rel="noopener noreferrer">
          Source Code
        </a>
      </div>
    </div>
  );
};

export default Works;
