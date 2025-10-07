interface RoadTripArticle {
  title: string;
  author: string;
  publishedDate: string;
  heroImage: string;
  markdown: string;
}

interface RoadTripOfTheMonthProps {
  title: string;
  article: RoadTripArticle;
}

export default function RoadTripOfTheMonth({ title, article }: RoadTripOfTheMonthProps) {
  return (
    <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
            <span className="text-2xl">🗺️</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 font-heading">{title}</h2>
            <p className="text-gray-600 text-sm">Featured fishing destinations and road trip guides</p>
          </div>
        </div>
        <a href="#" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
          All Stories
          <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      
      <article className="group bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100">
        <div className="relative">
          {/* Hero image - no cropping, maintain aspect ratio */}
          <img 
            src={article.heroImage} 
            alt="Black Warrior River fishing scene"
            className="w-full h-auto object-contain bg-gray-50"
          />
          
          {/* Featured badge */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
            <span className="text-sm font-bold text-green-800">Featured Story</span>
          </div>
        </div>
        
        <div className="p-8">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-sm font-bold">BT</span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">By {article.author}</p>
              <p className="text-xs text-gray-500">{article.publishedDate}</p>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">{article.title}</h3>
          
          <div className="prose prose-lg max-w-none mb-6">
            <p className="text-gray-600 leading-relaxed">
              The Black Warrior River offers pristine fishing spots, cozy camping, and plenty of smallmouth bass waiting to bite. 
              Here's our full trip log and recommendations for this hidden Alabama gem...
            </p>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                🏞️ Road Trip
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                🎣 Smallmouth Bass
              </span>
            </div>
            
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300 flex items-center">
              Read Full Story
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}
