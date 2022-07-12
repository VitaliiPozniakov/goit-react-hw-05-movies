import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import * as API from '../services/api';
import ReviewsList from 'components/ReviewsList';


function ReviewsPage() {

  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {

async function fetchAndSetDataFromBackend () {
    const {results} = await API.fetchMovieReviews(movieId)
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



  return (
    <>
      {reviews &&   <ReviewsList reviews={reviews} />}

    </>
  );
}

export default ReviewsPage;

