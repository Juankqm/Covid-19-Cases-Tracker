import React from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
  font-weight: 700;
  letter-spacing: 0.5rem;
  font-size: 2em;
  color: #535b8b;
  margin-bottom: 1.5rem;
  max-width: 100%;
  text-transform: uppercase;
    @media screen and (min-width: 1000px)
  {
  font-size: 5em;
  }
`;
export default function MainTitle({ children }) {
  return <StyledH1>{children}</StyledH1>;
}
