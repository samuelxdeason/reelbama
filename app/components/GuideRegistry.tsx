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
    <section className="bg-white rounded-lg shadow-xl border-2 border-slate-300 p-4 md:p-8 flex flex-col h-full">
      <div className="flex items-center mb-6 md:mb-8 border-b-2 border-slate-800 pb-4">
        <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-800 rounded-md flex items-center justify-center mr-4 shadow-lg flex-shrink-0">
          <span className="text-2xl md:text-3xl">🚤</span>
        </div>
        <div className="min-w-0">
          <h2 className="text-xl md:text-3xl font-black text-slate-900 font-heading tracking-tight uppercase">{title}</h2>
          <p className="text-amber-600 text-sm md:text-base font-bold tracking-wide uppercase">Professional Fishing Guides</p>
        </div>
      </div>
      
      {!hasContent ? (
        <div className="flex-1 flex items-center justify-center py-12">
          <div className="text-center">
            <div className="text-6xl mb-4">🚤</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">No Guides Listed</h3>
            <p className="text-slate-600 font-medium">Check back soon for professional fishing guides</p>
          </div>
        </div>
      ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
        {guides.map((guide, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-slate-300 hover:border-amber-600">
            <div className="flex items-start mb-4">
              <div className="w-16 h-16 bg-amber-500 rounded flex items-center justify-center mr-4 flex-shrink-0 shadow-lg border-2 border-amber-600">
                <span className="text-2xl text-white">🎣</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg md:text-xl font-black text-slate-900 mb-1 tracking-tight">{guide.name}</h3>
                <div className="flex items-center gap-2 text-xs text-slate-700 mb-3">
                  <span className="flex items-center">
                    <svg className="w-3 h-3 text-amber-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-black uppercase tracking-wide">Licensed Professional</span>
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
            
            <div className="mb-4 pb-4 border-b-2 border-slate-300">
              <div className="flex flex-wrap gap-2">
                <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-md text-xs font-bold border-2 border-amber-200 uppercase tracking-wide">
                  🚤 Boat Provided
                </span>
                <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-md text-xs font-bold border-2 border-amber-200 uppercase tracking-wide">
                  🎣 Gear Included
                </span>
                <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-md text-xs font-bold border-2 border-amber-200 uppercase tracking-wide">
                  📸 Photo Service
                </span>
              </div>
            </div>
            
            <div>
              <a 
                href={`mailto:${guide.contact}`}
                className="bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300 inline-flex items-center shadow-lg w-full justify-center uppercase tracking-wide"
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
      <div className="mt-6 md:mt-8 bg-amber-50 rounded-lg p-4 md:p-6 border-2 border-dashed border-amber-600">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 text-2xl md:text-3xl">🎣</div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base md:text-lg font-black text-slate-900 mb-2 uppercase tracking-tight">Add Your Guide Service</h3>
            <p className="text-sm md:text-base text-slate-700 font-medium">
              If you like to have your guide service added to the registry, email us at{' '}
              <a 
                href="mailto:guides@reelbama.com" 
                className="text-amber-700 hover:text-amber-800 font-bold underline"
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
