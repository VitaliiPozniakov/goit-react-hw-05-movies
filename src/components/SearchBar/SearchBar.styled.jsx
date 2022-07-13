import styled from '@emotion/styled';

export const Form = styled.div`
display: flex;
align-items: center;

@media screen and (min-width: 768px) {
    width: 700px;
  }
`

export const Input = styled.input`
padding-top: 14px;
padding-bottom: 14px;
padding-left: 20px;
font-weight: 400;
font-size: 16px;
line-height: 1.88;
letter-spacing: 0.06em;
width: 100wh;
min-height: 20px;
border: 1px solid rgba(33, 33, 33, 0.2);
border-radius: 4px;
transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1),
  outline 250ms cubic-bezier(0.4, 0, 0.2, 1);

@media screen and (min-width: 768px) {
  width: 500px;
}

&:hover {
    cursor: pointer;
  }
  
  &:focus-visible {
    border: 1px solid #2196f3;
    outline: none;
  }
  
`;

export const Btn = styled.button`
padding: 5px 32px;
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
width: 150px;
height: 40px;
margin-left: auto ;


transition: color,background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
  background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

&:hover,
&:focus {
background-color: #1e90ff;
color: #ffffffff;
}


`;



