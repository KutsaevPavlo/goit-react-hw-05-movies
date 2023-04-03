import PropTypes from 'prop-types';

import { IMAGE_BASE_URL } from 'Services/Api';
const MoviesInfo = ({ movie }) => {
  const { title, overview, genres = [], poster_path, vote_average } = movie;
  const imgUrl = IMAGE_BASE_URL + poster_path;
  const score = Math.floor(vote_average * 10);
  return (
    <div>
      <img src={imgUrl} alt="" />
      {<h1>{title}</h1>}
      <p>User score: {score}%</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Genres</h2>
      <p>{genres.map(genre => genre.name).join(', ')}</p>
    </div>
  );
};
export default MoviesInfo;

MoviesInfo.propTypes = { movie: PropTypes.object.isRequired };
