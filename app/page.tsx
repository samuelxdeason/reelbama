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

// Sanity imports
import {
  getCatchesOfTheWeek,
  getFishingReports,
  getTournaments,
  getPhotoOfTheWeek,
  getVideoOfTheWeek,
  getGuides,
  getDropShotPosts,
  getRoadTrip,
  getGearRecommendations,
  getCreatures,
  getCalendarEvents,
  getTrashFish,
  blockContentToText,
} from '../sanity/lib/fetch';

// Note: The site will show empty sections until you add content to Sanity at /studio
// Visit http://localhost:3001/api/sanity-status to check what content exists

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

export default async function Home() {
  // Site info (hardcoded for now, can add to Sanity later)
  const site = {
    title: "ReelBama",
    description: "Your one-stop hub for fishing stories, tournaments, and weekly catches across Alabama waters.",
    author: "Bryan Brasher",
    logoUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=400&fit=crop&crop=center",
    themeColor: "#1E3A8A"
  };

  // Fetch all data from Sanity
  const [
    catches,
    fishingReports,
    tournaments,
    photoOfWeek,
    videoOfWeek,
    guides,
    sanityDropShot,
    roadTripData,
    gearItems,
    creatures,
    calendarEvents,
    trashFishEntry,
  ] = await Promise.all([
    getCatchesOfTheWeek(),
    getFishingReports(1),
    getTournaments(),
    getPhotoOfTheWeek(),
    getVideoOfTheWeek(),
    getGuides(),
    getDropShotPosts(3),
    getRoadTrip(),
    getGearRecommendations(3),
    getCreatures(),
    getCalendarEvents(),
    getTrashFish(),
  ])

  // Transform Sanity data to match component interfaces
  interface SanityDropShotPost {
    title: string;
    author: string;
    publishedDate: string;
    excerpt?: string;
    content?: unknown[];
  }
  
  const dropShotPosts = sanityDropShot.map((post: SanityDropShotPost) => ({
    title: post.title,
    author: post.author,
    date: new Date(post.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
    markdown: post.excerpt || blockContentToText(post.content || []),
  }))
  
  const roadTrip = roadTripData ? {
    title: roadTripData.title,
    author: roadTripData.author,
    publishedDate: roadTripData.publishedDate,
    heroImage: roadTripData.heroImage,
    markdown: roadTripData.excerpt || blockContentToText(roadTripData.content),
  } : null;

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
                title="Road Trip of the Month"
                article={roadTrip as RoadTripArticle}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Drop-Shot Column */}
            <DropShotColumn 
              title="Drop-Shot Column"
              posts={dropShotPosts as DropShotPost[]}
            />

            {/* Podcast Links */}
            <PodcastLinks 
              title="Podcast Links"
              episodes={[]}
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
                title="Catch of the Week"
                items={catches as Catch[]}
              />
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 flex flex-col gap-8 min-w-0">
              {/* Photo of the Week */}
              <PhotoOfTheWeek 
                title="Photo of the Week"
                photo={photoOfWeek as Photo}
              />

              {/* Video of the Week */}
              <VideoOfTheWeek 
                title="GoPro Video of the Week"
                video={videoOfWeek as Video}
              />
            </div>
          </div>
        </section>

        {/* Tournament & Resources Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Tournament Schedule */}
            <TournamentSchedule 
              title="Tournament Schedule"
              items={tournaments as Tournament[]}
            />

            {/* Guide Registry */}
            <GuideRegistry 
              title="Guide Registry"
              guides={guides as Guide[]}
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
            {/* Fishing Reports */}
            <FishingConditions 
              reports={fishingReports}
              title="Fishing Reports"
              showViewAll={true}
              limit={1}
            />

            {/* Gear Recommendations */}
            <GearRecommendations 
              title="Recommended Gear"
              items={gearItems as GearItem[]}
            />
          </div>
        </section>

        {/* Full-width sections */}
        <div className="space-y-16">
          {/* Wildly Alabama */}
          <WildlyAlabama
            title="Wildly Alabama (Creature Feature)"
            creatures={creatures as Creature[]}
          />

          {/* Important Calendar */}
          <ImportantCalendar
            title="Important Calendar"
            events={calendarEvents as CalendarEvent[]}
          />

          {/* Trash Fish of the Week - moved to bottom */}
          {trashFishEntry && (
            <TrashFishOfTheWeek
              title="Trash Fish of the Week"
              entries={[trashFishEntry] as TrashFishEntry[]}
            />
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer site={site} />
    </div>
  );
}
