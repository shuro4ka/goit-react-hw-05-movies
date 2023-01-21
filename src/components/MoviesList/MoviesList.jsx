import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './MoviesList.module.css';

export const MoviesList = ({ moviesData, location }) => {
  return (
    <ul className={styles.moviesList}>
      {moviesData.map(({ original_title, name, id, poster_path }) => {
        return (
          <li key={id} className={styles.listItem}>
            {poster_path ? (
              <img src={`https://image.tmdb.org/t/p/w400${poster_path}`} alt="Poster" />
              ) : (
              <img
                className={styles.noImage}
                src="https://icons.iconarchive.com/icons/icons8/windows-8/512/City-No-Camera-icon.png"
                alt="No Poster Available"
              />
            )}
            <Link
              to={
                location.pathname === '/'
                  ? `movies/${JSON.stringify(id)}`
                  : JSON.stringify(id)
              }
              state={{ from: location }}
              >
              <h2 className={styles.movieTitle}>{original_title ? original_title : name}</h2>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

MoviesList.propTypes = {
  moviesData: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
};
