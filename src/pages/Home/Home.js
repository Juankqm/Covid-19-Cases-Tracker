import React,{useContext} from "react";
import './style.css'
import { Link } from "react-router-dom";
//Components
import MainTittle from "../../components/Common/MainTitle";
import img from "../../assets/medidasPrevencion.svg";
//Context
import languageSelectorContext from '../../context/languageSelectorContext'

export default function Home() {
  const languageValue = useContext(languageSelectorContext)
  return (
    <div className="home-container">
      <div className="text-bg">
        <MainTittle>{languageValue.languageValue.homeTitle}</MainTittle>
        <h3>
          {languageValue.languageValue.homeSubtitleOne}<br/> {languageValue.languageValue.homeSubtitleTwo}
        </h3>
        <div className="btn-box">
            <Link to="/stats" type="button">
            {languageValue.languageValue.homeButton}
          </Link>
        </div>
      </div>
      <div className="bgimg">
        <img src={img} alt="bgImg" />
      </div>
    </div>
  );
}
