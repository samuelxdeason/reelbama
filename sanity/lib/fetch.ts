import { client } from './client'
import {
  catchOfTheWeekQuery,
  fishingReportsQuery,
  tournamentsQuery,
  photoOfTheWeekQuery,
  latestPhotoQuery,
  videoOfTheWeekQuery,
  latestVideoQuery,
  guidesQuery,
  dropShotPostsQuery,
  roadTripQuery,
  latestRoadTripQuery,
  gearRecommendationsQuery,
  creaturesQuery,
  calendarEventsQuery,
  trashFishQuery,
  latestTrashFishQuery,
} from './queries'

// Fetch functions with fallback to empty data
export async function getCatchesOfTheWeek() {
  try {
    return await client.fetch(catchOfTheWeekQuery, {}, { next: { revalidate: 60 } })
  } catch (error) {
    console.error('Error fetching catches:', error)
    return []
  }
}

export async function getFishingReports(limit?: number) {
  try {
    const query = limit 
      ? `*[_type == "fishingReport"] | order(date desc) [0...${limit}] {
          lake, date, reporter, conditions, waterTemp, clarity, report, catchReport, bestLures
        }`
      : fishingReportsQuery
    return await client.fetch(query, {}, { next: { revalidate: 60 } })
  } catch (error) {
    console.error('Error fetching fishing reports:', error)
    return []
  }
}

export async function getTournaments() {
  try {
    return await client.fetch(tournamentsQuery, {}, { next: { revalidate: 60 } })
  } catch (error) {
    console.error('Error fetching tournaments:', error)
    return []
  }
}

export async function getPhotoOfTheWeek() {
  try {
    let photo = await client.fetch(photoOfTheWeekQuery, {}, { next: { revalidate: 60 } })
    if (!photo) {
      photo = await client.fetch(latestPhotoQuery, {}, { next: { revalidate: 60 } })
    }
    return photo
  } catch (error) {
    console.error('Error fetching photo of the week:', error)
    return null
  }
}

export async function getVideoOfTheWeek() {
  try {
    let video = await client.fetch(videoOfTheWeekQuery, {}, { next: { revalidate: 60 } })
    if (!video) {
      video = await client.fetch(latestVideoQuery, {}, { next: { revalidate: 60 } })
    }
    return video
  } catch (error) {
    console.error('Error fetching video of the week:', error)
    return null
  }
}

export async function getGuides() {
  try {
    return await client.fetch(guidesQuery, {}, { next: { revalidate: 60 } })
  } catch (error) {
    console.error('Error fetching guides:', error)
    return []
  }
}

export async function getDropShotPosts(limit?: number) {
  try {
    const query = limit
      ? `*[_type == "dropShotPost"] | order(publishedDate desc) [0...${limit}] {
          title, author, publishedDate, excerpt, content, featured
        }`
      : dropShotPostsQuery
    return await client.fetch(query, {}, { next: { revalidate: 60 } })
  } catch (error) {
    console.error('Error fetching drop shot posts:', error)
    return []
  }
}

export async function getRoadTrip() {
  try {
    let roadTrip = await client.fetch(roadTripQuery, {}, { next: { revalidate: 60 } })
    if (!roadTrip) {
      roadTrip = await client.fetch(latestRoadTripQuery, {}, { next: { revalidate: 60 } })
    }
    return roadTrip
  } catch (error) {
    console.error('Error fetching road trip:', error)
    return null
  }
}

export async function getGearRecommendations(limit?: number) {
  try {
    const query = limit
      ? `*[_type == "gearRecommendation"] | order(featured desc, _createdAt desc) [0...${limit}] {
          name, category, price, rating, description, "imageUrl": image.asset->url, bestFor, availability, affiliateUrl, featured
        }`
      : gearRecommendationsQuery
    return await client.fetch(query, {}, { next: { revalidate: 60 } })
  } catch (error) {
    console.error('Error fetching gear recommendations:', error)
    return []
  }
}

export async function getCreatures() {
  try {
    return await client.fetch(creaturesQuery, {}, { next: { revalidate: 60 } })
  } catch (error) {
    console.error('Error fetching creatures:', error)
    return []
  }
}

export async function getCalendarEvents() {
  try {
    return await client.fetch(calendarEventsQuery, {}, { next: { revalidate: 60 } })
  } catch (error) {
    console.error('Error fetching calendar events:', error)
    return []
  }
}

export async function getTrashFish() {
  try {
    let trashFish = await client.fetch(trashFishQuery, {}, { next: { revalidate: 60 } })
    if (!trashFish) {
      trashFish = await client.fetch(latestTrashFishQuery, {}, { next: { revalidate: 60 } })
    }
    return trashFish
  } catch (error) {
    console.error('Error fetching trash fish:', error)
    return null
  }
}

// Helper function to convert Sanity block content to plain text/markdown
export function blockContentToText(blocks: unknown[]): string {
  if (!blocks || !Array.isArray(blocks)) return ''
  
  interface BlockChild {
    text?: string;
  }
  
  interface Block {
    _type: string;
    children?: BlockChild[];
  }
  
  return blocks
    .map((block) => {
      const typedBlock = block as Block
      if (typedBlock._type !== 'block' || !typedBlock.children) {
        return ''
      }
      return typedBlock.children.map((child) => child.text || '').join('')
    })
    .join('\n\n')
}

