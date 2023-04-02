import { getMovieReviews } from 'Services/Api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId)
      .then(movie => setReviews(movie))
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <p>{author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <b>NO reviews!</b>
      )}
    </div>
  );
};
export default Reviews;
