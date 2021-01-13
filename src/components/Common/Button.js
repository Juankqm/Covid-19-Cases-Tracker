import React from "react";
import styled from "styled-components";
const StyledButton = styled.a`
  background: #11bcca;
  width: 15%;
  text-align: center;
  color:white;
  border-radius: 5px;
  padding: 0.2rem;
  font-weight: 700;
  cursor : pointer;
  text-decoration:none;
  &:hover {
  text-decoration:none;
    background: #535b8b;
    color:white;
  }
  @media screen and (max-width: 768px)
  { 
    width: 32%
  }
`;
export default function Button({ children, href, width }) {
  return <StyledButton href={href}>{children}</StyledButton>;
}
