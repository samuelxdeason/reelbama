import { NextResponse } from 'next/server';
import {
  getCatchesOfTheWeek,
  getFishingReports,
  getTournaments,
  getGuides,
  getDropShotPosts,
  getGearRecommendations,
  getCreatures,
  getCalendarEvents,
} from '../../../sanity/lib/fetch';

export async function GET() {
  try {
    const [
      catches,
      reports,
      tournaments,
      guides,
      dropShot,
      gear,
      creatures,
      events,
    ] = await Promise.all([
      getCatchesOfTheWeek(),
      getFishingReports(),
      getTournaments(),
      getGuides(),
      getDropShotPosts(),
      getGearRecommendations(),
      getCreatures(),
      getCalendarEvents(),
    ]);

    return NextResponse.json({
      status: 'connected',
      contentCounts: {
        catches: catches.length,
        fishingReports: reports.length,
        tournaments: tournaments.length,
        guides: guides.length,
        dropShotPosts: dropShot.length,
        gearRecommendations: gear.length,
        creatures: creatures.length,
        calendarEvents: events.length,
      },
      message: catches.length > 0 
        ? 'Sanity has content! Your site is using Sanity data.' 
        : 'Sanity is empty. Add content in /studio to see it on your site.',
    });
  } catch (error) {
    return NextResponse.json({
      status: 'error',
      error: error instanceof Error ? error.message : 'Unknown error',
      message: 'Could not connect to Sanity. Check your environment variables.',
    }, { status: 500 });
  }
}

