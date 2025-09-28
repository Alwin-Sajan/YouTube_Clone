import React from 'react'
import axios from 'axios';

const SugestVideo = async () => {

    const options = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/search',
        params: {
            relatedToVideoId: '7ghhRHRP6t4',
            part: 'id,snippet',
            type: 'video',
            maxResults: '50'
        },
        headers: {
            'x-rapidapi-key': 'cb5ccc3575msh422407a11e19946p10b516jsn8aa77db11589',
            'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }

    
    return (
        <div>
            SugestVideo
        </div>
    )
}

export default SugestVideo