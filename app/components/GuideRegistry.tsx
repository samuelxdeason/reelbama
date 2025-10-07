interface Guide {
  name: string;
  region: string;
  specialty: string;
  contact: string;
}

interface GuideRegistryProps {
  title: string;
  guides: Guide[];
}

export default function GuideRegistry({ title, guides }: GuideRegistryProps) {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Topographic map background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M50 50c0-27.614 22.386-50 50-50v100c-27.614 0-50-22.386-50-50z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-blue-800 mb-12 text-center font-serif">{title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guides.map((guide, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-3xl">🚤</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">{guide.name}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="font-medium text-gray-600 mr-2">Region:</span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">{guide.region}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium text-gray-600 mr-2">Specialty:</span>
                      <span className="text-blue-700">{guide.specialty}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-blue-100">
                <a 
                  href={`mailto:${guide.contact}`}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 inline-flex items-center"
                >
                  <span className="mr-2">📧</span>
                  Contact Guide
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
