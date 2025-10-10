'use client';

import { useState, useEffect } from 'react';

interface PodcastEpisode {
  title: string;
  description: string;
  url: string;
  date: string;
  thumbnail: string;
  videoId?: string;
}

interface PodcastLinksProps {
  title: string;
  episodes?: PodcastEpisode[];
}

export default function PodcastLinks({ title, episodes: initialEpisodes = [] }: PodcastLinksProps) {
  const [episodes, setEpisodes] = useState<PodcastEpisode[]>(initialEpisodes);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedEpisode, setSelectedEpisode] = useState<PodcastEpisode | null>(null);

  useEffect(() => {
    async function fetchEpisodes() {
      try {
        const response = await fetch('/api/youtube-episodes');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setEpisodes(data);
        setError(false);
      } catch (err) {
        console.error('Error fetching episodes:', err);
        setError(true);
        // Fallback to initial episodes if API fails
        if (initialEpisodes.length > 0) {
          setEpisodes(initialEpisodes);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchEpisodes();
  }, [initialEpisodes]);
  // Show skeleton loading state
  if (loading) {
    return (
      <section className="bg-white rounded-lg shadow-xl border-2 border-slate-300 p-4 md:p-8 flex flex-col h-full">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6 md:mb-8 border-b-2 border-slate-800 pb-4">
          <div className="flex items-center min-w-0">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-800 rounded-md flex items-center justify-center mr-4 shadow-lg flex-shrink-0">
              <span className="text-2xl md:text-3xl">🎙️</span>
            </div>
            <div className="min-w-0">
              <h2 className="text-xl md:text-3xl font-black text-slate-900 font-heading tracking-tight uppercase">{title}</h2>
              <p className="text-amber-600 text-sm md:text-base font-bold tracking-wide uppercase">Loading Latest Episodes...</p>
            </div>
          </div>
          <a 
            href="/podcasts" 
            className="text-slate-800 hover:text-amber-600 font-bold text-sm md:text-base flex items-center whitespace-nowrap ml-auto sm:ml-0 uppercase border-b-2 border-transparent hover:border-amber-600 transition-all"
          >
            View All
            <svg className="ml-1 h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 flex-1">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg border-2 border-slate-300 animate-pulse">
              <div className="aspect-video bg-gray-300"></div>
              <div className="p-4 md:p-6">
                <div className="h-5 bg-gray-300 rounded w-3/4 mb-3"></div>
                <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-5/6 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/4 mb-4"></div>
                <div className="h-10 bg-gray-300 rounded w-full"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white rounded-lg shadow-xl border-2 border-slate-300 p-4 md:p-8 flex flex-col h-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6 md:mb-8 border-b-2 border-slate-800 pb-4">
        <div className="flex items-center min-w-0">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-800 rounded-md flex items-center justify-center mr-4 shadow-lg flex-shrink-0">
            <span className="text-2xl md:text-3xl">🎙️</span>
          </div>
          <div className="min-w-0">
            <h2 className="text-xl md:text-3xl font-black text-slate-900 font-heading tracking-tight uppercase">{title}</h2>
            <p className="text-amber-600 text-sm md:text-base font-bold tracking-wide uppercase">
              Latest Fishing Podcasts
              {error && <span className="text-red-600"> (Cached)</span>}
            </p>
          </div>
        </div>
        <a 
          href="/podcasts" 
          className="text-slate-800 hover:text-amber-600 font-bold text-sm md:text-base flex items-center whitespace-nowrap ml-auto sm:ml-0 uppercase border-b-2 border-transparent hover:border-amber-600 transition-all"
        >
          View All
          <svg className="ml-1 h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 flex-1">
        {episodes.length === 0 && (
          <div className="col-span-2 text-center py-8 text-gray-500">
            <p>No episodes available at the moment.</p>
          </div>
        )}
        {episodes.length > 0 && episodes.map((episode, index) => (
          <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-slate-300 hover:border-amber-600">
            {/* YouTube Thumbnail */}
            <div 
              className="relative aspect-video bg-gray-200 cursor-pointer"
              onClick={() => setSelectedEpisode(episode)}
            >
              <img
                src={episode.thumbnail}
                alt={episode.title}
                className="w-full h-full object-cover"
              />
              {/* Play icon overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-xl transform hover:scale-110 transition-transform border-2 border-white">
                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="p-4 md:p-6">
              <div className="mb-3 md:mb-4">
                <h3 
                  className="text-base md:text-lg font-black text-slate-900 mb-2 line-clamp-2 cursor-pointer hover:text-amber-700 transition-colors tracking-tight"
                  onClick={() => setSelectedEpisode(episode)}
                >
                  {episode.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-600 mb-2 line-clamp-3 font-medium">{episode.description}</p>
                <p className="text-amber-600 font-bold text-xs md:text-sm uppercase tracking-wide">{episode.date}</p>
              </div>

              <div className="pt-3 md:pt-4 border-t-2 border-slate-300">
                <button
                  onClick={() => setSelectedEpisode(episode)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 rounded-md transition-colors duration-300 text-sm font-bold shadow-lg flex items-center justify-center gap-2 w-full uppercase tracking-wide"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Watch on YouTube
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedEpisode && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedEpisode(null)}
        >
          <div 
            className="bg-white rounded-xl md:rounded-2xl overflow-hidden max-w-5xl w-full shadow-2xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Video Player */}
            <div className="relative aspect-video bg-black">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${selectedEpisode.videoId}?autoplay=1`}
                title={selectedEpisode.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            
            {/* Episode Info */}
            <div className="p-4 md:p-6">
              <div className="flex justify-between items-start gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-lg md:text-2xl font-black text-slate-900 mb-2 tracking-tight">{selectedEpisode.title}</h3>
                  <p className="text-slate-700 text-sm md:text-base font-medium">{selectedEpisode.description}</p>
                </div>
                <button
                  onClick={() => setSelectedEpisode(null)}
                  className="text-slate-400 hover:text-slate-700 transition-colors flex-shrink-0"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t-2 border-slate-300">
                <p className="text-amber-600 font-bold text-sm uppercase tracking-wide">{selectedEpisode.date}</p>
                <a
                  href={selectedEpisode.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-700 font-bold text-sm flex items-center gap-2 uppercase tracking-wide"
                >
                  Watch on YouTube
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
