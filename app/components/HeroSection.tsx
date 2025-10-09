
interface HeroSectionProps {
  title: string;
  description: string;
  author: string;
}

export default function HeroSection({ title, description, author }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-white via-blue-50 to-red-50 overflow-hidden">
      {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-red-200 bob"></div>
          <div className="absolute top-32 right-20 w-24 h-24 rounded-full bg-blue-200 bob" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 rounded-full bg-green-200 bob" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-yellow-200 bob" style={{animationDelay: '3s'}}></div>
        </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="text-gray-800">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 md:py-3 mb-4 md:mb-6 shadow-lg border border-gray-200">
              <span className="text-xs md:text-sm font-medium text-alabama-red">🏆 Alabama&apos;s Premier Fishing Community</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 font-heading leading-tight text-gray-900">
              {title}
            </h1>
            
            <p className="text-base md:text-xl lg:text-2xl mb-6 md:mb-8 text-gray-700 font-body leading-relaxed">
              {description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8">
              <button className="border-2 border-alabama-red text-alabama-red hover:bg-alabama-red hover:text-white font-semibold py-3 px-6 md:px-8 rounded-lg transition-colors duration-300 text-sm md:text-base whitespace-nowrap">
                Read Our Blog
              </button>
            </div>
            
            <div className="flex items-center text-gray-600">
              <div className="w-10 h-10 bg-alabama-red rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">BB</span>
              </div>
              <div>
                <p className="text-sm font-medium">Featured by</p>
                <p className="font-semibold text-gray-800">{author}</p>
              </div>
            </div>
          </div>
          
          {/* Community Features */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-red-100 rounded-2xl p-8 h-96 flex items-center justify-center shadow-2xl relative overflow-hidden border border-gray-200">
              <img 
                src="https://vikingfleet.com/wp-content/uploads/sites/4649/2021/11/2024-11-14-Coxes-1.jpg?resize=360%2C240&zoom=2" 
                alt="Alabama fishing community" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 rounded-2xl"
              />
              <div className="relative z-10 text-gray-800 text-center">
                <div className="text-6xl mb-4 bob">🎣</div>
                <h3 className="text-2xl font-bold mb-2">Alabama Fishing Community</h3>
                <p className="text-gray-700 mb-4">Share stories, tips, and connect with fellow anglers</p>
                <div className="flex justify-center space-x-4 text-sm">
                  <span className="bg-white/80 px-3 py-1 rounded-full">📸 Photo Sharing</span>
                  <span className="bg-white/80 px-3 py-1 rounded-full">💬 Forums</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
