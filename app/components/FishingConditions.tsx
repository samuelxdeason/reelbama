interface FishingReport {
  lake: string;
  date: string;
  reporter: string;
  conditions: string;
  waterTemp: number;
  clarity: string;
  report: string;
  catchReport: string;
  bestLures: string[];
}

interface FishingConditionsProps {
  reports: FishingReport[];
  title?: string;
  showViewAll?: boolean;
  limit?: number;
}

export default function FishingConditions({ reports = [], title = "Fishing Reports", showViewAll = false, limit }: FishingConditionsProps) {
  const displayReports = limit ? reports.slice(0, limit) : reports;

  return (
    <div className="bg-white rounded-lg shadow-xl border-2 border-slate-300 p-4 md:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6 md:mb-8 border-b-2 border-slate-800 pb-4">
        <div className="flex items-center min-w-0">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-800 rounded-md flex items-center justify-center mr-4 shadow-lg flex-shrink-0">
            <span className="text-2xl md:text-3xl">📋</span>
          </div>
          <div className="min-w-0">
            <h2 className="text-xl md:text-3xl font-black text-slate-900 font-heading tracking-tight uppercase">{title}</h2>
            <p className="text-amber-600 text-sm md:text-base font-bold tracking-wide uppercase">Latest Reports from Alabama Lakes</p>
          </div>
        </div>
        {showViewAll && (
          <a 
            href="/reports" 
            className="text-slate-800 hover:text-amber-600 font-bold text-sm md:text-base flex items-center whitespace-nowrap ml-auto sm:ml-0 uppercase border-b-2 border-transparent hover:border-amber-600 transition-all"
          >
            View All Reports
            <svg className="ml-1 h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        )}
      </div>

      <div className="space-y-6">
        {displayReports && displayReports.length > 0 ? (
          displayReports.map((report, index) => (
          <article key={index} className="bg-gray-50 rounded-lg p-4 md:p-6 border-2 border-slate-300 hover:shadow-2xl hover:border-amber-600 transition-all duration-300">
            {/* Report Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4 pb-4 border-b-2 border-slate-300">
              <div>
                <h3 className="text-lg md:text-xl font-black text-slate-900 mb-1 tracking-tight">{report.lake}</h3>
                <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-slate-600">
                  <span className="flex items-center font-bold">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {report.date}
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="flex items-center font-bold">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {report.reporter}
                  </span>
                </div>
              </div>
              <div className="flex gap-3 text-sm">
                <div className="bg-blue-100 text-blue-800 px-3 py-2 rounded-md font-black border-2 border-blue-200 uppercase tracking-wide">
                  {report.waterTemp}°F
                </div>
                <div className="bg-emerald-100 text-emerald-800 px-3 py-2 rounded-md font-black border-2 border-emerald-200 uppercase tracking-wide">
                  {report.clarity}
                </div>
              </div>
            </div>

            {/* Conditions */}
            <div className="mb-4">
              <h4 className="text-sm md:text-base font-black text-slate-900 mb-2 flex items-center uppercase tracking-wide">
                <span className="mr-2">🌤️</span>
                Conditions
              </h4>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed font-medium">{report.conditions}</p>
            </div>

            {/* Report */}
            <div className="mb-4">
              <h4 className="text-sm md:text-base font-black text-slate-900 mb-2 flex items-center uppercase tracking-wide">
                <span className="mr-2">📝</span>
                Report
              </h4>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed font-medium">{report.report}</p>
            </div>

            {/* Catch Report */}
            {report.catchReport && (
              <div className="mb-4 p-4 bg-emerald-50 rounded-lg border-2 border-emerald-200">
                <h4 className="text-sm md:text-base font-black text-emerald-800 mb-2 flex items-center uppercase tracking-wide">
                  <span className="mr-2">🎣</span>
                  Catch Report
                </h4>
                <p className="text-sm md:text-base text-slate-700 leading-relaxed font-medium">{report.catchReport}</p>
              </div>
            )}

            {/* Best Lures */}
            <div>
              <h4 className="text-sm md:text-base font-black text-slate-900 mb-2 flex items-center uppercase tracking-wide">
                <span className="mr-2">🎣</span>
                Recommended Lures
              </h4>
              <div className="flex flex-wrap gap-2">
                {report.bestLures.map((lure, lureIndex) => (
                  <span 
                    key={lureIndex}
                    className="bg-amber-100 text-amber-700 px-3 py-2 rounded-md text-xs md:text-sm font-bold border-2 border-amber-200 uppercase tracking-wide"
                  >
                    {lure}
                  </span>
                ))}
              </div>
            </div>
          </article>
          ))
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎣</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">No Reports Yet</h3>
            <p className="text-slate-600 font-medium">Check back soon for the latest fishing reports from Alabama lakes!</p>
          </div>
        )}
      </div>

      {/* Submission CTA */}
      <div className="mt-6 p-4 md:p-5 bg-amber-50 rounded-lg border-2 border-dashed border-amber-600">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-500 rounded flex items-center justify-center flex-shrink-0 shadow-lg border-2 border-amber-600">
            <span className="text-lg md:text-xl">📧</span>
          </div>
          <div className="flex-1">
            <h4 className="font-black text-slate-900 mb-2 text-base md:text-lg uppercase tracking-tight">Submit Your Fishing Report</h4>
            <p className="text-sm md:text-base text-slate-700 mb-2 font-medium">
              Been out on the water recently? Share your fishing report with the community! Include lake name, conditions, what you caught, and what lures worked best.
            </p>
            <a 
              href="mailto:reports@reelbama.com" 
              className="text-amber-700 hover:text-amber-800 font-bold text-sm md:text-base transition-colors inline-flex items-center"
            >
              reports@reelbama.com
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
