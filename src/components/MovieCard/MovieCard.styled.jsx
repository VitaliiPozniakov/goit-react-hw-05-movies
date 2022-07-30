import styled from '@emotion/styled';
import { Link } from 'react-router-dom';


export const Item = styled.li`
@media (max-width: 767px) {
  margin-bottom: 50px;
}
@media (min-width: 768px) {
  display: flex;
  justify-content: center;
  width: calc((100% - 4 * 10px) / 2);
  margin: 10px;
}
@media (min-width: 1440px) {
  width: calc((100% - 6 * 10px) / 3);
}
`;


export const CustomLink = styled(Link)`
display: inline-block;
text-decoration: none;
cursor: pointer;

color: #2a363b;
  font-size: 14px;
  font-weight: 700;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: #3f51b5;

  }

  &:hover{
      color: #3f51b5;
  }
`;

export const Title = styled.p`
font-size: 20px;
font-weight: 700;
text-align: center;
width: 300px;
margin-bottom: 15px;
@media (min-width: 768px) {
  width: 350px;
}
`;

export const Poster = styled.img`
width: 300px;
border-radius: 5px;
margin-bottom: 15px;
@media (min-width: 768px) {
  width: 350px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.01);
    box-shadow: 0px 0px 20px 3px #3f51b5;
}
`;



