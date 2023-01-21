
import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { getSearchedMovies } from 'service/api';
import { Searchbar } from 'components/Searchbar/Searchbar';
import styles from './Movies.module.css';
import { MoviesList } from 'components/MoviesList/MoviesList';


const Movies = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
 

  const onSubmit = e => {
    e.preventDefault();
    const inputValue = e.currentTarget.elements[1].value;
    setSearchParams(inputValue !== '' ? { filter: inputValue } : {});
  };

  const filterParam = searchParams.get('filter') ?? '';

  useEffect(() => {
    if (filterParam === '') {
      setIsLoading(true);
      setMovies([]);
      return;
    }

    setTimeout(() => {
      getSearchedMovies(filterParam).then(data => {
        setMovies(data.results);
      });
    }, 200);
  }, [filterParam]);

  return (
    <div className={styles.listContainer}>
      <Searchbar onSubmit={onSubmit} />
      {isLoading}
      {movies && <MoviesList moviesData={movies} location={location} />}
    </div>
  );
};

export default Movies;
