import axios from 'axios';

const BASE_URL = 'https://ytstream-download-youtube-videos.p.rapidapi.com'

const options = {
    method: 'GET',
    url: BASE_URL,
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'ytstream-download-youtube-videos.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/dl?id=${url}`, options);
    return data;
}