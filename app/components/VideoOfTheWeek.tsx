interface VideoOfTheWeekProps {
  title: string;
  video: {
    title: string;
    creator: string;
    thumbnail: string;
    videoUrl: string;
  };
}

export default function VideoOfTheWeek({ title, video }: VideoOfTheWeekProps) {
  return (
    <section className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 md:p-8 min-w-0 overflow-hidden">
      <div className="flex items-center mb-6 md:mb-8">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-deep-blue to-blue-800 rounded-xl flex items-center justify-center mr-3 shadow-lg flex-shrink-0">
          <span className="text-xl md:text-2xl">🎥</span>
        </div>
        <div className="min-w-0">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 font-heading">{title}</h2>
          <p className="text-gray-600 text-xs md:text-sm">Featured fishing videos from our community</p>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
        <div className="relative">
          {/* Embedded YouTube Video */}
          <div className="aspect-video w-full">
            <iframe
              src={`https://www.youtube.com/embed/${video.videoUrl.split('v=')[1]}`}
              title={video.title}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          {/* Play button overlay for visual appeal */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-3xl text-white">▶️</span>
            </div>
          </div>
        </div>
        
        <div className="p-4 md:p-6">
          <h3 className="text-base md:text-xl font-bold text-gray-900 mb-3 md:mb-4">{video.title}</h3>
          
          <div className="flex flex-col gap-3">
            <div className="flex items-center">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-deep-blue to-blue-800 rounded-full flex items-center justify-center mr-2 md:mr-3 flex-shrink-0">
                <span className="text-white text-base md:text-lg">🎥</span>
              </div>
              <div className="min-w-0">
                <p className="font-medium text-gray-700 text-xs md:text-sm">Creator</p>
                <p className="text-deep-blue font-semibold text-sm md:text-base truncate">{video.creator}</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2">
              <button className="bg-deep-blue hover:bg-blue-800 text-white px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-colors duration-300 shadow-md whitespace-nowrap">
                Watch on YouTube
              </button>
              <button className="border border-gray-300 hover:border-deep-blue text-gray-700 hover:text-deep-blue px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-colors duration-300 whitespace-nowrap">
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
