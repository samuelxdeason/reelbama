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
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v60c-16.569 0-30-13.431-30-30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center mb-12">
          <div className="text-4xl mr-4">🎙️</div>
          <h2 className="text-4xl font-bold text-blue-900 font-serif">{title}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {episodes.map((episode, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100 relative">
              {/* Microphone icon overlay */}
              <div className="absolute top-4 right-4 text-blue-200 text-2xl">🎤</div>
              
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{episode.title}</h3>
                <div className="text-gray-600 text-sm">
                  <p><span className="font-medium">Host:</span> {episode.host}</p>
                  <p><span className="font-medium">Guest:</span> {episode.guest}</p>
                  <p className="text-blue-600">{episode.date}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <button className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg transition-colors duration-300">
                    <span className="text-sm">🎵</span>
                  </button>
                  <button className="bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-lg transition-colors duration-300">
                    <span className="text-sm">🍎</span>
                  </button>
                </div>
                <a 
                  href={episode.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  Listen Now →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
