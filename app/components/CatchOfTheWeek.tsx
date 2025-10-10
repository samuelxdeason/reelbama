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
  const displayItems = items?.slice(0, 4) || [];
  const hasContent = displayItems && displayItems.length > 0;
  
  return (
    <section className="bg-white rounded-lg shadow-xl border-2 border-slate-300 p-4 md:p-8 flex flex-col h-full">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 md:mb-6 border-b-2 border-slate-800 pb-4">
        <div className="flex items-center min-w-0">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-800 rounded-md flex items-center justify-center mr-4 shadow-lg flex-shrink-0">
            <span className="text-2xl md:text-3xl">🏆</span>
          </div>
          <div className="min-w-0">
            <h2 className="text-xl md:text-3xl font-black text-slate-900 font-heading tracking-tight uppercase">{title}</h2>
            <p className="text-amber-600 text-sm md:text-base font-bold tracking-wide uppercase">Latest Impressive Catches</p>
          </div>
        </div>
        <a href="#" className="text-slate-800 hover:text-amber-600 font-bold text-sm md:text-base flex items-center whitespace-nowrap ml-auto sm:ml-0 uppercase border-b-2 border-transparent hover:border-amber-600 transition-all">
          View All
          <svg className="ml-1 h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      
      {/* Simple 2x2 Grid - 4 equal-sized catches */}
      {!hasContent ? (
        <div className="flex-1 flex items-center justify-center min-h-[400px] md:min-h-[500px]">
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎣</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">No Catches Yet</h3>
            <p className="text-slate-600 font-medium">Be the first to submit your catch!</p>
          </div>
        </div>
      ) : (
      <div className="grid grid-cols-2 grid-rows-2 gap-3 md:gap-4 flex-1 min-h-[400px] md:min-h-[500px]">
        {displayItems.map((catchItem, index) => (
          <article 
            key={index} 
            className="group rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-slate-300 hover:border-amber-600 relative transform hover:-translate-y-1 min-h-[180px] md:min-h-0"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
              <img 
                src={catchItem.photoUrl} 
                alt={`${catchItem.fish} caught by ${catchItem.angler}`}
                className="w-full h-full object-cover"
              />
              
              {/* Weight badge - top right */}
              <div className="absolute top-2 right-2 md:top-3 md:right-3 bg-amber-500 backdrop-blur-sm rounded-md px-2 py-1 md:px-3 md:py-1.5 shadow-xl border-2 border-white">
                <span className="text-xs md:text-sm font-black text-white uppercase tracking-wide">{catchItem.weightLbs} lbs</span>
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
      )}
      
      {/* Submission Call-to-Action */}
      <div className="mt-4 md:mt-6 bg-amber-50 rounded-lg p-4 md:p-6 border-2 border-dashed border-amber-600">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 text-2xl md:text-3xl">📸</div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base md:text-lg font-black text-slate-900 mb-2 uppercase tracking-tight">Submit Your Catch!</h3>
            <p className="text-sm md:text-base text-slate-700 mb-3 font-medium">
              We want to see your best fish photos. Email them to us at{' '}
              <a 
                href="mailto:topcatch@reelbama.com" 
                className="text-amber-700 hover:text-amber-800 font-bold underline"
              >
                topcatch@reelbama.com
              </a>
              . Be sure to tell us where it was caught, how much it weighed (even if you&apos;re estimating) and any other details you&apos;d like to share.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
