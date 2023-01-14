import axios from 'axios';

const API_KEY = '7512b89e15142b7eebf8961a74e5681a';
const BASE_URL = 'https://api.themoviedb.org';

axios.defaults.baseURL = BASE_URL;

export const getTrendMovies = async () => {
    try{
        const response = await axios.get(`/3/trending/all/day?api_key=${API_KEY}`);
        return response.data.results;
    } catch(error) {
        console.log(error); 
    }
};

 export const getMovieById = async (movieId, credits, reviews) => {
    try {
        const response = await axios.get(
            `3/movie/${movieId}${credits ? '/credits' : ''}${
                reviews ? '/reviews' : ''
              }?api_key=${API_KEY}`
            );
            return response.data;
            } catch (error) {
                console.log(error);
    }
    };

export const getSearchedMovies = async query => {
    try {
        const response = await axios.get(
            `3/search/movie?api_key=${API_KEY}&query=${query}`
        );
        return response.data;
    } catch (error){
        console.log(error);
    }
};