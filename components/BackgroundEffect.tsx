
import React from 'react';

const BackgroundEffect: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Dynamic Animated Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-fuchsia-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      {/* Subtle Mesh Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#ffffff 0.5px, transparent 0.5px)`,
          backgroundSize: '24px 24px'
        }}
      ></div>
      
      {/* Overall Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-gray-900 to-black"></div>
    </div>
  );
};

export default BackgroundEffect;
