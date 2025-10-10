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
  const hasContent = video && video.videoUrl;

  if (!hasContent) {
    return (
      <section className="bg-white rounded-lg shadow-xl border-2 border-slate-300 p-4 md:p-6">
        <div className="flex items-center mb-4 border-b-2 border-slate-800 pb-4">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-800 rounded-md flex items-center justify-center mr-4 shadow-lg flex-shrink-0">
            <span className="text-2xl md:text-3xl">🎥</span>
          </div>
          <div className="min-w-0">
            <h3 className="text-xl md:text-2xl font-black text-slate-900 font-heading tracking-tight uppercase">{title}</h3>
          </div>
        </div>
        <div className="text-center py-12">
          <div className="text-5xl mb-3">🎥</div>
          <h4 className="text-lg font-bold text-slate-900 mb-2">No Video Yet</h4>
          <p className="text-slate-600 text-sm font-medium">Check back soon for action videos</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white rounded-lg shadow-xl border-2 border-slate-300 p-4 md:p-8 min-w-0 overflow-hidden">
      <div className="flex items-center mb-6 md:mb-8 border-b-2 border-slate-800 pb-4">
        <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-800 rounded-md flex items-center justify-center mr-4 shadow-lg flex-shrink-0">
          <span className="text-2xl md:text-3xl">🎥</span>
        </div>
        <div className="min-w-0">
          <h2 className="text-xl md:text-3xl font-black text-slate-900 font-heading tracking-tight uppercase">{title}</h2>
          <p className="text-amber-600 text-sm md:text-base font-bold tracking-wide uppercase">Featured Fishing Videos</p>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg border-2 border-slate-300 hover:shadow-2xl hover:border-amber-600 transition-all duration-300">
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
          <h3 className="text-base md:text-xl font-black text-slate-900 mb-3 md:mb-4 tracking-tight">{video.title}</h3>
          
          <div className="flex flex-col gap-3">
            <div className="flex items-center">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-amber-500 rounded flex items-center justify-center mr-2 md:mr-3 flex-shrink-0 border-2 border-amber-600">
                <span className="text-white text-base md:text-lg">🎥</span>
              </div>
              <div className="min-w-0">
                <p className="font-bold text-amber-600 text-xs md:text-sm uppercase tracking-wide">Creator</p>
                <p className="text-slate-900 font-black text-sm md:text-base truncate">{video.creator}</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2">
              <button className="bg-red-600 hover:bg-red-700 text-white px-3 md:px-4 py-2 rounded-md text-xs md:text-sm font-bold transition-colors duration-300 shadow-lg whitespace-nowrap uppercase tracking-wide">
                Watch on YouTube
              </button>
              <button className="border-2 border-slate-300 hover:border-amber-600 text-slate-700 hover:text-amber-700 px-3 md:px-4 py-2 rounded-md text-xs md:text-sm font-bold transition-colors duration-300 whitespace-nowrap uppercase tracking-wide">
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Submission Call-to-Action */}
      <div className="mt-4 md:mt-6 bg-amber-50 rounded-lg p-4 md:p-6 border-2 border-dashed border-amber-600">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 text-2xl md:text-3xl">🎬</div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base md:text-lg font-black text-slate-900 mb-2 uppercase tracking-tight">Submit Your Videos!</h3>
            <p className="text-sm md:text-base text-slate-700 font-medium">
              Whether it&apos;s you landing a big fish, a buddy falling out of the boat or something neither of us has thought of, send it to us at{' '}
              <a 
                href="mailto:videos@reelbama.com" 
                className="text-amber-700 hover:text-amber-800 font-bold underline"
              >
                videos@reelbama.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
