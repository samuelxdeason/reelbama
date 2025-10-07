interface PodcastEpisode {
  title: string;
  host: string;
  guest: string;
  url: string;
  date: string;
}

interface PodcastLinksProps {
  title: string;
  episodes: PodcastEpisode[];
}

export default function PodcastLinks({ title, episodes }: PodcastLinksProps) {
  return (
    <section className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 md:p-8">
      <div className="flex items-center mb-6 md:mb-8">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-sunset-orange to-orange-800 rounded-xl flex items-center justify-center mr-3 shadow-lg flex-shrink-0">
          <span className="text-xl md:text-2xl">🎙️</span>
        </div>
        <div className="min-w-0">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 font-heading">{title}</h2>
          <p className="text-gray-600 text-xs md:text-sm">Listen to our latest fishing podcasts and episodes</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {episodes.map((episode, index) => (
          <div key={index} className="bg-gray-50 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-sunset-orange relative">
            {/* Microphone icon overlay */}
            <div className="absolute top-3 md:top-4 right-3 md:right-4 text-sunset-orange/30 text-xl md:text-2xl">🎤</div>
            
            <div className="mb-3 md:mb-4">
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 md:mb-3 pr-8">{episode.title}</h3>
              <div className="text-gray-600 text-xs md:text-sm space-y-1">
                <p className="break-words"><span className="font-medium">Host:</span> {episode.host}</p>
                <p className="break-words"><span className="font-medium">Guest:</span> {episode.guest}</p>
                <p className="text-sunset-orange font-medium">{episode.date}</p>
              </div>
            </div>
            
            <div className="flex flex-col gap-3 pt-3 md:pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg transition-colors duration-300 text-xs md:text-sm font-medium shadow-md flex-1 whitespace-nowrap">
                  🎵 Spotify
                </button>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-lg transition-colors duration-300 text-xs md:text-sm font-medium shadow-md flex-1 whitespace-nowrap">
                  🍎 Apple
                </button>
              </div>
              <a 
                href={episode.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sunset-orange hover:text-orange-700 font-medium text-sm flex items-center justify-center whitespace-nowrap"
              >
                Listen Now
                <svg className="ml-1 h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
