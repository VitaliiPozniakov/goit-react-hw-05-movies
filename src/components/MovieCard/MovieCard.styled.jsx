import styled from '@emotion/styled';
import { Link } from 'react-router-dom';


export const Item = styled.li`
&:not(:last-child) {
    margin-bottom: 10px;
}
`;


export const CustomLink = styled(Link)`
display: inline-block;
text-decoration: none;

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

export const Title = styled.h2`

`;



