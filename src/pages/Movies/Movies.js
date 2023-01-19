import { useMemo } from 'react';
import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { getSearchedMovies } from 'service/api';
import { Searchbar } from 'components/Searchbar/Searchbar';
import styles from './Movies.module.css';

const Movies = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const imageURL = 'https://image.tmdb.org/t/p/w185';


  const onSubmit = e => {
    e.preventDefault();
    const inputValue = e.currentTarget.elements[1].value;
    setSearchParams(inputValue !== '' ? { filter: inputValue } : {});
  };

  const filterParam = searchParams.get('filter') ?? '';

  useEffect(() => {
    if (filterParam === '') {
      setMovies([]);
      return;
    }

    setTimeout(() => {
      getSearchedMovies(filterParam).then(data => {
        setMovies(data.results);
      });
    }, 200);
  }, [filterParam]);

  const visibleMovies = useMemo(() => {
    return movies.filter(
      movie =>
        movie.hasOwnProperty('title') &&
        movie.title.toLowerCase().includes(filterParam.toLowerCase())
    );
  }, [filterParam, movies]);

  return (
    <div className={styles.listContainer}>
      <Searchbar onSubmit={onSubmit} />
      {visibleMovies.length > 0 && (
        <ul className={styles.moviesList}>
          {visibleMovies.map(movie => (
            <li className={styles.listItem} key={movie.id}>
              <nav to={`${movie.id}`} state={{ from: location }}>
                {movie.poster_path ? (
                  <img src={imageURL + movie.poster_path} alt="Poster" />
                ) : (
                  <img
                    className={styles.noImage}
                    src="https://icons.iconarchive.com/icons/icons8/windows-8/512/City-No-Camera-icon.png"
                    alt="No Poster Available"
                  />
                )}

                <h2 className={styles.movieTitle}>{movie.title.length > 13 ? movie.title.slice(0, 13) + '...' : movie.title}</h2>
              </nav>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;
