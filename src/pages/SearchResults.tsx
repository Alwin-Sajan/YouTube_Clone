import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';

// Interfaces for YouTube API response
interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

interface Thumbnails {
  default: Thumbnail;
  medium: Thumbnail;
  high: Thumbnail;
}

interface Snippet {
  title: string;
  description: string;
  channelTitle: string;
  thumbnails: Thumbnails;
  publishedAt: string;
}

interface VideoId {
  kind: string;
  videoId?: string;
  channelId?: string;
  playlistId?: string;
}

interface VideoItem {
  id: VideoId;
  snippet: Snippet;
}

interface YouTubeResponse {
  items: VideoItem[];
}

const SearchResults = () => {
  const { query } = useParams<{ query: string }>();
  const [results, setResults] = useState<VideoItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      const options = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/search',
        params: {
          q: query,
          part: 'snippet,id',
          regionCode: 'US',
          maxResults: '25',
          order: 'date'
        },
        headers: {
          'x-rapidapi-key': 'cb5ccc3575msh422407a11e19946p10b516jsn8aa77db11589',
          'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request<YouTubeResponse>(options);
        setResults(response.data.items);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  return (
    <div className='dark:bg-[#0f0f0f] dark:text-[#f1f1f1] w-full min-h-screen'>
      <Navbar />
      <div className='pt-24 px-8'>
        {loading ? (
          <p className="text-center text-lg">Loading...</p>
        ) : (
          <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {results
              .filter((item) => item.id.videoId)
              .map((item) => (
                <Link
                  to={`/watch/${item.id.videoId}/${encodeURIComponent(item.snippet.title)}`}
                  key={item.id.videoId}
                  className='dark:bg-white/10 p-4 rounded-md hover:scale-105 transition'
                >
                  <img
                    src={item.snippet.thumbnails.high.url}
                    alt={item.snippet.title}
                    className='w-full h-auto rounded-md'
                  />
                  <h2 className='mt-2 font-medium'>{item.snippet.title}</h2>
                  <p className='text-sm text-gray-400'>{item.snippet.channelTitle}</p>
                </Link>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
