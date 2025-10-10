interface GearItem {
  name: string;
  category: string;
  price: string;
  rating: number;
  description: string;
  imageUrl: string;
  bestFor: string;
  availability: string;
}

interface GearRecommendationsProps {
  title: string;
  items: GearItem[];
}

export default function GearRecommendations({ title, items }: GearRecommendationsProps) {
  const hasContent = items && items.length > 0;

  const getRatingStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ));
  };

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      'Rods': '🎣',
      'Reels': '🎣',
      'Lures': '🪝',
      'Line': '🧵',
      'Tackle': '🎒',
      'Apparel': '👕',
      'Accessories': '🕶️'
    };
    return icons[category] || '🎣';
  };

  return (
    <div className="bg-white rounded-lg shadow-xl border-2 border-slate-300 p-4 md:p-6 flex flex-col h-full">
      <div className="flex items-center mb-6 md:mb-8 border-b-2 border-slate-800 pb-4">
        <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-800 rounded-md flex items-center justify-center mr-4 shadow-lg flex-shrink-0">
          <span className="text-2xl md:text-3xl">🛒</span>
        </div>
        <div className="min-w-0">
          <h2 className="text-xl md:text-3xl font-black text-slate-900 font-heading tracking-tight uppercase">{title}</h2>
          <p className="text-amber-600 text-sm md:text-base font-bold tracking-wide uppercase">Top Picks for Alabama Fishing</p>
        </div>
      </div>

      {!hasContent ? (
        <div className="flex-1 flex items-center justify-center py-12">
          <div className="text-center">
            <div className="text-6xl mb-4">🛒</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">No Gear Recommendations</h3>
            <p className="text-slate-600 font-medium">Check back soon for gear recommendations</p>
          </div>
        </div>
      ) : (
      <div className="space-y-4 md:space-y-6 flex-1 flex flex-col">
        {items.map((item, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4 md:p-5 hover:shadow-2xl transition-all duration-300 border-2 border-slate-300 hover:border-amber-600 flex-1">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Image */}
              <div className="sm:w-32 sm:flex-shrink-0">
                <img 
                  src={item.imageUrl} 
                  alt={item.name}
                  className="w-full h-24 sm:h-28 object-cover rounded-md border-2 border-slate-200"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <div className="w-7 h-7 bg-amber-500 rounded flex items-center justify-center flex-shrink-0 border-2 border-amber-600">
                      <span className="text-sm">{getCategoryIcon(item.category)}</span>
                    </div>
                    <span className="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-md border-2 border-slate-200 uppercase tracking-wide">
                      {item.category}
                    </span>
                  </div>
                  <span className="text-base md:text-lg font-black text-slate-900 whitespace-nowrap">{item.price}</span>
                </div>

                <h4 className="font-black text-slate-900 mb-2 text-sm md:text-base line-clamp-2 tracking-tight">{item.name}</h4>
                
                <div className="flex items-center mb-2">
                  <div className="flex text-sm">
                    {getRatingStars(item.rating)}
                  </div>
                  <span className="ml-2 text-xs text-slate-700 font-bold">({item.rating}/5)</span>
                </div>

                <p className="text-xs md:text-sm text-slate-600 mb-3 line-clamp-2 font-medium">{item.description}</p>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs mb-3">
                  <div className="flex items-center gap-1">
                    <span className="text-slate-700 font-bold uppercase tracking-wide">Best for:</span>
                    <span className="font-black text-amber-700">{item.bestFor}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-slate-400">•</span>
                    <span className={`font-black uppercase tracking-wide ${item.availability === 'In Stock' ? 'text-emerald-700' : 'text-red-600'}`}>
                      {item.availability}
                    </span>
                  </div>
                </div>

                <button className="bg-slate-800 text-white px-4 py-2 rounded-md text-xs md:text-sm font-bold hover:bg-slate-900 transition-colors w-full sm:w-auto shadow-lg uppercase tracking-wide">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      )}
    </div>
  );
}
