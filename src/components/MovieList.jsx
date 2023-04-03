import PropTypes from 'prop-types';

import { Link, useLocation } from 'react-router-dom';
const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </div>
  );
};
export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
