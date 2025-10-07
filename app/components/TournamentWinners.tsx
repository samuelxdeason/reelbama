interface TournamentWinner {
  event: string;
  winner: string;
  team: string;
  weightLbs: number;
  date: string;
}

interface TournamentWinnersProps {
  title: string;
  items: TournamentWinner[];
}

export default function TournamentWinners({ title, items }: TournamentWinnersProps) {
  return (
    <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mr-4">
            <span className="text-2xl">🏆</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 font-heading">{title}</h2>
            <p className="text-gray-600 text-sm">Recent tournament champions and results</p>
          </div>
        </div>
        <a href="#" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
          Full Results
          <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((winner, index) => (
          <article key={index} className="group bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white hover:shadow-lg transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <span className="bg-yellow-400 text-blue-900 text-xs font-bold px-2 py-1 rounded-full mr-3">WINNER</span>
                  <span className="text-blue-200 text-sm">{winner.date}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{winner.event}</h3>
                <div className="space-y-1">
                  <p className="text-blue-100"><span className="font-medium">Champion:</span> {winner.winner}</p>
                  <p className="text-blue-200 text-sm"><span className="font-medium">Team:</span> {winner.team}</p>
                </div>
              </div>
              <div className="text-right ml-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                  <div className="text-2xl font-bold text-yellow-300">{winner.weightLbs}</div>
                  <div className="text-xs text-blue-200">lbs total</div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t border-blue-500/30">
              <div className="flex items-center">
                <svg className="w-4 h-4 text-yellow-300 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-blue-200">Tournament Champion</span>
              </div>
              <button className="bg-white/20 hover:bg-white/30 text-white text-xs font-medium px-3 py-1 rounded-lg transition-colors duration-300">
                View Details
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
