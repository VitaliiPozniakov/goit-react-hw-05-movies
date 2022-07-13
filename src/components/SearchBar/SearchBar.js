import { useLocation, useNavigate } from 'react-router-dom';
import {Wrapper, Input, Btn} from './SearchBar.styled'

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
        <Wrapper>
      <Input name="searchQuery"></Input>
      <Btn type="submit">Search</Btn>
      </Wrapper>
    </form>
  );
}