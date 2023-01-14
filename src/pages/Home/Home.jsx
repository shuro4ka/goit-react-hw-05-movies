import { useEffect, useState } from 'react';
import { getTrendMovies } from 'service/api';
import { useLocation } from 'react-router-dom';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const Home = props => {
    const [trendMoviesData, setTrendMoviesData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsLoading(true);
        getTrendMovies().then(data => {
            setTrendMoviesData(data);
            setIsLoading(false);
        });
    }, []);

    return (
        <div>
            <h1>Trending</h1>
            
            {isLoading }
            {trendMoviesData && (
                <MoviesList moviesData={trendMoviesData} location={location} />
            )} 
        </div>
    );
};   