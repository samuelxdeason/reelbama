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
  const hasContent = guides && guides.length > 0;

  return (
    <section className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 md:p-8 flex flex-col h-full">
      <div className="flex items-center mb-6 md:mb-8">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-lake-green to-green-800 rounded-xl flex items-center justify-center mr-3 shadow-lg flex-shrink-0">
          <span className="text-xl md:text-2xl">🚤</span>
        </div>
        <div className="min-w-0">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 font-heading">{title}</h2>
          <p className="text-gray-600 text-xs md:text-sm">Professional fishing guides across Alabama waters</p>
        </div>
      </div>
      
      {!hasContent ? (
        <div className="flex-1 flex items-center justify-center py-12">
          <div className="text-center">
            <div className="text-6xl mb-4">🚤</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No Guides Listed</h3>
            <p className="text-gray-600">Check back soon for professional fishing guides</p>
          </div>
        </div>
      ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
        {guides.map((guide, index) => (
          <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-lake-green">
            <div className="flex items-start mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-lake-green to-green-800 rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                <span className="text-2xl text-white">🎣</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">{guide.name}</h3>
                <div className="flex items-center gap-2 text-xs text-gray-600 mb-3">
                  <span className="flex items-center">
                    <svg className="w-3 h-3 text-gold-accent mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-semibold">Licensed Professional</span>
                  </span>
                </div>
              </div>
            </div>
            
            <div className="space-y-3 mb-4">
              <div className="flex items-start">
                <svg className="w-4 h-4 text-lake-green mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="flex-1">
                  <span className="text-xs font-medium text-gray-500">Region</span>
                  <p className="text-sm font-semibold text-gray-900">{guide.region}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-4 h-4 text-lake-green mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
                <div className="flex-1">
                  <span className="text-xs font-medium text-gray-500">Specialty</span>
                  <p className="text-sm font-semibold text-gray-900">{guide.specialty}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-4 h-4 text-lake-green mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="flex-1">
                  <span className="text-xs font-medium text-gray-500">Trip Types</span>
                  <p className="text-sm text-gray-700">Half Day • Full Day • Multi-Day</p>
                </div>
              </div>
            </div>
            
            <div className="mb-4 pb-4 border-b border-gray-200">
              <div className="flex flex-wrap gap-2">
                <span className="bg-lake-green/10 text-lake-green px-2 py-1 rounded-md text-xs font-medium border border-lake-green/20">
                  🚤 Boat Provided
                </span>
                <span className="bg-lake-green/10 text-lake-green px-2 py-1 rounded-md text-xs font-medium border border-lake-green/20">
                  🎣 Gear Included
                </span>
                <span className="bg-lake-green/10 text-lake-green px-2 py-1 rounded-md text-xs font-medium border border-lake-green/20">
                  📸 Photo Service
                </span>
              </div>
            </div>
            
            <div>
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
      )}
      
      {/* Submission Call-to-Action */}
      <div className="mt-6 md:mt-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 md:p-6 border-2 border-dashed border-lake-green">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 text-2xl md:text-3xl">🎣</div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">Add Your Guide Service</h3>
            <p className="text-sm md:text-base text-gray-700">
              If you like to have your guide service added to the registry, email us at{' '}
              <a 
                href="mailto:guides@reelbama.com" 
                className="text-lake-green hover:text-green-700 font-semibold underline"
              >
                guides@reelbama.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
