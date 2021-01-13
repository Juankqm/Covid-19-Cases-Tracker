import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  width:100%;
  height:60vh;
  SecondTitle{
      
  }
  .loader {
    border: 11px solid #f3f3f3; 
    border-top: 11px solid #535b8b;
    margin-bottom:1rem;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    animation: spin 2s linear infinite;
  }
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

`;
export default function Loading() {
  return (
    <StyledDiv>
        <div className="loader"/>
    </StyledDiv>
  );
}

