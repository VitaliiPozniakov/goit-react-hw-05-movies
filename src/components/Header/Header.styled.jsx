import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`

`;

export const MyLink = styled(NavLink)`
display: inline-block;
text-decoration: none;
padding: 15px;
color: #2a363b;
  font-size: 15px;
  font-weight: 700;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: #3f51b5;
    text-decoration: underline;s
  }

  &:hover{
      color: #3f51b5;
  }
`;