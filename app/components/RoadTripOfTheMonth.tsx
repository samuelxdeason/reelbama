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
    <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 md:p-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6 md:mb-8">
        <div className="flex items-center min-w-0">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blog-accent to-purple-800 rounded-xl flex items-center justify-center mr-3 shadow-lg flex-shrink-0">
            <span className="text-xl md:text-2xl">🗺️</span>
          </div>
          <div className="min-w-0">
            <h2 className="text-lg md:text-2xl font-bold text-gray-900 font-heading">{title}</h2>
            <p className="text-gray-600 text-xs md:text-sm">Featured fishing destinations and road trip guides</p>
          </div>
        </div>
        <a href="#" className="text-blog-accent hover:text-purple-900 font-medium text-sm flex items-center whitespace-nowrap ml-auto sm:ml-0">
          All Stories
          <svg className="ml-1 h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      
      <article className="group bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blog-accent">
        <div className="relative">
          {/* Hero image - no cropping, maintain aspect ratio */}
          <img 
            src={article.heroImage} 
            alt="Black Warrior River fishing scene"
            className="w-full h-auto object-contain bg-white"
          />
          
          {/* Featured badge */}
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg border border-blog-accent">
            <span className="text-sm font-bold text-blog-accent">Featured Story</span>
          </div>
        </div>
        
        <div className="p-4 md:p-8">
          <div className="flex items-center mb-3 md:mb-4">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blog-accent to-purple-800 rounded-full flex items-center justify-center mr-2 md:mr-3 shadow-lg flex-shrink-0">
              <span className="text-white text-xs md:text-sm font-bold">BB</span>
            </div>
            <div className="min-w-0">
              <p className="text-xs md:text-sm font-medium text-gray-900 truncate">By {article.author}</p>
              <p className="text-[10px] md:text-xs text-gray-500">{article.publishedDate}</p>
            </div>
          </div>
          
          <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-blog-accent transition-colors">{article.title}</h3>
          
          <div className="prose prose-sm md:prose-lg max-w-none mb-4 md:mb-6">
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              The Black Warrior River offers pristine fishing spots, cozy camping, and plenty of smallmouth bass waiting to bite. 
              Here&apos;s our full trip log and recommendations for this hidden Alabama gem...
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-blog-accent/10 text-blog-accent px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium border border-blog-accent/20 whitespace-nowrap">
                🏞️ Road Trip
              </span>
              <span className="bg-lake-green/10 text-lake-green px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium border border-lake-green/20 whitespace-nowrap">
                🎣 Smallmouth Bass
              </span>
            </div>
            
            <button className="bg-blog-accent hover:bg-purple-800 text-white font-semibold py-2 px-4 md:px-6 rounded-lg transition-colors duration-300 flex items-center shadow-md text-sm whitespace-nowrap w-full sm:w-auto justify-center">
              Read Full Story
              <svg className="ml-2 h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}
