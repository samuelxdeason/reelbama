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
    <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 md:p-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6 md:mb-8">
        <div className="flex items-center">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-gold-accent to-yellow-600 rounded-xl flex items-center justify-center mr-3 shadow-lg flex-shrink-0">
            <span className="text-xl md:text-2xl">🏆</span>
          </div>
          <div className="min-w-0">
            <h2 className="text-lg md:text-2xl font-bold text-gray-900 font-heading">{title}</h2>
            <p className="text-gray-600 text-xs md:text-sm">Recent tournament champions and results</p>
          </div>
        </div>
        <a href="#" className="text-alabama-red hover:text-red-800 font-medium text-sm flex items-center whitespace-nowrap ml-auto sm:ml-0">
          Full Results
          <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {items.map((winner, index) => (
          <article key={index} className="group bg-alabama-red rounded-xl p-4 md:p-6 text-white hover:shadow-lg hover:bg-red-800 transition-all duration-300 border border-red-200">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="bg-gold-accent text-gray-900 text-xs font-bold px-2 py-1 rounded-full">WINNER</span>
                  <span className="text-white/90 text-xs md:text-sm">{winner.date}</span>
                </div>
                <h3 className="text-base md:text-lg font-bold mb-2">{winner.event}</h3>
                <div className="space-y-1">
                  <p className="text-white/95 text-sm md:text-base break-words"><span className="font-medium">Champion:</span> {winner.winner}</p>
                  <p className="text-white/90 text-xs md:text-sm break-words"><span className="font-medium">Team:</span> {winner.team}</p>
                </div>
              </div>
              <div className="text-center sm:text-right flex-shrink-0">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-2 md:p-3 border border-white/30 inline-block">
                  <div className="text-xl md:text-2xl font-bold text-gold-accent">{winner.weightLbs}</div>
                  <div className="text-[10px] md:text-xs text-white/90 whitespace-nowrap">lbs total</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-white/20">
              <div className="flex items-center">
                <svg className="w-4 h-4 text-gold-accent mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs md:text-sm text-white/90">Tournament Champion</span>
              </div>
              <button className="bg-white/20 hover:bg-white/30 text-white text-xs font-medium px-3 py-1.5 rounded-lg transition-colors duration-300 whitespace-nowrap w-full sm:w-auto">
                View Details
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
