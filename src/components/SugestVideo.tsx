import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Define types for the YouTube video response
interface Video {
    id: {
        videoId: string;
    };
    snippet: {
        title: string;
        channelTitle: string;
        thumbnails: {
            high: {
                url: string;
            };
        };
    };
}

interface ApiResponse {
    items: Video[];
}

const SugestVideo: React.FC = () => {
    const [videos, setVideos] = useState<Video[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [loading, setLoading] = useState<boolean>(false);

    const category = [
        "All", "Music", "News", "Dulquer Salmaan", "Tovino Thomas", "AI", "Podcasts", "Computer programming", 
        "Desktop computers", "Trailers", "Apple", "User interface design", "Live", "Gaming", "Malayalam cinema", 
        "Gaming computers", "Feature Phones", "Dramedy", "India national cricket team", "Recently uploaded", "New to you"
    ];

    const fetchVideos = async (category: string) => {
        setLoading(true);
        const options = {
            method: 'GET',
            url: 'https://youtube-v31.p.rapidapi.com/search',
            params: {
                relatedToVideoId: '7ghhRHRP6t4',
                part: 'id,snippet',
                type: 'video',
                maxResults: '50',
                q: category !== 'All' ? category : '', // Filter by category if it's not "All"
            },
            headers: {
                'x-rapidapi-key': 'cb5ccc3575msh422407a11e19946p10b516jsn8aa77db11589', 
                'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
            },
        };

        try {
            const response = await axios.request<ApiResponse>(options);
            setVideos(response.data.items);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchVideos(selectedCategory);
        console.log(videos[0]);
    }, [selectedCategory]);

    return (
        <div className='lg:w-[85%] lg:pl-4 max-md:w-full relative'>
            <ul className='flex gap-4 items-center overflow-x-scroll py-3 z-20 scroll-b px-4 fixed bg-white dark:bg-[#0f0f0f]'>
                {category.map((cat, index) => {
                    return (
                        <li key={index} className='font-medium min-w-fit bg-gray-100 dark:bg-white/10 px-4 py-2 flex items-center rounded-xl'>
                            <button onClick={() => setSelectedCategory(cat)}>
                                {cat}
                            </button>
                        </li>
                    );
                })}
            </ul>

            {/* Loading indicator */}
            {loading && (
                <div className="text-center py-4 text-gray-600">
                    <span>Loading...</span>
                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6 overflow-y-scroll mt-16 scroll-b">
                {videos.length > 0 ? (
                    videos.map((video) => (
                        <div key={video.id.videoId} className="bg-white dark:bg-transparent rounded-lg shadow-lg overflow-hidden">
                            <a href={`/watch/${video.id.videoId}/${video.snippet.title}`} target="" rel="noopener noreferrer">
                            {/* <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="#" rel="noopener noreferrer"> */}
                                <img
                                    src={video.snippet.thumbnails.high.url}
                                    alt={video.snippet.title}
                                    className="w-full h-56 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{video.snippet.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{video.snippet.channelTitle}</p>
                                </div>
                            </a>
                        </div>
                    ))
                ) : (
                    !loading && (
                        <div className="col-span-full text-center text-gray-500">No videos found</div>
                    )
                )}
            </div>
        </div>
    );
};

export default SugestVideo;




            //    headers: {
            //         'x-rapidapi-key': 'cb5ccc3575msh422407a11e19946p10b516jsn8aa77db11589',
            //         'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
            //     },