import propTypes from 'prop-types';
import Container from 'components/Container';
import { List, Item, PhotoWrapper, Photo, Name } from './ActorList.styled';

export default function ActorsList ({actors}) {
// console.log(actors)
    return (
        <Container>
          <List>
            {actors.map(({ id, name, photo }) => {
              return (
                <Item key={id}>
                  <PhotoWrapper>
                    <Photo
                      src={
                        photo && `https://image.tmdb.org/t/p/w500/${photo}` 
                      }
                      alt={name}
                    />
                  </PhotoWrapper>
                  <Name>{name}</Name>
                </Item>
              );
            })}
          </List>
        </Container>
      );
}

ActorsList.prototype = {
    actors: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.number,
        name: propTypes.string,
        photo: propTypes.string,
      }),
    ).isRequired,
  };