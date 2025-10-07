interface VideoOfTheWeekProps {
  title: string;
  video: {
    title: string;
    creator: string;
    thumbnail: string;
    videoUrl: string;
  };
}

export default function VideoOfTheWeek({ title, video }: VideoOfTheWeekProps) {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Water surface reflection effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-32 rounded-full bg-blue-200 transform rotate-12"></div>
        <div className="absolute bottom-20 right-10 w-48 h-24 rounded-full bg-blue-300 transform -rotate-12"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-blue-800 mb-12 text-center font-serif">{title}</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-blue-100">
            <div className="relative">
              {/* Embedded YouTube Video */}
              <div className="aspect-video w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${video.videoUrl.split('v=')[1]}`}
                  title={video.title}
                  className="w-full h-full rounded-t-xl"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">{video.title}</h3>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">🎥</span>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Creator</p>
                  <p className="text-blue-600">{video.creator}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
