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
  return (
    <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
            <span className="text-2xl">🏆</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 font-heading">{title}</h2>
            <p className="text-gray-600 text-sm">Latest impressive catches from Alabama waters</p>
          </div>
        </div>
        <a href="#" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
          View All
          <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((catchItem, index) => (
          <article key={index} className="group bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div className="relative">
              {/* Fish photo - no cropping, maintain aspect ratio */}
              <img 
                src={catchItem.photoUrl} 
                alt={`${catchItem.fish} caught by ${catchItem.angler}`}
                className="w-full h-auto object-contain bg-gray-50"
              />
              
              {/* Weight badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
                <span className="text-lg font-bold text-blue-900">{catchItem.weightLbs} lbs</span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{catchItem.angler}</h3>
                  <p className="text-gray-600 font-medium">{catchItem.fish}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-600 text-sm">{catchItem.location}</span>
                </div>
                <span className="text-gray-500 text-sm">{catchItem.dateCaught}</span>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 text-sm">
                  View Full Story
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
