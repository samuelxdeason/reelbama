# YouTube Podcast Integration Setup

Your website now automatically pulls the latest episodes from your YouTube playlist!

Playlist: https://www.youtube.com/playlist?list=PLKhPstAakbEfEzGUwKgPXPoBCyBXJPVVq

## Quick Setup (5 minutes)

### Step 1: Get Your FREE YouTube API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (name it "ReelBama" or whatever you like)
3. Click "Enable APIs and Services"
4. Search for "YouTube Data API v3"
5. Click "Enable"
6. Go to "Credentials" in the left sidebar
7. Click "Create Credentials" → "API Key"
8. Copy your API key

**Free Tier Limits:**
- 10,000 requests per day
- Your site will cache results for 1 hour
- Even with 1,000 visitors/day, you'll only use ~24 API calls/day
- You won't hit the limit!

### Step 2: Add API Key to Your Project

1. Create a file named `.env.local` in your project root (same folder as package.json)
2. Add this line:
   ```
   YOUTUBE_API_KEY=your_actual_api_key_here
   ```
3. Save the file

### Step 3: Restart Your Development Server

```bash
npm run dev
```

That's it! Your podcast section will now show the latest episodes from YouTube.

## How It Works

- **API Route**: `/app/api/youtube-episodes/route.ts` fetches the latest 10 videos
- **Component**: `PodcastLinks.tsx` displays them with loading states
- **Caching**: Results are cached for 1 hour to save API quota
- **Fallback**: If API fails, it shows cached episodes from your data file

## Features

✅ Automatic updates - No manual data entry needed  
✅ Shows latest 10 episodes from your playlist  
✅ Beautiful loading skeleton while fetching  
✅ Error handling with fallback to cached data  
✅ Extracts guest names from video titles (if format includes "ft." or "featuring")  
✅ Shows publish dates automatically  
✅ Links directly to YouTube videos  

## Customization

### Change the number of episodes shown

Edit `app/api/youtube-episodes/route.ts`:
```typescript
maxResults=10  // Change to 5, 15, 20, etc.
```

### Change the playlist

Edit `app/api/youtube-episodes/route.ts`:
```typescript
const PLAYLIST_ID = 'YOUR_NEW_PLAYLIST_ID';
```

## Troubleshooting

**"YouTube API key not configured" error:**
- Make sure `.env.local` exists in your project root
- Make sure the variable name is exactly `YOUTUBE_API_KEY`
- Restart your dev server after adding the env file

**No episodes showing:**
- Check browser console for errors
- Verify your API key is correct
- Check the playlist ID matches your YouTube playlist
- Make sure the playlist is public

**Quota exceeded:**
- Very unlikely with normal traffic
- Results are cached for 1 hour
- Free tier allows 10,000 requests/day

## Deployment Notes

When deploying to production (Vercel, Netlify, etc.):

1. Add the `YOUTUBE_API_KEY` environment variable in your hosting platform's settings
2. Don't commit `.env.local` to git (it's already in .gitignore)
3. The API will automatically cache results in production

Enjoy your automated podcast feed! 🎙️🎣

