import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../services/api';
import ReviewsList from 'components/ReviewsList';
import Container from 'components/Container';

function ReviewsPage() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    async function fetchAndSetDataFromBackend() {
      const { results } = await API.fetchMovieReviews(movieId);
      const reviewsArray = [];

      results.map(({ id, author, content }) => {
        const review = {
          id,
          author,
          text: content,
        };

        return reviewsArray.push(review);
      });

      setReviews(reviewsArray);
    }

    try {
      fetchAndSetDataFromBackend();
    } catch (err) {
      //   setError(err.message);
    }
  }, [movieId]);

  return reviews && reviews.length > 0 ? (
    <ReviewsList reviews={reviews} />
  ) : (
    <Container>
      <p>We don't have any reviews for this movie.</p>
    </Container>
  );
}

export default ReviewsPage;
