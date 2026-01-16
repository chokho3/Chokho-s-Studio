
import React from 'react';
import { ViewType } from '../types';

interface NavbarProps {
  view: ViewType;
  setView: (v: ViewType) => void;
}

const Navbar: React.FC<NavbarProps> = ({ view, setView }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => setView('HOME')}
          >
            <span className="text-2xl font-bold tracking-tighter">
              CHOKHO'S <span className="text-purple-500 group-hover:text-purple-400 transition-colors">STUDIO</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Services</a>
            <a href="#portfolio" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Portfolio</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Contact</a>
            <button 
              onClick={() => setView(view === 'HOME' ? 'ADMIN' : 'HOME')}
              className="px-5 py-2 rounded-full border border-purple-500/30 text-purple-400 hover:bg-purple-500 hover:text-white transition-all text-sm font-semibold"
            >
              {view === 'HOME' ? 'Admin Dashboard' : 'Back to Site'}
            </button>
          </div>

          <div className="md:hidden">
             <button 
              onClick={() => setView(view === 'HOME' ? 'ADMIN' : 'HOME')}
              className="p-2 text-purple-400"
            >
              {view === 'HOME' ? '⚙️' : '🏠'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
