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
    <section className="py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-green-800 mb-12 text-center font-serif">{title}</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-green-100">
            <div className="space-y-6">
              {events.map((event, index) => (
                <div key={index} className="flex items-center p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow duration-300">
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-sm font-bold">
                          {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                        </div>
                        <div className="text-lg font-bold">
                          {new Date(event.date).getDate()}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-green-800 mb-1">{event.title}</h3>
                    <p className="text-gray-600 flex items-center">
                      <span className="mr-2">📍</span>
                      {event.location}
                    </p>
                    <p className="text-sm text-green-600 mt-1">
                      {new Date(event.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300">
                      Add to Calendar
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-green-200 text-center">
              <p className="text-gray-600">
                Stay updated with all Alabama fishing events and tournaments
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
