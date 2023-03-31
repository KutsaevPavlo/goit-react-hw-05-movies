import Home from 'Pages/Home';
import Movies from 'Pages/Movies';
import { NavLink, Routes, Route } from 'react-router-dom';
export const App = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Movies">Movies</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route
          path="/movies/:movieId"
          element={<div> Cторінка з детальною інформацією про кінофільм.</div>}
        />

        {/* '/movies/:movieId' */}
      </Routes>
    </div>
  );
};
