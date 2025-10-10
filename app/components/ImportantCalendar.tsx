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
  const hasContent = events && events.length > 0;

  return (
    <section className="bg-white rounded-lg shadow-xl border-2 border-slate-300 p-4 md:p-8">
      <div className="flex items-center mb-6 md:mb-8 border-b-2 border-slate-800 pb-4">
        <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-800 rounded-md flex items-center justify-center mr-4 shadow-lg flex-shrink-0">
          <span className="text-2xl md:text-3xl">📅</span>
        </div>
        <div className="min-w-0">
          <h2 className="text-xl md:text-3xl font-black text-slate-900 font-heading tracking-tight uppercase">{title}</h2>
          <p className="text-amber-600 text-sm md:text-base font-bold tracking-wide uppercase">Upcoming Events & Tournaments</p>
        </div>
      </div>
      
      {!hasContent ? (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">📅</div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">No Events Scheduled</h3>
          <p className="text-slate-600 font-medium">Check back soon for upcoming events</p>
        </div>
      ) : (
      <div className="space-y-4">
        {events.map((event, index) => (
          <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 md:p-6 bg-gray-50 rounded-lg border-2 border-slate-300 hover:shadow-2xl hover:border-amber-600 transition-all duration-300">
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-slate-800 rounded-md flex items-center justify-center shadow-lg border-2 border-amber-500">
                  <div className="text-white text-center">
                    <div className="text-xs md:text-sm font-black uppercase">
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                    </div>
                    <div className="text-base md:text-lg font-black">
                      {new Date(event.date).getDate()}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-base md:text-xl font-black text-slate-900 mb-1 tracking-tight">{event.title}</h3>
                <p className="text-sm md:text-base text-slate-700 flex items-center font-semibold">
                  <span className="mr-2">📍</span>
                  <span className="truncate">{event.location}</span>
                </p>
                <p className="text-xs md:text-sm text-amber-600 mt-1 font-bold uppercase tracking-wide">
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
              <button className="w-full sm:w-auto bg-slate-800 hover:bg-slate-900 text-white px-4 py-3 rounded-md text-xs md:text-sm font-bold transition-colors duration-300 shadow-lg whitespace-nowrap uppercase tracking-wide">
                Add to Calendar
              </button>
            </div>
          </div>
        ))}
      </div>
      )}
      
      <div className="mt-8 pt-6 border-t-2 border-slate-300 text-center">
        <p className="text-slate-700 font-semibold">
          Stay updated with all Alabama fishing events and tournaments
        </p>
      </div>
    </section>
  );
}
