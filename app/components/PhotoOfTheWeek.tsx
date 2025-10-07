interface PhotoOfTheWeekProps {
  title: string;
  photo: {
    caption: string;
    photographer: string;
    url: string;
  };
}

export default function PhotoOfTheWeek({ title, photo }: PhotoOfTheWeekProps) {
  return (
    <section className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 md:p-6">
      {/* Section Header */}
      <div className="flex items-center mb-4 md:mb-6">
        <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-community-blue to-blue-800 rounded-xl flex items-center justify-center mr-2 md:mr-3 shadow-lg flex-shrink-0">
          <span className="text-lg md:text-xl">📸</span>
        </div>
        <div className="min-w-0">
          <h2 className="text-base md:text-xl font-bold text-gray-900 font-heading">{title}</h2>
          <p className="text-gray-600 text-xs md:text-sm">Featured community photography</p>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
        <div className="relative">
          {/* Photo - no cropping, maintain aspect ratio */}
          <img 
            src={photo.url} 
            alt={photo.caption}
            className="w-full h-auto object-contain bg-white"
          />
          
          {/* Photo badge */}
          <div className="absolute top-2 md:top-3 right-2 md:right-3 bg-white/95 backdrop-blur-sm rounded-full px-2 md:px-3 py-1 shadow-lg border border-community-blue">
            <span className="text-[10px] md:text-xs font-bold text-community-blue whitespace-nowrap">Photo of the Week</span>
          </div>
        </div>
        
        <div className="p-3 md:p-5">
          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 md:mb-3">{photo.caption}</h3>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center">
              <div className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-br from-community-blue to-blue-800 rounded-full flex items-center justify-center mr-2 md:mr-3 flex-shrink-0">
                <span className="text-white text-xs md:text-sm">📷</span>
              </div>
              <div className="min-w-0">
                <p className="text-xs md:text-sm font-medium text-gray-800 truncate">By {photo.photographer}</p>
              </div>
            </div>
            
            <button className="bg-community-blue hover:bg-sky-600 text-white px-3 md:px-4 py-2 rounded-lg transition-colors duration-300 text-xs md:text-sm font-medium shadow-md whitespace-nowrap w-full sm:w-auto">
              View Full Size
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
