import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';


export const BtnGoBack = styled.button`
padding: 5px 10px;
color: black;
background-color: #ffffffff;
font-weight: 700;
font-size: 12px;
line-height: 1.88;
letter-spacing: 0.06em;
border: none;
border-radius: 4px;
border: 1px solid rgba(238, 238, 238, 1);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
width: 135px;
height: 40px;
margin-bottom: 10px;

transition: color, background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

&:hover,
&:focus {
  background-color: #3f51b5;
  color: #ffffffff;
}
  
`;

export const Label = styled.span`

`;

export const MainWrapper = styled.div`
margin-bottom: 10px;
@media (min-width: 768px) {
  display: flex;
  justify-content: space-between;
}

box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

`;

export const Poster = styled.img`
width: 250 px;
@media (min-width: 768px) {
    width: 300px;
    margin-right: 10px;
  }
`;

export const InfoWrapper = styled.div`
margin-bottom: 30px;




`;



export const Title = styled.h2`
font-size: 30px;
color: ;
margin-bottom: 15px;

`;

export const VoteAverage = styled.p`
margin-bottom: 10px;
`;

export const SubTitle = styled.span`
font-size: 15px;
font-weight: 700;
margin-right: 2px;
`;

export const ReleaseDate = styled.p`
margin-bottom: 10px;

`;

export const GenresList = styled.ul`
margin-bottom: 30px;
display: flex;

`;

export const GenresItem = styled.li`
font-weight: 400;
font-size: 15px;
margin-right: 2px;
:last-child {
  margin-right: 0;
}

`;

export const Description = styled.p`
font-size: 15px;
margin-bottom: 50px;

`;





export const AdditionalWrapper = styled.div`
box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  padding: 10px;
`;

export const AdditionalTitle = styled.p`
font-size: 18px;
font-weight: 700;
margin-bottom: 15px;

text-align: center;
`;

export const NavigationsList = styled.ul`
list-style: square;
margin-left: 15px;
`;

export const NavigationsItem = styled.li`
margin-bottom: 15px;
:last-child {
  margin-bottom: 0;
}
`;

export const CustomLink = styled(NavLink)`
display: inline-block;
text-decoration: none;

color: #2a363b;
  font-size: 15px;
  font-weight: 700;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: #3f51b5;
    text-decoration: underline;
  }

  &:hover{
      color: #3f51b5;
  }
`;

