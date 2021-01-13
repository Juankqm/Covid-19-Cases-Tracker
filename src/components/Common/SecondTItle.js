import React from "react";
import styled from "styled-components";

const StyledH2 = styled.h2`
color: #535b8b;
font-weight: 700;
font-size: 2.3rem;
text-align: center;
letter-spacing: 5px;
margin:0;
text-transform: uppercase;
  @media screen and ( max-width: 768px){
  font-size: 2rem;
  }
`;
export default function SecondTitle({ children }) {
 
  return <StyledH2>{children}</StyledH2>;
}
