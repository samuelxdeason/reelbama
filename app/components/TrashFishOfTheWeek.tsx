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
  return (
    <section className="py-16 bg-gradient-to-b from-red-50 to-white">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center mb-12">
          <div className="text-4xl mr-4">⚠️</div>
          <h2 className="text-4xl font-bold text-red-800 font-serif">{title}</h2>
        </div>
        
        <div className="max-w-2xl mx-auto">
          {entries.map((entry, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg border-2 border-red-200 relative overflow-hidden">
              {/* Caution tape effect */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-500 to-yellow-500"></div>
              <div className="absolute top-2 left-4 text-red-800 font-bold text-sm transform -rotate-12">⚠️ CAUTION ⚠️</div>
              
              <div className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-red-800 mb-4">Offender Details</h3>
                    <div className="space-y-2">
                      <p><span className="font-medium">Name:</span> {entry.offender}</p>
                      <p><span className="font-medium">Violation:</span> {entry.violation}</p>
                      <p><span className="font-medium">Location:</span> {entry.location}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-red-800 mb-4">Penalty</h3>
                    <div className="bg-red-100 rounded-lg p-4">
                      <div className="text-3xl font-bold text-red-600">${entry.fine}</div>
                      <p className="text-red-700 font-medium">Fine Amount</p>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Date: {entry.date}</p>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-red-200">
                  <div className="flex items-center justify-center">
                    <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">
                      🚫 Fishing Violation Reported
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
