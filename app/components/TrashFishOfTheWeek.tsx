interface TrashFishEntry {
  offender: string;
  violation: string;
  location: string;
  fine: number;
  date: string;
}

interface TrashFishOfTheWeekProps {
  title: string;
  entries: TrashFishEntry[];
}

export default function TrashFishOfTheWeek({ title, entries }: TrashFishOfTheWeekProps) {
  const hasContent = entries && entries.length > 0;

  return (
    <section className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 md:p-8">
      <div className="flex items-center mb-6 md:mb-8">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-sunset-orange to-orange-800 rounded-xl flex items-center justify-center mr-3 shadow-lg flex-shrink-0">
          <span className="text-xl md:text-2xl">⚠️</span>
        </div>
        <div className="min-w-0">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 font-heading">{title}</h2>
          <p className="text-gray-600 text-xs md:text-sm">Fishing violations and penalties in Alabama waters</p>
        </div>
      </div>
      
      {!hasContent ? (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">⚠️</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">No Violations Reported</h3>
          <p className="text-gray-600">Keeping Alabama waters clean and legal!</p>
        </div>
      ) : (
      <div className="space-y-6">
        {entries.map((entry, index) => (
          <div key={index} className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border-2 border-red-200 relative overflow-hidden hover:shadow-lg transition-all duration-300">
            {/* Subtle warning stripe */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-400 to-orange-400"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <span className="mr-2">👤</span>
                  Offender Details
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Name:</span>
                    <span className="text-gray-900">{entry.offender}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Violation:</span>
                    <span className="text-gray-900">{entry.violation}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Location:</span>
                    <span className="text-gray-900">{entry.location}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <span className="mr-2">💰</span>
                  Penalty
                </h3>
                <div className="bg-white rounded-lg p-4 border border-red-200">
                  <div className="text-3xl font-bold text-sunset-orange">${entry.fine}</div>
                  <p className="text-gray-700 font-medium">Fine Amount</p>
                  <p className="text-sm text-gray-500 mt-2">Date: {entry.date}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-red-200">
              <div className="flex items-center justify-center">
                <span className="bg-orange-100 text-sunset-orange px-4 py-2 rounded-full text-sm font-medium border border-orange-200">
                  🚫 Fishing Violation Reported
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      )}
    </section>
  );
}
