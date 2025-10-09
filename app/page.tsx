import data from '../data/test-website-data.json';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import CatchOfTheWeek from './components/CatchOfTheWeek';
import TournamentSchedule from './components/TournamentSchedule';
import RoadTripOfTheMonth from './components/RoadTripOfTheMonth';
import PodcastLinks from './components/PodcastLinks';
import DropShotColumn from './components/DropShotColumn';
import TrashFishOfTheWeek from './components/TrashFishOfTheWeek';
import WildlyAlabama from './components/WildlyAlabama';
import PhotoOfTheWeek from './components/PhotoOfTheWeek';
import VideoOfTheWeek from './components/VideoOfTheWeek';
import GuideRegistry from './components/GuideRegistry';
import ImportantCalendar from './components/ImportantCalendar';
import FishingConditions from './components/FishingConditions';
import GearRecommendations from './components/GearRecommendations';
import Footer from './components/Footer';

// Type definitions for the data
interface Catch {
  angler: string;
  fish: string;
  weightLbs: number;
  location: string;
  photoUrl: string;
  dateCaught: string;
}

interface Tournament {
  name: string;
  lake: string;
  ramp: string;
  date: string;
  hours: string;
  contact: string;
}

interface RoadTripArticle {
  title: string;
  author: string;
  publishedDate: string;
  heroImage: string;
  markdown: string;
}

interface PodcastEpisode {
  title: string;
  host: string;
  guest: string;
  url: string;
  date: string;
}

interface DropShotPost {
  title: string;
  author: string;
  date: string;
  markdown: string;
}

interface TrashFishEntry {
  offender: string;
  violation: string;
  location: string;
  fine: number;
  date: string;
}

interface Photo {
  caption: string;
  photographer: string;
  url: string;
}

interface Video {
  title: string;
  creator: string;
  thumbnail: string;
  videoUrl: string;
}

interface Guide {
  name: string;
  region: string;
  specialty: string;
  contact: string;
}

interface Creature {
  name: string;
  imageUrl: string;
  description: string;
}

interface CalendarEvent {
  date: string;
  title: string;
  location: string;
}

interface GearItem {
  name: string;
  category: string;
  price: string;
  rating: number;
  description: string;
  imageUrl: string;
  bestFor: string;
  availability: string;
}

interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  windSpeed: number;
  windDirection: string;
  pressure: number;
  humidity: number;
}

interface LakeCondition {
  lake: string;
  waterTemp: number;
  waterLevel: string;
  clarity: string;
  fishActivity: string;
  bestBait: string;
}

interface SectionData {
  id: string;
  title: string;
  items?: Catch[] | Tournament[] | GearItem[];
  article?: RoadTripArticle;
  episodes?: PodcastEpisode[];
  posts?: DropShotPost[];
  entries?: TrashFishEntry[];
  photo?: Photo;
  video?: Video;
  guides?: Guide[];
  creatures?: Creature[];
  events?: CalendarEvent[];
  weather?: WeatherData[];
  lakeConditions?: LakeCondition[];
}

export default function Home() {
  const { site, sections } = data;

  // Helper function to find section by ID
  const getSection = (id: string): SectionData | undefined => sections.find((section: SectionData) => section.id === id);

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

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 overflow-x-hidden">
        {/* Featured Blog Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
              Latest from Our Blog
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert tips, lake reports, and community stories from Alabama&apos;s fishing experts
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Featured Blog Post */}
            <div className="lg:col-span-2">
              <RoadTripOfTheMonth 
                title={getSection('roadTripOfTheMonth')?.title as string || ''}
                article={(getSection('roadTripOfTheMonth')?.article as RoadTripArticle) || {} as RoadTripArticle}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Drop-Shot Column */}
            <DropShotColumn 
              title={getSection('dropShotColumn')?.title as string || ''}
              posts={(getSection('dropShotColumn')?.posts as DropShotPost[]) || []}
            />

            {/* Podcast Links */}
            <PodcastLinks 
              title={getSection('podcasts')?.title as string || ''}
              episodes={(getSection('podcasts')?.episodes as PodcastEpisode[]) || []}
            />
          </div>
        </section>

        {/* Community Highlights */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
              Community Highlights
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Amazing catches, tournament wins, and community moments from our members
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Catch of the Week */}
            <div className="lg:w-2/3">
              <CatchOfTheWeek 
                title={getSection('catchOfTheWeek')?.title as string || ''}
                items={(getSection('catchOfTheWeek')?.items as Catch[]) || []}
              />
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 flex flex-col gap-8 min-w-0">
              {/* Photo of the Week */}
              <PhotoOfTheWeek 
                title={getSection('photoOfTheWeek')?.title as string || ''}
                photo={(getSection('photoOfTheWeek')?.photo as Photo) || {} as Photo}
              />

              {/* Video of the Week */}
              <VideoOfTheWeek 
                title={getSection('videoOfTheWeek')?.title as string || ''}
                video={(getSection('videoOfTheWeek')?.video as Video) || {} as Video}
              />
            </div>
          </div>
        </section>

        {/* Tournament & Resources Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Tournament Schedule */}
            <TournamentSchedule 
              title={getSection('tournamentSchedule')?.title as string || ''}
              items={(getSection('tournamentSchedule')?.items as Tournament[]) || []}
            />

            {/* Guide Registry */}
            <GuideRegistry 
              title={getSection('guideRegistry')?.title as string || ''}
              guides={(getSection('guideRegistry')?.guides as Guide[]) || []}
            />
          </div>
        </section>

        {/* Fishing Conditions & Gear Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
              Fishing Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with current conditions and find the best gear for your next fishing adventure
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Fishing Conditions */}
            <FishingConditions 
              weather={getSection('fishingConditions')?.weather || []}
              lakeConditions={getSection('fishingConditions')?.lakeConditions || []}
            />

            {/* Gear Recommendations */}
            <GearRecommendations 
              title="Recommended Gear"
              items={(getSection('gearRecommendations')?.items as GearItem[]) || []}
            />
          </div>
        </section>

        {/* Full-width sections */}
        <div className="space-y-16">
          {/* Wildly Alabama */}
          <WildlyAlabama 
            title={getSection('wildlyAlabama')?.title as string || ''}
            creatures={(getSection('wildlyAlabama')?.creatures as Creature[]) || []}
          />

          {/* Important Calendar */}
          <ImportantCalendar 
            title={getSection('calendar')?.title as string || ''}
            events={(getSection('calendar')?.events as CalendarEvent[]) || []}
          />

          {/* Trash Fish of the Week - moved to bottom */}
          <TrashFishOfTheWeek 
            title={getSection('trashFishOfTheWeek')?.title as string || ''}
            entries={(getSection('trashFishOfTheWeek')?.entries as TrashFishEntry[]) || []}
          />
        </div>
      </main>

      {/* Footer */}
      <Footer site={site} />
    </div>
  );
}
