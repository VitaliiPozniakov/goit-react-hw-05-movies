import { useState, useEffect } from "react";
import * as API from '../services/api'
import { useParams } from "react-router-dom";
import ActorsList from "components/ActorsList";

function CastPage () {
const [actors, setActors] = useState(null)
const {movieId} = useParams()

useEffect(()=>{
    async function fetchAndSetDataFromBackend () {
const {cast} = await API.fetchMovieCredits(movieId)
// console.log(cast)
const actorsArray = []
cast.map(({id, name, profile_path}) => {
    const actor = {
      id,
      name,
      photo: profile_path,
    };

    return actorsArray.push(actor);
  })
setActors(actorsArray)
    }

    try {
   
        fetchAndSetDataFromBackend();
    
      
      } catch (err) {
      //   setError(err.message);
      }

},[movieId])

return actors && <ActorsList actors={actors} />;

}

export default CastPage