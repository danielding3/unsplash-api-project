import axios from 'axios';

const ACCESS_KEY = import.meta.env.VITE_API_KEY;

const fetchData = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Accept:'application/json',
        Authorization:`Client-ID ${ACCESS_KEY}`
    }
})

export default fetchData;