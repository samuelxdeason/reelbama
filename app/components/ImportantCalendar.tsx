interface CalendarEvent {
  date: string;
  title: string;
  location: string;
}

interface ImportantCalendarProps {
  title: string;
  events: CalendarEvent[];
}

export default function ImportantCalendar({ title, events }: ImportantCalendarProps) {
  return (
    <section className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 md:p-8">
      <div className="flex items-center mb-6 md:mb-8">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-community-blue to-blue-800 rounded-xl flex items-center justify-center mr-3 shadow-lg flex-shrink-0">
          <span className="text-xl md:text-2xl">📅</span>
        </div>
        <div className="min-w-0">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 font-heading">{title}</h2>
          <p className="text-gray-600 text-xs md:text-sm">Upcoming fishing events and tournaments in Alabama</p>
        </div>
      </div>
      
      <div className="space-y-4">
        {events.map((event, index) => (
          <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 md:p-6 bg-gradient-to-r from-blue-50 to-sky-50 rounded-lg border border-gray-200 hover:shadow-md hover:border-community-blue transition-all duration-300">
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-community-blue rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-white text-center">
                    <div className="text-xs md:text-sm font-bold">
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                    </div>
                    <div className="text-base md:text-lg font-bold">
                      {new Date(event.date).getDate()}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-base md:text-xl font-bold text-gray-900 mb-1">{event.title}</h3>
                <p className="text-sm md:text-base text-gray-600 flex items-center">
                  <span className="mr-2">📍</span>
                  <span className="truncate">{event.location}</span>
                </p>
                <p className="text-xs md:text-sm text-community-blue mt-1 font-medium">
                  {new Date(event.date).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            </div>
            
            <div className="flex-shrink-0 w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-community-blue hover:bg-sky-600 text-white px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-colors duration-300 shadow-md whitespace-nowrap">
                Add to Calendar
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-200 text-center">
        <p className="text-gray-600">
          Stay updated with all Alabama fishing events and tournaments
        </p>
      </div>
    </section>
  );
}
