import axios from 'axios';

const api_key = "756d1d5c6aa44583adc4b93941d87765";

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
});

const getGenreList = axiosInstance.get(`/genres?key=${api_key}`)

export default {
    getGenreList,
};
