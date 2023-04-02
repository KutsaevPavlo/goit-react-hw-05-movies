import { useParams } from 'react-router-dom';
const Reviews = () => {
  const { movieId } = useParams();
  return <div>Reviews info {movieId}</div>;
};
export default Reviews;
