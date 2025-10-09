import { NextResponse } from 'next/server';

export async function GET() {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
  const PLAYLIST_ID = 'PLKhPstAakbEfEzGUwKgPXPoBCyBXJPVVq';

  if (!YOUTUBE_API_KEY) {
    return NextResponse.json(
      { error: 'YouTube API key not configured' },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${PLAYLIST_ID}&key=${YOUTUBE_API_KEY}`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );

    if (!response.ok) {
      throw new Error('Failed to fetch from YouTube API');
    }

    const data = await response.json();

    interface YouTubePlaylistItem {
      snippet: {
        title: string;
        description: string;
        publishedAt: string;
        resourceId: {
          videoId: string;
        };
        thumbnails: {
          default?: { url: string };
          medium?: { url: string };
          high?: { url: string };
        };
      };
    }

    const episodes = data.items.map((item: YouTubePlaylistItem) => {
      const snippet = item.snippet;
      
      // Get description and truncate if too long
      const fullDescription = snippet.description || 'No description available';
      const description = fullDescription.length > 200 
        ? fullDescription.substring(0, 200) + '...' 
        : fullDescription;

      return {
        title: snippet.title,
        description: description,
        url: `https://www.youtube.com/watch?v=${snippet.resourceId.videoId}`,
        date: new Date(snippet.publishedAt).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        }),
        thumbnail: snippet.thumbnails.medium?.url || snippet.thumbnails.high?.url || snippet.thumbnails.default?.url,
        videoId: snippet.resourceId.videoId
      };
    });

    return NextResponse.json(episodes);
  } catch (error) {
    console.error('Error fetching YouTube playlist:', error);
    return NextResponse.json(
      { error: 'Failed to fetch episodes' },
      { status: 500 }
    );
  }
}
