import axios from 'axios';

// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=Ice%20Nine%20Kills&key=[YOUR_API_KEY]

const service = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        key: `${process.env.REACT_APP_YOUTUBE_API_KEY}`
    }
})

service.interceptors.request.use(req => {
    console.log(`${req.method} ${req.url}`);
    return req;
});

service.interceptors.response.use(res => {
    console.log(JSON.stringify(res.data.items));
    return res;
});

export default service