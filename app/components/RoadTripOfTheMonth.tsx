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
  const hasContent = article && article.title;

  if (!hasContent) {
    return (
      <section className="bg-white rounded-lg shadow-xl border-2 border-slate-300 p-4 md:p-8">
        <div className="flex items-center mb-6 md:mb-8 border-b-2 border-slate-800 pb-4">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-800 rounded-md flex items-center justify-center mr-4 shadow-lg flex-shrink-0">
            <span className="text-2xl md:text-3xl">🗺️</span>
          </div>
          <div className="min-w-0">
            <h2 className="text-xl md:text-3xl font-black text-slate-900 font-heading tracking-tight uppercase">{title}</h2>
            <p className="text-amber-600 text-sm md:text-base font-bold tracking-wide uppercase">Monthly Featured Destination</p>
          </div>
        </div>
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🗺️</div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">No Road Trip Featured</h3>
          <p className="text-slate-600 font-medium">Check back soon for fishing destination articles</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white rounded-lg shadow-xl border-2 border-slate-300 p-4 md:p-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6 md:mb-8 border-b-2 border-slate-800 pb-4">
        <div className="flex items-center min-w-0">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-800 rounded-md flex items-center justify-center mr-4 shadow-lg flex-shrink-0">
            <span className="text-2xl md:text-3xl">🗺️</span>
          </div>
          <div className="min-w-0">
            <h2 className="text-xl md:text-3xl font-black text-slate-900 font-heading tracking-tight uppercase">{title}</h2>
            <p className="text-amber-600 text-sm md:text-base font-bold tracking-wide uppercase">Featured Destinations & Guides</p>
          </div>
        </div>
        <a href="#" className="text-slate-800 hover:text-amber-600 font-bold text-sm md:text-base flex items-center whitespace-nowrap ml-auto sm:ml-0 uppercase border-b-2 border-transparent hover:border-amber-600 transition-all">
          All Stories
          <svg className="ml-1 h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      
      <article className="group bg-gray-50 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-slate-300 hover:border-amber-600">
        <div className="relative">
          {/* Hero image - no cropping, maintain aspect ratio */}
          <img 
            src={article.heroImage} 
            alt="Black Warrior River fishing scene"
            className="w-full h-auto object-contain bg-white"
          />
          
          {/* Featured badge */}
          <div className="absolute top-4 left-4 bg-amber-500 backdrop-blur-sm rounded-md px-4 py-2 shadow-xl border-2 border-white">
            <span className="text-sm md:text-base font-black text-white uppercase tracking-wider">Featured Story</span>
          </div>
        </div>
        
        <div className="p-4 md:p-8">
          <div className="flex items-center mb-3 md:mb-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-500 rounded flex items-center justify-center mr-3 shadow-lg flex-shrink-0 border-2 border-amber-600">
              <span className="text-white text-sm md:text-base font-black">BB</span>
            </div>
            <div className="min-w-0">
              <p className="text-xs md:text-sm font-bold text-slate-900 truncate uppercase tracking-wide">By {article.author}</p>
              <p className="text-xs md:text-sm text-amber-600 font-semibold">{article.publishedDate}</p>
            </div>
          </div>
          
          <h3 className="text-xl md:text-3xl font-black text-slate-900 mb-3 md:mb-4 group-hover:text-amber-700 transition-colors tracking-tight">{article.title}</h3>
          
          <div className="prose prose-sm md:prose-lg max-w-none mb-4 md:mb-6">
            <p className="text-sm md:text-lg text-slate-700 leading-relaxed font-medium">
              The Black Warrior River offers pristine fishing spots, cozy camping, and plenty of smallmouth bass waiting to bite. 
              Here&apos;s our full trip log and recommendations for this hidden Alabama gem...
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-amber-100 text-amber-700 px-3 md:px-4 py-2 rounded-md text-xs md:text-sm font-bold border-2 border-amber-200 whitespace-nowrap uppercase tracking-wide">
                🏞️ Road Trip
              </span>
              <span className="bg-emerald-100 text-emerald-700 px-3 md:px-4 py-2 rounded-md text-xs md:text-sm font-bold border-2 border-emerald-200 whitespace-nowrap uppercase tracking-wide">
                🎣 Smallmouth Bass
              </span>
            </div>
            
            <button className="bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-6 md:px-8 rounded-md transition-colors duration-300 flex items-center shadow-lg text-sm md:text-base whitespace-nowrap w-full sm:w-auto justify-center uppercase tracking-wider">
              Read Full Story
              <svg className="ml-2 h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}
