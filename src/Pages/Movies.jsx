import { Link } from 'react-router-dom';
const Movies = () => {
  return (
    <div>
      <div>
        {['movies-1', 'movies-2', 'movies-3', 'movies-4', 'movies-5'].map(
          movies => {
            return (
              <Link key={movies} to={`${movies}`}>
                {movies}
              </Link>
            );
          }
        )}
      </div>
    </div>
  );
};
export default Movies;
