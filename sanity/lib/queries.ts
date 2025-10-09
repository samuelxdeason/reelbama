import { groq } from 'next-sanity'

// Catch of the Week - Get featured or most recent
export const catchOfTheWeekQuery = groq`
  *[_type == "catchOfTheWeek"] | order(dateCaught desc) [0...5] {
    angler,
    fish,
    weightLbs,
    location,
    "photoUrl": photo.asset->url,
    dateCaught,
    featured
  }
`

// Fishing Reports - Get all or limited
export const fishingReportsQuery = groq`
  *[_type == "fishingReport"] | order(date desc) {
    lake,
    date,
    reporter,
    conditions,
    waterTemp,
    clarity,
    report,
    catchReport,
    bestLures
  }
`

// Tournament Schedule - Get upcoming tournaments
export const tournamentsQuery = groq`
  *[_type == "tournament"] | order(date asc) {
    name,
    lake,
    ramp,
    date,
    hours,
    contact,
    verified
  }
`

// Photo of the Week - Get featured
export const photoOfTheWeekQuery = groq`
  *[_type == "photoOfTheWeek" && featured == true][0] {
    caption,
    photographer,
    "url": photo.asset->url,
    weekOf
  }
`

// If no featured photo, get most recent
export const latestPhotoQuery = groq`
  *[_type == "photoOfTheWeek"] | order(weekOf desc) [0] {
    caption,
    photographer,
    "url": photo.asset->url,
    weekOf
  }
`

// Video of the Week - Get featured
export const videoOfTheWeekQuery = groq`
  *[_type == "videoOfTheWeek" && featured == true][0] {
    title,
    creator,
    videoUrl,
    "thumbnail": thumbnail.asset->url,
    weekOf
  }
`

// If no featured video, get most recent
export const latestVideoQuery = groq`
  *[_type == "videoOfTheWeek"] | order(weekOf desc) [0] {
    title,
    creator,
    videoUrl,
    "thumbnail": thumbnail.asset->url,
    weekOf
  }
`

// Fishing Guides - Get all
export const guidesQuery = groq`
  *[_type == "guide" && verified == true] | order(name asc) {
    name,
    region,
    specialty,
    contact,
    phone,
    website,
    bio,
    services,
    tripTypes,
    licensed,
    verified
  }
`

// Drop-Shot Column - Get featured or most recent
export const dropShotPostsQuery = groq`
  *[_type == "dropShotPost"] | order(publishedDate desc) [0...4] {
    title,
    author,
    publishedDate,
    excerpt,
    content,
    featured
  }
`

// Road Trip of the Month - Get featured or most recent
export const roadTripQuery = groq`
  *[_type == "roadTrip" && featured == true][0] {
    title,
    author,
    publishedDate,
    "heroImage": heroImage.asset->url,
    excerpt,
    content
  }
`

// If no featured road trip, get most recent
export const latestRoadTripQuery = groq`
  *[_type == "roadTrip"] | order(publishedDate desc) [0] {
    title,
    author,
    publishedDate,
    "heroImage": heroImage.asset->url,
    excerpt,
    content
  }
`

// Gear Recommendations - Get featured or all
export const gearRecommendationsQuery = groq`
  *[_type == "gearRecommendation"] | order(featured desc, _createdAt desc) {
    name,
    category,
    price,
    rating,
    description,
    "imageUrl": image.asset->url,
    bestFor,
    availability,
    affiliateUrl,
    featured
  }
`

// Wildly Alabama Creatures - Get featured or all
export const creaturesQuery = groq`
  *[_type == "creature"] | order(featured desc, _createdAt desc) {
    name,
    description,
    "imageUrl": image.asset->url,
    featured
  }
`

// Calendar Events - Get upcoming
export const calendarEventsQuery = groq`
  *[_type == "calendarEvent" && date >= now()] | order(date asc) {
    title,
    date,
    location,
    description
  }
`

// Trash Fish of the Week - Get featured or most recent
export const trashFishQuery = groq`
  *[_type == "trashFish" && featured == true][0] {
    offender,
    violation,
    location,
    fine,
    date
  }
`

// If no featured trash fish, get most recent
export const latestTrashFishQuery = groq`
  *[_type == "trashFish"] | order(date desc) [0] {
    offender,
    violation,
    location,
    fine,
    date
  }
`

