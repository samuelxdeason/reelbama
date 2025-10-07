interface Creature {
  name: string;
  imageUrl: string;
  description: string;
}

interface WildlyAlabamaProps {
  title: string;
  creatures: Creature[];
}

export default function WildlyAlabama({ title, creatures }: WildlyAlabamaProps) {
  return (
    <section className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 md:p-8">
      <div className="flex items-center mb-6 md:mb-8">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-lake-green to-green-800 rounded-xl flex items-center justify-center mr-3 shadow-lg flex-shrink-0">
          <span className="text-xl md:text-2xl">🐟</span>
        </div>
        <div className="min-w-0">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 font-heading">{title}</h2>
          <p className="text-gray-600 text-xs md:text-sm">Discover Alabama&apos;s unique aquatic wildlife and creatures</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {creatures.map((creature, index) => (
          <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-lake-green">
            <div className="relative">
              {/* Creature image - no cropping, maintain aspect ratio */}
              <img 
                src={creature.imageUrl} 
                alt={creature.name}
                className="w-full h-auto object-contain bg-white"
              />
              
              {/* Name badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg border border-lake-green">
                <span className="text-sm font-bold text-lake-green">{creature.name}</span>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed">{creature.description}</p>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <span className="bg-lake-green/10 text-lake-green px-3 py-1 rounded-full text-sm font-medium border border-lake-green/20">
                  🏞️ Alabama Wildlife
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
