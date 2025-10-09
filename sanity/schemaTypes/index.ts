import { type SchemaTypeDefinition } from 'sanity'

// Original blog schemas
import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'

// ReelBama content schemas
import {catchOfTheWeekType} from './catchOfTheWeek'
import {fishingReportType} from './fishingReport'
import {tournamentType} from './tournament'
import {photoOfTheWeekType} from './photoOfTheWeek'
import {videoOfTheWeekType} from './videoOfTheWeek'
import {guideType} from './guide'
import {dropShotPostType} from './dropShotPost'
import {roadTripType} from './roadTrip'
import {gearRecommendationType} from './gearRecommendation'
import {creatureType} from './creature'
import {calendarEventType} from './calendarEvent'
import {trashFishType} from './trashFish'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Original schemas (can remove later if not needed)
    blockContentType,
    categoryType,
    
    // ReelBama content types
    catchOfTheWeekType,
    fishingReportType,
    tournamentType,
    photoOfTheWeekType,
    videoOfTheWeekType,
    guideType,
    dropShotPostType,
    roadTripType,
    gearRecommendationType,
    creatureType,
    calendarEventType,
    trashFishType,
  ],
}
