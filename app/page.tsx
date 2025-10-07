import data from '../data/test-website-data.json';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import CatchOfTheWeek from './components/CatchOfTheWeek';
import TournamentWinners from './components/TournamentWinners';
import RoadTripOfTheMonth from './components/RoadTripOfTheMonth';
import PodcastLinks from './components/PodcastLinks';
import DropShotColumn from './components/DropShotColumn';
import TrashFishOfTheWeek from './components/TrashFishOfTheWeek';
import WildlyAlabama from './components/WildlyAlabama';
import PhotoOfTheWeek from './components/PhotoOfTheWeek';
import VideoOfTheWeek from './components/VideoOfTheWeek';
import GuideRegistry from './components/GuideRegistry';
import ImportantCalendar from './components/ImportantCalendar';
import Footer from './components/Footer';

export default function Home() {
  const { site, sections } = data;

  // Helper function to find section by ID
  const getSection = (id: string) => sections.find(section => section.id === id);

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Navigation */}
      <Navigation site={site} />

      {/* Hero Section */}
      <HeroSection 
        title={site.title}
        description={site.description}
        author={site.author}
      />

      {/* Main Content Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 overflow-x-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-16">
            {/* Catch of the Week */}
            <CatchOfTheWeek 
              title={getSection('catchOfTheWeek')?.title || ''}
              items={getSection('catchOfTheWeek')?.items || []}
            />

            {/* Tournament Winners */}
            <TournamentWinners 
              title={getSection('tournamentWinners')?.title || ''}
              items={getSection('tournamentWinners')?.items || []}
            />

            {/* Road Trip of the Month */}
            <RoadTripOfTheMonth 
              title={getSection('roadTripOfTheMonth')?.title || ''}
              article={getSection('roadTripOfTheMonth')?.article || {}}
            />

            {/* Podcast Links */}
            <PodcastLinks 
              title={getSection('podcasts')?.title || ''}
              episodes={getSection('podcasts')?.episodes || []}
            />

            {/* Drop-Shot Column */}
            <DropShotColumn 
              title={getSection('dropShotColumn')?.title || ''}
              posts={getSection('dropShotColumn')?.posts || []}
            />
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-1 space-y-8">
            {/* Trash Fish of the Week */}
            <TrashFishOfTheWeek 
              title={getSection('trashFishOfTheWeek')?.title || ''}
              entries={getSection('trashFishOfTheWeek')?.entries || []}
            />

            {/* Photo of the Week */}
            <PhotoOfTheWeek 
              title={getSection('photoOfTheWeek')?.title || ''}
              photo={getSection('photoOfTheWeek')?.photo || {}}
            />

            {/* Video of the Week */}
            <VideoOfTheWeek 
              title={getSection('videoOfTheWeek')?.title || ''}
              video={getSection('videoOfTheWeek')?.video || {}}
            />

            {/* Guide Registry */}
            <GuideRegistry 
              title={getSection('guideRegistry')?.title || ''}
              guides={getSection('guideRegistry')?.guides || []}
            />
          </div>
        </div>

        {/* Full-width sections */}
        <div className="mt-16 space-y-16">
          {/* Wildly Alabama */}
          <WildlyAlabama 
            title={getSection('wildlyAlabama')?.title || ''}
            creatures={getSection('wildlyAlabama')?.creatures || []}
          />

          {/* Important Calendar */}
          <ImportantCalendar 
            title={getSection('calendar')?.title || ''}
            events={getSection('calendar')?.events || []}
          />
        </div>
      </main>

      {/* Footer */}
      <Footer site={site} />
    </div>
  );
}
