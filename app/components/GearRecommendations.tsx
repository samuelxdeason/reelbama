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
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
          <span className="text-2xl">🛒</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 font-heading">{title}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div key={index} className="bg-gray-50 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-2">
                <span className="text-lg">{getCategoryIcon(item.category)}</span>
              </div>
              <span className="text-sm font-medium text-gray-600 bg-gray-200 px-2 py-1 rounded-full">
                {item.category}
              </span>
            </div>

            <div className="mb-3">
              <img 
                src={item.imageUrl} 
                alt={item.name}
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>

            <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">{item.name}</h4>
            
            <div className="flex items-center mb-2">
              <div className="flex">
                {getRatingStars(item.rating)}
              </div>
              <span className="ml-2 text-sm text-gray-600">({item.rating}/5)</span>
            </div>

            <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.description}</p>

            <div className="space-y-2 mb-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Best for:</span>
                <span className="font-medium text-deep-blue">{item.bestFor}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Availability:</span>
                <span className={`font-medium ${item.availability === 'In Stock' ? 'text-success-green' : 'text-red-500'}`}>
                  {item.availability}
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-alabama-red">{item.price}</span>
              <button className="bg-alabama-red text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-800 transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button className="bg-alabama-red hover:bg-red-800 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
          View All Gear Recommendations
        </button>
      </div>
    </div>
  );
}
