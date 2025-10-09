import FishingConditions from '../components/FishingConditions';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { getFishingReports } from '../../sanity/lib/fetch';

export default async function ReportsPage() {
  // Fetch all fishing reports from Sanity
  const reports = await getFishingReports();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navigation site={{
        title: "ReelBama",
        logoUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=400&fit=crop&crop=center"
      }} />

      {/* Header */}
      <div className="bg-gradient-to-br from-white via-blue-50 to-red-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 md:py-3 mb-4 md:mb-6 shadow-lg border border-gray-200">
              <span className="text-xl md:text-2xl mr-2 md:mr-3">📋</span>
              <span className="text-sm md:text-lg font-medium text-alabama-red">All Fishing Reports</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 font-heading">
              Alabama Fishing Reports
            </h1>
            <p className="text-base md:text-xl text-gray-700 max-w-2xl mx-auto">
              Latest reports from anglers across Alabama&apos;s best fishing lakes and rivers.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <FishingConditions 
          reports={reports}
          title="Fishing Reports"
        />
      </main>

      {/* Footer */}
      <Footer site={{
        title: "ReelBama",
        description: "Your one-stop hub for fishing stories, tournaments, and weekly catches across Alabama waters.",
        author: "Bryan Brasher",
        logoUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=400&fit=crop&crop=center",
        themeColor: "#1E3A8A"
      }} />
    </div>
  );
}

