import { useParams, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useRef, Suspense } from 'react';
import MoviesInfo from 'components/MoviesInfo';
import { useEffect, useState } from 'react';
import { getMovieDetails } from 'Services/Api';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    getMovieDetails(movieId)
      .then(movie => setMovie(movie))
      .catch(err => console.log(err));
  }, [movieId]);

  console.log(movieId);
  console.log(movie);

  return (
    <>
      <Link to={backLinkLocationRef.current}>Back to movie list</Link>
      <MoviesInfo movie={movie} movieId={movieId} />

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews ">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetails;
