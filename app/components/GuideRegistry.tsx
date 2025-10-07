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
    <section className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 md:p-8">
      <div className="flex items-center mb-6 md:mb-8">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-lake-green to-green-800 rounded-xl flex items-center justify-center mr-3 shadow-lg flex-shrink-0">
          <span className="text-xl md:text-2xl">🚤</span>
        </div>
        <div className="min-w-0">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 font-heading">{title}</h2>
          <p className="text-gray-600 text-xs md:text-sm">Professional fishing guides across Alabama waters</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guides.map((guide, index) => (
          <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-lake-green">
            <div className="flex items-start mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-lake-green to-green-800 rounded-full flex items-center justify-center mr-6 flex-shrink-0 shadow-lg">
                <span className="text-2xl text-white">🎣</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{guide.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="font-medium text-gray-600 mr-2">Region:</span>
                    <span className="bg-lake-green/10 text-lake-green px-3 py-1 rounded-full text-sm font-medium border border-lake-green/20">{guide.region}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium text-gray-600 mr-2">Specialty:</span>
                    <span className="text-lake-green font-semibold">{guide.specialty}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <a 
                href={`mailto:${guide.contact}`}
                className="bg-lake-green hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 inline-flex items-center shadow-md w-full justify-center"
              >
                <span className="mr-2">📧</span>
                Contact Guide
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
