import { useParams, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useRef, Suspense } from 'react';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  return (
    <>
      <Link to={backLinkLocationRef.current}>Back to movie list</Link>
      <h1>MovieDetails: {movieId} </h1>
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
