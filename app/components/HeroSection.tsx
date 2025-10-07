import Image from "next/image";

interface HeroSectionProps {
  title: string;
  description: string;
  author: string;
}

export default function HeroSection({ title, description, author }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-200 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-24 h-24 rounded-full bg-blue-300 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 rounded-full bg-blue-100 animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">🏆 Alabama's Premier Fishing Community</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading leading-tight">
              {title}
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 font-body leading-relaxed">
              {description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-white text-blue-900 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg">
                Explore Latest Catches
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
                Join Tournament
              </button>
            </div>
            
            <div className="flex items-center text-blue-200">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">BT</span>
              </div>
              <div>
                <p className="text-sm font-medium">Featured by</p>
                <p className="font-semibold">{author}</p>
              </div>
            </div>
          </div>
          
          {/* Hero Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-8 h-96 flex items-center justify-center shadow-2xl relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop&crop=center" 
                alt="Lake Guntersville fishing scene" 
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              <div className="relative z-10 text-white text-center">
                <div className="text-6xl mb-4">🎣</div>
                <h3 className="text-2xl font-bold mb-2">Lake Guntersville</h3>
                <p className="text-blue-100">Alabama's Premier Bass Fishing Destination</p>
              </div>
            </div>
            
            {/* Floating stats - hidden on mobile to prevent overflow */}
            <div className="hidden md:block absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-900">8.6</div>
                <div className="text-sm text-gray-600">Largest Catch</div>
              </div>
            </div>
            
            <div className="hidden md:block absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-900">127</div>
                <div className="text-sm text-gray-600">Tournaments</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
