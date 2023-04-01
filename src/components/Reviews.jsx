import { useParams } from 'react-router-dom';
export const Reviews = () => {
  const { movieId } = useParams();
  return <div>Reviews info {movieId}</div>;
};
