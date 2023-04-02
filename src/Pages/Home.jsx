import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from 'Services/Api';
import MovieList from 'components/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then(movies => setMovies(movies))
      .catch(err => console.log(err.message));
  }, []);

  return (
    <div>
      <ul>{<MovieList movies={movies} />}</ul>
    </div>
  );
};

export default Home;
