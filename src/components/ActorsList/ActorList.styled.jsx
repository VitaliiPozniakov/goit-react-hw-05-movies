import styled from '@emotion/styled';


export const List = styled.ul`
display: flex;
flex-wrap: wrap;
margin: -15px;
`;

export const Item = styled.li`
  
flex-basis: calc((100% - 2 * 30px) / 2);
margin: 11px;

@media screen and (min-width: $tablet) {
  flex-basis: calc((100% - 3 * 30px) / 3);
}

@media screen and (min-width: $desktop) {
  flex-basis: calc((100% - 4 * 30px) / 4);
}




border: 1px solid rgba(238, 238, 238, 1);

border-radius: 4px;
color: #afb1b8;;
transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1);

&:hover,
&:focus {
  color: #3f51b5;
  border-color: #3f51b5;
}

`;

export const PhotoWrapper = styled.div`

`;

export const Photo = styled.img`
margin-bottom: 5px;
`;

export const NameWrapper = styled.div`

`;

export const Name = styled.p`
text-align: center;

`;
