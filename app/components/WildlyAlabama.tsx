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
    <section className="py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-green-800 mb-12 text-center font-serif">{title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {creatures.map((creature, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-100">
              <div className="relative">
                {/* Creature image - no cropping, maintain aspect ratio */}
                <img 
                  src={creature.imageUrl} 
                  alt={creature.name}
                  className="w-full h-auto object-contain bg-gray-50"
                />
                
                {/* Name badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
                  <span className="text-sm font-bold text-green-800">{creature.name}</span>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed">{creature.description}</p>
                
                <div className="mt-4 pt-4 border-t border-green-100">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    🏞️ Alabama Wildlife
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
