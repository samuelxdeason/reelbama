'use client';

import { useState } from 'react';

interface NavigationProps {
  site: {
    title: string;
    logoUrl: string;
  };
}

export default function Navigation({ site }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-2">
          {/* Logo */}
          <div className="flex items-center min-w-0 flex-1 md:flex-initial">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-red-700 to-red-800 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-lg md:text-xl font-bold">🎣</span>
              </div>
              <div className="min-w-0">
                <h1 className="text-sm md:text-xl font-bold text-alabama-red font-heading truncate">{site.title}</h1>
                <p className="text-[10px] md:text-xs text-gray-600 hidden sm:block">Alabama Fishing Community</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-gray-700 hover:text-alabama-red px-3 py-2 text-sm font-medium transition-colors">
                Home
              </a>
              <div className="relative group">
                <button className="text-gray-700 hover:text-alabama-red px-3 py-2 text-sm font-medium transition-colors flex items-center">
                  Community
                  <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-200">
                  <div className="py-2">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-alabama-red flex items-center">
                      <span className="mr-2">👥</span>
                      Member Stories
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-alabama-red flex items-center">
                      <span className="mr-2">🏆</span>
                      Tournament Results
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-alabama-red flex items-center">
                      <span className="mr-2">📸</span>
                      Photo Gallery
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-alabama-red flex items-center">
                      <span className="mr-2">🎥</span>
                      Video Submissions
                    </a>
                  </div>
                </div>
              </div>
              <a href="#" className="text-gray-700 hover:text-alabama-red px-3 py-2 text-sm font-medium transition-colors">
                Blog
              </a>
              <div className="relative group">
                <button className="text-gray-700 hover:text-alabama-red px-3 py-2 text-sm font-medium transition-colors flex items-center">
                  Resources
                  <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-200">
                  <div className="py-2">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-alabama-red flex items-center">
                      <span className="mr-2">🎯</span>
                      Fishing Guides
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-alabama-red flex items-center">
                      <span className="mr-2">🗺️</span>
                      Lake Maps
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-alabama-red flex items-center">
                      <span className="mr-2">🌡️</span>
                      Weather & Conditions
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-alabama-red flex items-center">
                      <span className="mr-2">📅</span>
                      Event Calendar
                    </a>
                  </div>
                </div>
              </div>
              <a href="#" className="text-gray-700 hover:text-alabama-red px-3 py-2 text-sm font-medium transition-colors">
                Shop
              </a>
            </div>
          </div>

          {/* Search and CTA */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <div className="relative hidden lg:block">
              <input
                type="search"
                placeholder="Search catches, lakes, tips..."
                className="w-64 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-alabama-red focus:border-alabama-red text-gray-700 placeholder-gray-500"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <button className="bg-alabama-red hover:bg-red-800 text-white px-4 lg:px-6 py-2 rounded-lg text-sm font-medium transition-colors shadow-lg whitespace-nowrap">
              Join Community
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-alabama-red p-2"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 border-t">
              <a href="#" className="text-gray-700 hover:text-alabama-red block px-3 py-2 text-base font-medium">
                🏠 Home
              </a>
              <a href="#" className="text-gray-700 hover:text-alabama-red block px-3 py-2 text-base font-medium">
                👥 Community
              </a>
              <a href="#" className="text-gray-700 hover:text-alabama-red block px-3 py-2 text-base font-medium">
                📝 Blog
              </a>
              <a href="#" className="text-gray-700 hover:text-alabama-red block px-3 py-2 text-base font-medium">
                🎯 Resources
              </a>
              <a href="#" className="text-gray-700 hover:text-alabama-red block px-3 py-2 text-base font-medium">
                🛒 Shop
              </a>
              <div className="pt-4 border-t border-gray-200">
                <input
                  type="search"
                  placeholder="Search catches, lakes, tips..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-alabama-red"
                />
                <button className="w-full mt-3 bg-alabama-red hover:bg-red-800 text-white px-4 py-2 rounded-lg text-sm font-medium">
                  Join Community
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
