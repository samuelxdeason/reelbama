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
    <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      {/* Section Header */}
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center mr-3">
          <span className="text-xl">📸</span>
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900 font-heading">{title}</h2>
          <p className="text-gray-600 text-sm">Featured photography</p>
        </div>
      </div>
      
      <div className="bg-white rounded-xl overflow-hidden border border-gray-100">
        <div className="relative">
          {/* Photo - no cropping, maintain aspect ratio */}
          <img 
            src={photo.url} 
            alt={photo.caption}
            className="w-full h-auto object-contain bg-gray-50"
          />
          
          {/* Photo badge */}
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 shadow-lg">
            <span className="text-xs font-bold text-orange-800">Photo of the Week</span>
          </div>
        </div>
        
        <div className="p-5">
          <h3 className="text-lg font-bold text-gray-900 mb-3">{photo.caption}</h3>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-sm">👨‍🎨</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">By {photo.photographer}</p>
              </div>
            </div>
            
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 text-sm font-medium">
              View Full Size
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
