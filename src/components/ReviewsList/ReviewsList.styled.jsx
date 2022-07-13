import styled from '@emotion/styled';

export const List = styled.ul`

`;

export const Item = styled.li`
&:not(:last-child){
    margin-bottom: 10px;

    border: 1px solid rgba(238, 238, 238, 1);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
`;

export const Title = styled.h2`
text-align: center;
margin-bottom: 5px;
`;

export const Text = styled.p`

`;