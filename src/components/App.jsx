import Home from 'Pages/Home';
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
        <Route path="/Movies" element={<div>Movies</div>} />
      </Routes>
    </div>
  );
};
