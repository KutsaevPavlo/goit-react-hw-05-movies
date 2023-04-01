import Home from 'Pages/Home';
import Movies from 'Pages/Movies';
import MovieDetails from 'Pages/MovieDetails';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { Cast } from './Cast';
import { Reviews } from './Reviews';
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
