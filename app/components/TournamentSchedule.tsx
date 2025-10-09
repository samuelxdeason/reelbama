interface Tournament {
  name: string;
  lake: string;
  ramp: string;
  date: string;
  hours: string;
  contact: string;
}

interface TournamentScheduleProps {
  title: string;
  items: Tournament[];
}

export default function TournamentSchedule({ title, items }: TournamentScheduleProps) {
  return (
    <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 md:p-8 flex flex-col h-full">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6 md:mb-8">
        <div className="flex items-center">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-gold-accent to-yellow-600 rounded-xl flex items-center justify-center mr-3 shadow-lg flex-shrink-0">
            <span className="text-xl md:text-2xl">📅</span>
          </div>
          <div className="min-w-0">
            <h2 className="text-lg md:text-2xl font-bold text-gray-900 font-heading">{title}</h2>
            <p className="text-gray-600 text-xs md:text-sm">Upcoming fishing tournaments across Alabama</p>
          </div>
        </div>
        <a href="#" className="text-alabama-red hover:text-red-800 font-medium text-sm flex items-center whitespace-nowrap ml-auto sm:ml-0">
          Full Schedule
          <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 flex-1">
        {items.map((tournament, index) => (
          <article key={index} className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 md:p-6 hover:shadow-lg transition-all duration-300 border-2 border-gray-200 hover:border-gold-accent">
            <div className="flex flex-col gap-3">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-gold-accent text-gray-900 text-xs font-bold px-2 py-1 rounded-full flex-shrink-0">UPCOMING</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 break-words">{tournament.name}</h3>
                </div>
                <div className="text-3xl flex-shrink-0">🏆</div>
              </div>
              
              <div className="space-y-2 text-sm md:text-base">
                <div className="flex items-start">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-community-blue mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-700"><span className="font-semibold">Date:</span> {tournament.date}</span>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-lake-green mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-700 break-words"><span className="font-semibold">Lake:</span> {tournament.lake}</span>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-alabama-red mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span className="text-gray-700 break-words"><span className="font-semibold">Ramp:</span> {tournament.ramp}</span>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-sunset-orange mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700"><span className="font-semibold">Hours:</span> {tournament.hours}</span>
                </div>
              </div>
              
              <div className="pt-3 border-t border-gray-300 mt-2">
                <a 
                  href={`mailto:${tournament.contact}`}
                  className="bg-gold-accent hover:bg-yellow-600 text-gray-900 font-semibold text-xs md:text-sm px-4 py-2 rounded-lg transition-colors duration-300 inline-flex items-center justify-center w-full"
                >
                  <span className="mr-2">📧</span>
                  Contact Organizer
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      
      {/* Submission Call-to-Action */}
      <div className="mt-6 md:mt-8 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-4 md:p-6 border-2 border-dashed border-gold-accent">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 text-2xl md:text-3xl">📋</div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">Add Your Tournament</h3>
            <p className="text-sm md:text-base text-gray-700 mb-3">
              If you&apos;re planning a tournament, let us know at{' '}
              <a 
                href="mailto:schedule@reelbama.com" 
                className="text-sunset-orange hover:text-orange-700 font-semibold underline"
              >
                schedule@reelbama.com
              </a>
            </p>
            <div className="bg-white/60 rounded-lg p-3 text-sm text-gray-700">
              <p className="font-semibold mb-2">Include:</p>
              <ul className="list-disc list-inside space-y-1 text-xs md:text-sm">
                <li>Name of the tournament</li>
                <li>Lake and ramp location</li>
                <li>Tournament hours</li>
                <li>Contact information</li>
              </ul>
              <p className="mt-3 text-xs italic text-gray-600">
                * Tournaments will be verified with a phone call.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
