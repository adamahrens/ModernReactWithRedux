import axios from 'axios';

// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=Ice%20Nine%20Kills&key=[YOUR_API_KEY]

axios.interceptors.request.use(req => {
    console.log(`${req.method} ${req.url}`);
    return req;
});

axios.interceptors.response.use(res => {
    console.log(res.data.json);
    return res;
});

export default axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        key: `${process.env.REACT_APP_YOUTUBE_API_KEY}`
    }
})