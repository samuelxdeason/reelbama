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
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 md:p-6 flex flex-col h-full">
      <div className="flex items-center mb-6 md:mb-8">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-success-green to-green-800 rounded-xl flex items-center justify-center mr-3 shadow-lg flex-shrink-0">
          <span className="text-xl md:text-2xl">🛒</span>
        </div>
        <div className="min-w-0">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 font-heading">{title}</h2>
          <p className="text-gray-600 text-xs md:text-sm">Top picks for Alabama fishing</p>
        </div>
      </div>

      {!hasContent ? (
        <div className="flex-1 flex items-center justify-center py-12">
          <div className="text-center">
            <div className="text-6xl mb-4">🛒</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No Gear Recommendations</h3>
            <p className="text-gray-600">Check back soon for gear recommendations</p>
          </div>
        </div>
      ) : (
      <div className="space-y-4 md:space-y-6 flex-1 flex flex-col">
        {items.map((item, index) => (
          <div key={index} className="bg-gray-50 rounded-xl p-4 md:p-5 hover:shadow-lg transition-all duration-300 border border-gray-200 flex-1">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Image */}
              <div className="sm:w-32 sm:flex-shrink-0">
                <img 
                  src={item.imageUrl} 
                  alt={item.name}
                  className="w-full h-24 sm:h-28 object-cover rounded-lg"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <div className="w-7 h-7 bg-gradient-to-br from-success-green to-green-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-sm">{getCategoryIcon(item.category)}</span>
                    </div>
                    <span className="text-xs font-medium text-gray-600 bg-gray-200 px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <span className="text-base md:text-lg font-bold text-alabama-red whitespace-nowrap">{item.price}</span>
                </div>

                <h4 className="font-bold text-gray-900 mb-2 text-sm md:text-base line-clamp-2">{item.name}</h4>
                
                <div className="flex items-center mb-2">
                  <div className="flex text-sm">
                    {getRatingStars(item.rating)}
                  </div>
                  <span className="ml-2 text-xs text-gray-600">({item.rating}/5)</span>
                </div>

                <p className="text-xs md:text-sm text-gray-600 mb-3 line-clamp-2">{item.description}</p>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs mb-3">
                  <div className="flex items-center gap-1">
                    <span className="text-gray-600">Best for:</span>
                    <span className="font-semibold text-deep-blue">{item.bestFor}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-gray-600">•</span>
                    <span className={`font-semibold ${item.availability === 'In Stock' ? 'text-success-green' : 'text-red-500'}`}>
                      {item.availability}
                    </span>
                  </div>
                </div>

                <button className="bg-alabama-red text-white px-4 py-2 rounded-lg text-xs md:text-sm font-semibold hover:bg-red-800 transition-colors w-full sm:w-auto">
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
