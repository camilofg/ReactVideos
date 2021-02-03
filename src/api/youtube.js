import axios from 'axios'


const KEY = 'AIzaSyAh0GVqlS8xnEDRF4LXtl8EtydE_zYrtBY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        masResult: 5,
        key: KEY
    }
});

