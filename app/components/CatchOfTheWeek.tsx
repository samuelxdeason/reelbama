interface Catch {
  angler: string;
  fish: string;
  weightLbs: number;
  location: string;
  photoUrl: string;
  dateCaught: string;
}

interface CatchOfTheWeekProps {
  title: string;
  items: Catch[];
}

export default function CatchOfTheWeek({ title, items }: CatchOfTheWeekProps) {
  // Only show first 4 items
  const displayItems = items.slice(0, 4);
  
  return (
    <section className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 md:p-8 flex flex-col h-full">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 md:mb-6">
        <div className="flex items-center min-w-0">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-alabama-red to-red-800 rounded-xl flex items-center justify-center mr-3 shadow-lg flex-shrink-0">
            <span className="text-xl md:text-2xl">🏆</span>
          </div>
          <div className="min-w-0">
            <h2 className="text-lg md:text-2xl font-bold text-gray-900 font-heading">{title}</h2>
            <p className="text-gray-600 text-xs md:text-sm">Latest impressive catches from Alabama waters</p>
          </div>
        </div>
        <a href="#" className="text-alabama-red hover:text-red-800 font-medium text-sm flex items-center whitespace-nowrap ml-auto sm:ml-0">
          View All
          <svg className="ml-1 h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      
      {/* Simple 2x2 Grid - 4 equal-sized catches */}
      <div className="grid grid-cols-2 grid-rows-2 gap-3 md:gap-4 flex-1 min-h-[400px] md:min-h-[500px]">
        {displayItems.map((catchItem, index) => (
          <article 
            key={index} 
            className="group rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-alabama-red relative transform hover:-translate-y-1 min-h-[180px] md:min-h-0"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
              <img 
                src={catchItem.photoUrl} 
                alt={`${catchItem.fish} caught by ${catchItem.angler}`}
                className="w-full h-full object-cover"
              />
              
              {/* Weight badge - top right */}
              <div className="absolute top-2 right-2 md:top-3 md:right-3 bg-white/95 backdrop-blur-sm rounded-full px-2 py-1 md:px-3 md:py-1.5 shadow-lg border-2 border-alabama-red">
                <span className="text-xs md:text-sm font-bold text-alabama-red">{catchItem.weightLbs} lbs</span>
              </div>
              
              {/* Info overlay at bottom with gradient */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-2 md:p-4">
                <h3 className="text-sm md:text-base font-bold text-white mb-0.5">{catchItem.angler}</h3>
                <p className="text-white/90 text-xs md:text-sm font-medium mb-1 md:mb-2">{catchItem.fish}</p>
                <div className="flex items-center justify-between text-xs text-white/80">
                  <div className="flex items-center min-w-0">
                    <svg className="w-3 h-3 md:w-3.5 md:h-3.5 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="truncate">{catchItem.location}</span>
                  </div>
                  <span className="ml-1 md:ml-2 flex-shrink-0 text-[10px] md:text-xs">{catchItem.dateCaught}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
