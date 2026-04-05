  // src/lib/youtube.ts
  export type Video = {
    id: string;
    title: string;
    description: string;
    thumbnail?: string;
    publishedAt?: string;
  };

  type YouTubeApiItem = {
    id?: { videoId?: string };
    snippet?: {
      title?: string;
      description?: string;
      thumbnails?: {
        high?: { url: string };
        medium?: { url: string };
      };
      publishedAt?: string;
    };
  };

  type YouTubeApiResponse = {
    items?: YouTubeApiItem[];
  };

  export async function fetchChannelVideos(maxResults = 6): Promise<Video[]> {
    const key = process.env.YOUTUBE_API_KEY;
    const channelId = process.env.YOUTUBE_CHANNEL_ID;
    if (!key || !channelId) {
      throw new Error("Missing YOUTUBE_API_KEY or YOUTUBE_CHANNEL_ID env vars");
    }

    const url = `https://www.googleapis.com/youtube/v3/search?key=${encodeURIComponent(
      key
    )}&channelId=${encodeURIComponent(
      channelId
    )}&part=snippet,id&order=date&maxResults=${maxResults}`;

    const res = await fetch(url, { next: { revalidate: 3600 } }); // cache 1 hour
    if (!res.ok) {
      throw new Error(`YouTube API error: ${res.status}`);
    }

    const body = (await res.json()) as YouTubeApiResponse;
    const items = body.items ?? [];

    const videos: Video[] = items
      .map((it) => {
        const vid = it.id?.videoId;
        if (!vid) return null;
        return {
          id: vid,
          title: it.snippet?.title ?? "Untitled",
          description: it.snippet?.description ?? "",
          thumbnail:
            it.snippet?.thumbnails?.high?.url ??
            it.snippet?.thumbnails?.medium?.url ??
            undefined,
          publishedAt: it.snippet?.publishedAt,
        } as Video;
      })
      .filter(Boolean) as Video[];

    return videos;
  }
