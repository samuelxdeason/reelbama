interface PhotoOfTheWeekProps {
  title: string;
  photo: {
    caption: string;
    photographer: string;
    url: string;
  };
}

export default function PhotoOfTheWeek({ title, photo }: PhotoOfTheWeekProps) {
  const hasContent = photo && photo.url;

  if (!hasContent) {
    return (
      <section className="bg-white rounded-lg shadow-xl border-2 border-slate-300 p-4 md:p-6">
        <div className="flex items-center mb-4 border-b-2 border-slate-800 pb-4">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-800 rounded-md flex items-center justify-center mr-4 shadow-lg flex-shrink-0">
            <span className="text-2xl md:text-3xl">📸</span>
          </div>
          <div className="min-w-0">
            <h3 className="text-xl md:text-2xl font-black text-slate-900 font-heading tracking-tight uppercase">{title}</h3>
          </div>
        </div>
        <div className="text-center py-12">
          <div className="text-5xl mb-3">📸</div>
          <h4 className="text-lg font-bold text-slate-900 mb-2">No Photo Yet</h4>
          <p className="text-slate-600 text-sm font-medium">Check back soon for scenic photos</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white rounded-lg shadow-xl border-2 border-slate-300 p-4 md:p-6">
      {/* Section Header */}
      <div className="flex items-center mb-4 md:mb-6 border-b-2 border-slate-800 pb-4">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-800 rounded-md flex items-center justify-center mr-3 shadow-lg flex-shrink-0">
          <span className="text-xl md:text-2xl">📸</span>
        </div>
        <div className="min-w-0">
          <h2 className="text-lg md:text-2xl font-black text-slate-900 font-heading tracking-tight uppercase">{title}</h2>
          <p className="text-amber-600 text-xs md:text-sm font-bold tracking-wide uppercase">Featured Community Photography</p>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-lg overflow-hidden border-2 border-slate-300 hover:shadow-2xl hover:border-amber-600 transition-all duration-300">
        <div className="relative">
          {/* Photo - no cropping, maintain aspect ratio */}
          <img 
            src={photo.url} 
            alt={photo.caption}
            className="w-full h-auto object-contain bg-white"
          />
          
          {/* Photo badge */}
          <div className="absolute top-2 md:top-3 right-2 md:right-3 bg-amber-500 backdrop-blur-sm rounded-md px-2 md:px-3 py-1 shadow-xl border-2 border-white">
            <span className="text-[10px] md:text-xs font-black text-white whitespace-nowrap uppercase tracking-wide">Photo of the Week</span>
          </div>
        </div>
        
        <div className="p-3 md:p-5">
          <h3 className="text-base md:text-lg font-black text-slate-900 mb-2 md:mb-3 tracking-tight">{photo.caption}</h3>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center">
              <div className="w-7 h-7 md:w-8 md:h-8 bg-amber-500 rounded flex items-center justify-center mr-2 md:mr-3 flex-shrink-0 border-2 border-amber-600">
                <span className="text-white text-xs md:text-sm">📷</span>
              </div>
              <div className="min-w-0">
                <p className="text-xs md:text-sm font-bold text-slate-800 truncate uppercase tracking-wide">By {photo.photographer}</p>
              </div>
            </div>
            
            <button className="bg-slate-800 hover:bg-slate-900 text-white px-3 md:px-4 py-2 rounded-md transition-colors duration-300 text-xs md:text-sm font-bold shadow-lg whitespace-nowrap w-full sm:w-auto uppercase tracking-wide">
              View Full Size
            </button>
          </div>
        </div>
      </div>
      
      {/* Submission Call-to-Action */}
      <div className="mt-4 md:mt-6 bg-amber-50 rounded-lg p-4 md:p-6 border-2 border-dashed border-amber-600">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 text-2xl md:text-3xl">🌅</div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base md:text-lg font-black text-slate-900 mb-2 uppercase tracking-tight">Share Your Photos!</h3>
            <p className="text-sm md:text-base text-slate-700 font-medium">
              Even when the fish aren&apos;t biting, there&apos;s beauty all around us. Let us see the world through your camera lens. Send us your best scenic photos to{' '}
              <a 
                href="mailto:photos@reelbama.com" 
                className="text-amber-700 hover:text-amber-800 font-bold underline"
              >
                photos@reelbama.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
