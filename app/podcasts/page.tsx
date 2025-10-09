'use client';

import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface PodcastEpisode {
  title: string;
  description: string;
  url: string;
  date: string;
  thumbnail: string;
  videoId?: string;
}

function EpisodeCard({ episode, onClick }: { episode: PodcastEpisode, onClick: () => void }) {
  return (
    <article className="bg-white rounded-xl md:rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* YouTube Thumbnail */}
      <div 
        className="relative aspect-video bg-gray-200 cursor-pointer"
        onClick={onClick}
      >
        <img 
          src={episode.thumbnail} 
          alt={episode.title}
          className="w-full h-full object-cover"
        />
        {/* Play icon overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
            <svg className="w-4 h-4 md:w-6 md:h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="p-3 md:p-6">
        <h3 
          className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-3 line-clamp-2 cursor-pointer hover:text-sunset-orange transition-colors"
          onClick={onClick}
        >
          {episode.title}
        </h3>
        <p className="text-gray-600 mb-3 md:mb-4 line-clamp-3 md:line-clamp-4 text-sm md:text-base">{episode.description}</p>
        <div className="flex items-center justify-between">
          <p className="text-sunset-orange font-medium text-xs md:text-sm">{episode.date}</p>
          <button
            onClick={onClick}
            className="bg-red-600 hover:bg-red-700 text-white px-4 md:px-6 py-1.5 md:py-2 rounded-lg transition-colors duration-300 text-xs md:text-sm font-semibold flex items-center gap-1 md:gap-2"
          >
            <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Watch
          </button>
        </div>
      </div>
    </article>
  );
}

function VideoModal({ episode, onClose }: { episode: PodcastEpisode | null, onClose: () => void }) {
  if (!episode) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl md:rounded-2xl overflow-hidden max-w-5xl w-full shadow-2xl animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Video Player */}
        <div className="relative aspect-video bg-black">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${episode.videoId}?autoplay=1`}
            title={episode.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        
        {/* Episode Info */}
        <div className="p-4 md:p-6">
          <div className="flex justify-between items-start gap-4 mb-4">
            <div className="flex-1">
              <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">{episode.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{episode.description}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <p className="text-sunset-orange font-medium text-sm">{episode.date}</p>
            <a
              href={episode.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-700 font-medium text-sm flex items-center gap-2"
            >
              Watch on YouTube
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function EpisodesList({ 
  episodes, 
  loading, 
  error, 
  loadingMore, 
  hasMore, 
  onLoadMore,
  onEpisodeClick
}: { 
  episodes: PodcastEpisode[], 
  loading: boolean, 
  error: boolean,
  loadingMore: boolean,
  hasMore: boolean,
  onLoadMore: () => void,
  onEpisodeClick: (episode: PodcastEpisode) => void
}) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white rounded-xl md:rounded-2xl shadow-lg border border-gray-200 overflow-hidden animate-pulse">
            <div className="aspect-video bg-gray-300"></div>
            <div className="p-3 md:p-6">
              <div className="h-5 md:h-6 bg-gray-300 rounded w-3/4 mb-2 md:mb-3"></div>
              <div className="h-3 md:h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-3 md:h-4 bg-gray-200 rounded w-5/6 mb-3 md:mb-4"></div>
              <div className="flex justify-between items-center">
                <div className="h-3 md:h-4 bg-gray-200 rounded w-1/4"></div>
                <div className="h-6 md:h-8 bg-gray-300 rounded w-16 md:w-20"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  if (error || episodes.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">🎙️</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {error ? 'Unable to Load Episodes' : 'No Episodes Available'}
        </h3>
        <p className="text-gray-600">
          {error ? 'Please check your internet connection and try again.' : 'Check back soon for new podcast episodes!'}
        </p>
        {error && (
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 bg-alabama-red hover:bg-red-800 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Try Again
          </button>
        )}
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {episodes.map((episode, index) => (
          <EpisodeCard 
            key={index} 
            episode={episode}
            onClick={() => onEpisodeClick(episode)}
          />
        ))}
      </div>
      
      {hasMore && (
        <div className="text-center mt-8 md:mt-12">
          <button
            onClick={onLoadMore}
            disabled={loadingMore}
            className="bg-sunset-orange hover:bg-orange-700 disabled:bg-gray-400 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center gap-2 mx-auto text-sm md:text-base"
          >
            {loadingMore ? (
              <>
                <svg className="animate-spin h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Loading...
              </>
            ) : (
              <>
                View More Episodes
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </>
            )}
          </button>
          <p className="text-gray-500 text-xs md:text-sm mt-2 md:mt-3">
            Showing {episodes.length} of {episodes.length} episodes
          </p>
        </div>
      )}
    </>
  );
}

export default function PodcastsPage() {
  const [allEpisodes, setAllEpisodes] = useState<PodcastEpisode[]>([]);
  const [displayedEpisodes, setDisplayedEpisodes] = useState<PodcastEpisode[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedEpisode, setSelectedEpisode] = useState<PodcastEpisode | null>(null);
  const episodesPerPage = 10;

  useEffect(() => {
    async function fetchEpisodes() {
      try {
        const response = await fetch('/api/youtube-episodes-all');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setAllEpisodes(data);
        setDisplayedEpisodes(data.slice(0, episodesPerPage));
        setError(false);
      } catch (err) {
        console.error('Error fetching episodes:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchEpisodes();
  }, []);

  const loadMoreEpisodes = () => {
    setLoadingMore(true);
    
    // Simulate a small delay for better UX
    setTimeout(() => {
      const nextPage = currentPage + 1;
      const startIndex = 0;
      const endIndex = nextPage * episodesPerPage;
      const newEpisodes = allEpisodes.slice(startIndex, endIndex);
      
      setDisplayedEpisodes(newEpisodes);
      setCurrentPage(nextPage);
      setLoadingMore(false);
    }, 500);
  };

  const hasMoreEpisodes = displayedEpisodes.length < allEpisodes.length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navigation site={{
        title: "ReelBama",
        logoUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=400&fit=crop&crop=center"
      }} />

      {/* Header */}
      <div className="bg-gradient-to-br from-white via-blue-50 to-red-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 md:py-3 mb-4 md:mb-6 shadow-lg border border-gray-200">
              <span className="text-xl md:text-2xl mr-2 md:mr-3">🎙️</span>
              <span className="text-sm md:text-lg font-medium text-alabama-red">All Podcast Episodes</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 font-heading">
              ReelBama Podcast
            </h1>
            <p className="text-base md:text-xl text-gray-700 max-w-2xl mx-auto">
              Listen to our complete collection of fishing podcasts featuring expert tips, lake reports, and community stories.
            </p>
          </div>
        </div>
      </div>

      {/* Episodes Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <EpisodesList 
          episodes={displayedEpisodes} 
          loading={loading} 
          error={error}
          loadingMore={loadingMore}
          hasMore={hasMoreEpisodes}
          onLoadMore={loadMoreEpisodes}
          onEpisodeClick={setSelectedEpisode}
        />
      </main>

      {/* Video Modal */}
      <VideoModal 
        episode={selectedEpisode} 
        onClose={() => setSelectedEpisode(null)} 
      />

      {/* Footer */}
      <Footer site={{
        title: "ReelBama",
        description: "Your one-stop hub for fishing stories, tournaments, and weekly catches across Alabama waters.",
        author: "Bryan Brasher"
      }} />
    </div>
  );
}
