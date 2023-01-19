import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import styles from './MoviesList.module.css';

export const MoviesList = ({ moviesData, location }) => {
    return (
        <ul>
            {moviesData.map(({ original_title, name, id, poster_path }) => {
              return (
                  <li key={id}>
                      <Link to={location.pathname === '/' ? `movies/${JSON.stringify(id)}` : JSON.stringify(id)
                      } 
                      state={{ from: location }}
                      >
                        {original_title ? original_title : name}
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