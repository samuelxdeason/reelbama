
interface HeroSectionProps {
  title: string;
  description: string;
  author: string;
}

export default function HeroSection({ title, description, author }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-amber-50 overflow-hidden border-b-4 border-slate-800">
      {/* Background Pattern - Subtle geometric shapes */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute top-10 left-10 w-32 h-32 bg-slate-800 transform rotate-45 rounded-sm"></div>
          <div className="absolute top-32 right-20 w-24 h-24 bg-amber-600 transform rotate-12 rounded-sm" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-emerald-700 transform -rotate-12 rounded-sm" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-slate-700 transform rotate-45 rounded-sm" style={{animationDelay: '3s'}}></div>
        </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="text-slate-900">
            <div className="inline-flex items-center bg-amber-100 backdrop-blur-sm rounded-md px-4 md:px-6 py-2 md:py-3 mb-4 md:mb-6 shadow-md border-2 border-amber-200">
              <span className="text-xs md:text-sm font-bold text-amber-700 uppercase tracking-wide">🏆 Alabama&apos;s Premier Fishing Community</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 font-heading leading-tight text-slate-900 tracking-tight">
              {title}
            </h1>
            
            <p className="text-base md:text-xl lg:text-2xl mb-6 md:mb-8 text-slate-700 font-body leading-relaxed font-medium">
              {description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8">
              <button className="border-2 border-slate-800 bg-slate-800 text-white hover:bg-slate-900 hover:border-slate-900 font-bold py-3 px-6 md:px-8 rounded-md transition-all duration-300 text-sm md:text-base whitespace-nowrap shadow-lg uppercase tracking-wide">
                Read Our Blog
              </button>
            </div>
            
            <div className="flex items-center text-slate-700">
              <div className="w-10 h-10 bg-amber-500 rounded flex items-center justify-center mr-3 border-2 border-amber-600">
                <span className="text-white text-sm font-bold">BB</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-amber-700 uppercase tracking-wide">Featured by</p>
                <p className="font-bold text-slate-900">{author}</p>
              </div>
            </div>
          </div>
          
          {/* Community Features */}
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 h-96 flex items-center justify-center shadow-2xl relative overflow-hidden border-4 border-slate-700">
              <img 
                src="/assets/images/metadata-preview-image.png" 
                alt="Alabama fishing community - ReelBama" 
                className="absolute inset-0 w-full h-full object-cover opacity-30 rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-slate-800/80 rounded-lg"></div>
              <div className="relative z-10 text-white text-center">
                <div className="text-6xl mb-4 bob">🎣</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight drop-shadow-lg">Alabama Fishing Community</h3>
                <p className="text-gray-200 mb-4 font-semibold text-lg">Share stories, tips, and connect with fellow anglers</p>
                <div className="flex justify-center space-x-4 text-sm">
                  <span className="bg-amber-500 text-white px-4 py-2 rounded-md font-bold border-2 border-amber-400 shadow-lg">📸 Photo Sharing</span>
                  <span className="bg-amber-500 text-white px-4 py-2 rounded-md font-bold border-2 border-amber-400 shadow-lg">💬 Forums</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
