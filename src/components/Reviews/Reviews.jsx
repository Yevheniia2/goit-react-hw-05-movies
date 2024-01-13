import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getReviews } from './../../Api/Fetch';
import { ReviewsBox} from './Reviews.styled';

const Reviews = () => {
  const [reviewsList, setReviewsList] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getReviews(movieId).then(data => setReviewsList(data.results));
  }, [movieId]);

  return (
    <ReviewsBox>
      {reviewsList.length > 0
        ? reviewsList.map(({ author, content, id }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))
        : "Sorry, we don't have any review for this movie"}
    </ReviewsBox>
  );
};
export default Reviews;