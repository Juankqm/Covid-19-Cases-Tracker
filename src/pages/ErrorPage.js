import React, {useContext} from "react";
import styled from "styled-components";
import MainTitle from "../components/Common/MainTitle";
import StyledButton from "../components/Common/Button";
import {FaRegSadTear} from 'react-icons/fa'
import LanguageSelectorContext from '../context/languageSelectorContext'
const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 86vh;
  .line {
    width: 50%;
    color: red;
    height: 2px;
  }
  p {
    font-size: 1em;
    color: #2e546b;
  }
  .error-icon{
    margin-top:-0.8em;
    color: #2e546b;
    font-size:2em;
  }
`;
export default function ErrorPage() {
  const LanguageSelector = useContext(LanguageSelectorContext)
  return (
    <DivStyled>
      <MainTitle>404</MainTitle>
      <div className="line"></div>
      <FaRegSadTear className="error-icon"/>
      <p>{LanguageSelector.languageValue.errorPageMessage}</p>
     <StyledButton href="/">{LanguageSelector.languageValue.errorPageButton}</StyledButton>
    </DivStyled>
  );
}
