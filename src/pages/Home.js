
import { useEffect, useState } from "react"
import * as API from '../services/api'
import Container from "components/Container"
import MoviesList from "components/MoviesList"


export default function HomePage () {
   
    const [movies, setMovies] = useState(null)
   

useEffect (()=>{

async function fetchAndSetDataFromBackend () {
 const {results} = await API.fetchTrending()
 const moviesArray = []

 results.map(({id, original_title, poster_path, vote_average, vote_count})=>{
     const movie = {
         id,
         title: original_title,
         poster: poster_path,
         voteAverage: vote_average,
         voteCount: vote_count,
       };
       return moviesArray.push(movie);
})

setMovies(moviesArray)
     
}
try {
   
    fetchAndSetDataFromBackend();

  
  } catch (err) {
  //   setError(err.message);
  }
},[])

return (
    movies && (
      <Container>
        <MoviesList movies={movies} />
      </Container>
    )
  );
}