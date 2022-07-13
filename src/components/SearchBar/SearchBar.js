import { useLocation, useNavigate } from 'react-router-dom';

export default function SearchBar({ getQuery }) {
  const location = useLocation();
  const navigate = useNavigate();

// console.log(navigate)

  const onSubmitClick = e => {
    e.preventDefault();
    navigate({
      ...location,
      search: `query=${e.target.elements.searchQuery.value}`,
    });
    // getQuery(e.target.elements.searchQuery.value)
    e.target.reset();
  };

//   console.log(location);

  return (
    <form onSubmit={onSubmitClick}>
      <input name="searchQuery"></input>
      <button type="submit">Search</button>
    </form>
  );
}
