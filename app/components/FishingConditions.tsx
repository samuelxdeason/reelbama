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
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 md:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6 md:mb-8">
        <div className="flex items-center min-w-0">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-deep-blue to-lake-green rounded-xl flex items-center justify-center mr-3 shadow-lg flex-shrink-0">
            <span className="text-xl md:text-2xl">📋</span>
          </div>
          <div className="min-w-0">
            <h2 className="text-lg md:text-2xl font-bold text-gray-900 font-heading">{title}</h2>
            <p className="text-gray-600 text-xs md:text-sm">Latest reports from Alabama lakes</p>
          </div>
        </div>
        {showViewAll && (
          <a 
            href="/reports" 
            className="text-deep-blue hover:text-lake-green font-medium text-sm flex items-center whitespace-nowrap ml-auto sm:ml-0"
          >
            View All Reports
            <svg className="ml-1 h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        )}
      </div>

      <div className="space-y-6">
        {displayReports && displayReports.length > 0 ? (
          displayReports.map((report, index) => (
          <article key={index} className="bg-gray-50 rounded-xl p-4 md:p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
            {/* Report Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4 pb-4 border-b border-gray-200">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">{report.lake}</h3>
                <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-gray-600">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {report.date}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {report.reporter}
                  </span>
                </div>
              </div>
              <div className="flex gap-3 text-sm">
                <div className="bg-deep-blue/10 text-deep-blue px-3 py-1 rounded-lg font-semibold">
                  {report.waterTemp}°F
                </div>
                <div className="bg-lake-green/10 text-lake-green px-3 py-1 rounded-lg font-semibold">
                  {report.clarity}
                </div>
              </div>
            </div>

            {/* Conditions */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                <span className="mr-2">🌤️</span>
                Conditions
              </h4>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">{report.conditions}</p>
            </div>

            {/* Report */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                <span className="mr-2">📝</span>
                Report
              </h4>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">{report.report}</p>
            </div>

            {/* Catch Report */}
            {report.catchReport && (
              <div className="mb-4 p-3 bg-success-green/10 rounded-lg border border-success-green/20">
                <h4 className="text-sm font-semibold text-success-green mb-2 flex items-center">
                  <span className="mr-2">🎣</span>
                  Catch Report
                </h4>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">{report.catchReport}</p>
              </div>
            )}

            {/* Best Lures */}
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                <span className="mr-2">🎣</span>
                Recommended Lures
              </h4>
              <div className="flex flex-wrap gap-2">
                {report.bestLures.map((lure, lureIndex) => (
                  <span 
                    key={lureIndex}
                    className="bg-sunset-orange/10 text-sunset-orange px-3 py-1 rounded-full text-xs md:text-sm font-medium"
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
            <h3 className="text-xl font-bold text-gray-900 mb-2">No Reports Yet</h3>
            <p className="text-gray-600">Check back soon for the latest fishing reports from Alabama lakes!</p>
          </div>
        )}
      </div>

      {/* Submission CTA */}
      <div className="mt-6 p-4 md:p-5 bg-gradient-to-r from-blue-50 via-white to-red-50 rounded-xl border border-gray-200">
        <div className="flex items-start">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-deep-blue to-lake-green rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0 shadow-md">
            <span className="text-lg md:text-xl">📧</span>
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-gray-900 mb-2 text-base md:text-lg">Submit Your Fishing Report</h4>
            <p className="text-sm md:text-base text-gray-700 mb-2">
              Been out on the water recently? Share your fishing report with the community! Include lake name, conditions, what you caught, and what lures worked best.
            </p>
            <a 
              href="mailto:reports@reelbama.com" 
              className="text-deep-blue hover:text-lake-green font-semibold text-sm md:text-base transition-colors inline-flex items-center"
            >
              reports@reelbama.com
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
