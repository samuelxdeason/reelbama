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
  const hasContent = creatures && creatures.length > 0;

  return (
    <section className="bg-white rounded-lg shadow-xl border-2 border-slate-300 p-4 md:p-8">
      <div className="flex items-center mb-6 md:mb-8 border-b-2 border-slate-800 pb-4">
        <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-800 rounded-md flex items-center justify-center mr-4 shadow-lg flex-shrink-0">
          <span className="text-2xl md:text-3xl">🐟</span>
        </div>
        <div className="min-w-0">
          <h2 className="text-xl md:text-3xl font-black text-slate-900 font-heading tracking-tight uppercase">{title}</h2>
          <p className="text-amber-600 text-sm md:text-base font-bold tracking-wide uppercase">Alabama&apos;s Aquatic Wildlife</p>
        </div>
      </div>
      
      {!hasContent ? (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🐟</div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">No Creatures Featured</h3>
          <p className="text-slate-600 font-medium">Check back soon for Alabama wildlife features</p>
        </div>
      ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {creatures.map((creature, index) => (
          <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-slate-300 hover:border-amber-600">
            <div className="relative">
              {/* Creature image - no cropping, maintain aspect ratio */}
              <img 
                src={creature.imageUrl} 
                alt={creature.name}
                className="w-full h-auto object-contain bg-white"
              />
              
              {/* Name badge */}
              <div className="absolute top-4 left-4 bg-emerald-600 backdrop-blur-sm rounded-md px-3 py-2 shadow-xl border-2 border-white">
                <span className="text-sm md:text-base font-black text-white uppercase tracking-wide">{creature.name}</span>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-slate-700 leading-relaxed font-medium">{creature.description}</p>
              
              <div className="mt-4 pt-4 border-t-2 border-slate-300">
                <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-md text-sm font-bold border-2 border-emerald-200 uppercase tracking-wide">
                  🏞️ Alabama Wildlife
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      )}
    </section>
  );
}
