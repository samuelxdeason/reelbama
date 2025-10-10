'use client';

import { useState, useRef } from 'react';

interface NavigationProps {
  site: {
    title: string;
    logoUrl: string;
  };
}

export default function Navigation({ site }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [communityDropdownOpen, setCommunityDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const communityRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

  return (
    <>
    <nav className="bg-white shadow-lg border-b-4 border-slate-800 sticky top-0 z-[100]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28 md:h-36 lg:h-40 gap-2">
          {/* Logo */}
          <div className="flex items-center min-w-0 flex-1 md:flex-initial">
            <div className="flex-shrink-0 flex items-center gap-4 py-2">
              <img 
                src="/assets/logos/reelbama.png" 
                alt="REELBAMA Logo" 
                className="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 object-contain hover:scale-105 transition-transform duration-300 drop-shadow-xl"
              />
              <div className="min-w-0">
                <h1 className="text-xl md:text-3xl lg:text-4xl font-black text-slate-900 font-heading tracking-tight truncate drop-shadow-sm">{site.title}</h1>
                <p className="text-sm md:text-base text-amber-600 hidden sm:block font-bold tracking-wider uppercase">Alabama Fishing Community</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-slate-800 hover:text-amber-600 px-3 py-2 text-sm font-bold transition-all border-b-2 border-transparent hover:border-amber-600">
                Home
              </a>
             <div 
               ref={communityRef}
               className="relative"
               onMouseEnter={() => setCommunityDropdownOpen(true)}
               onMouseLeave={() => setCommunityDropdownOpen(false)}
             >
               <button className="text-slate-800 hover:text-amber-600 px-3 py-2 text-sm font-bold transition-all flex items-center border-b-2 border-transparent hover:border-amber-600">
                 Community
                 <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                   <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                 </svg>
               </button>
               {communityDropdownOpen && (
                 <div className="absolute left-0 top-full mt-1 w-56 bg-white rounded-md shadow-xl border-2 border-slate-200 z-[9999]">
                   <div className="py-2">
                     <a href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700 flex items-center font-semibold transition-all">
                       <span className="mr-2">👥</span>
                       Member Stories
                     </a>
                     <a href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700 flex items-center font-semibold transition-all">
                       <span className="mr-2">🏆</span>
                       Tournament Results
                     </a>
                     <a href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700 flex items-center font-semibold transition-all">
                       <span className="mr-2">📸</span>
                       Photo Gallery
                     </a>
                     <a href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700 flex items-center font-semibold transition-all">
                       <span className="mr-2">🎥</span>
                       Video Submissions
                     </a>
                   </div>
                 </div>
               )}
             </div>
              <a href="#" className="text-slate-800 hover:text-amber-600 px-3 py-2 text-sm font-bold transition-all border-b-2 border-transparent hover:border-amber-600">
                Blog
              </a>
             <div 
               ref={resourcesRef}
               className="relative"
               onMouseEnter={() => setResourcesDropdownOpen(true)}
               onMouseLeave={() => setResourcesDropdownOpen(false)}
             >
               <button className="text-slate-800 hover:text-amber-600 px-3 py-2 text-sm font-bold transition-all flex items-center border-b-2 border-transparent hover:border-amber-600">
                 Resources
                 <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                   <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                 </svg>
               </button>
               {resourcesDropdownOpen && (
                 <div className="absolute left-0 top-full mt-1 w-48 bg-white rounded-md shadow-xl border-2 border-slate-200 z-[9999]">
                   <div className="py-2">
                     <a href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700 flex items-center font-semibold transition-all">
                       <span className="mr-2">🎯</span>
                       Fishing Guides
                     </a>
                     <a href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700 flex items-center font-semibold transition-all">
                       <span className="mr-2">🗺️</span>
                       Lake Maps
                     </a>
                     <a href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700 flex items-center font-semibold transition-all">
                       <span className="mr-2">🌡️</span>
                       Weather & Conditions
                     </a>
                     <a href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700 flex items-center font-semibold transition-all">
                       <span className="mr-2">📅</span>
                       Event Calendar
                     </a>
                   </div>
                 </div>
               )}
             </div>
              <a href="#" className="text-slate-800 hover:text-amber-600 px-3 py-2 text-sm font-bold transition-all border-b-2 border-transparent hover:border-amber-600">
                Shop
              </a>
            </div>
          </div>

          {/* Search */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <div className="relative hidden lg:block">
              <input
                type="search"
                placeholder="Search catches, lakes, tips..."
                className="w-64 px-4 py-2 bg-gray-50 border-2 border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-amber-600 text-slate-800 placeholder-slate-500 font-medium"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <svg className="h-5 w-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-800 hover:text-amber-600 p-2 border-2 border-slate-300 rounded hover:border-amber-600 transition-all"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 border-t-2 border-slate-300">
              <a href="#" className="text-slate-800 hover:text-amber-700 hover:bg-amber-50 block px-3 py-2 text-base font-bold transition-all border-l-4 border-transparent hover:border-amber-600">
                🏠 Home
              </a>
              <a href="#" className="text-slate-800 hover:text-amber-700 hover:bg-amber-50 block px-3 py-2 text-base font-bold transition-all border-l-4 border-transparent hover:border-amber-600">
                👥 Community
              </a>
              <a href="#" className="text-slate-800 hover:text-amber-700 hover:bg-amber-50 block px-3 py-2 text-base font-bold transition-all border-l-4 border-transparent hover:border-amber-600">
                📝 Blog
              </a>
              <a href="#" className="text-slate-800 hover:text-amber-700 hover:bg-amber-50 block px-3 py-2 text-base font-bold transition-all border-l-4 border-transparent hover:border-amber-600">
                🎯 Resources
              </a>
              <a href="#" className="text-slate-800 hover:text-amber-700 hover:bg-amber-50 block px-3 py-2 text-base font-bold transition-all border-l-4 border-transparent hover:border-amber-600">
                🛒 Shop
              </a>
              <div className="pt-4 border-t-2 border-slate-300">
                <input
                  type="search"
                  placeholder="Search catches, lakes, tips..."
                  className="w-full px-3 py-2 bg-white border-2 border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-amber-600 text-slate-800 placeholder-slate-500 font-medium"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>

    </>
  );
}
