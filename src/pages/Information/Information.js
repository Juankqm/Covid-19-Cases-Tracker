import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import './style.css';
//Components
import InformationCardList from '../../components/InformationCardList/Index'
//images
import infoImg from '../../assets/Information.svg';
//context
import LanguageSelectorContext from '../../context/languageSelectorContext';

export default function Preventions() {
	const LanguageSelector = useContext(LanguageSelectorContext);
	return (
		<div className="wrapper">
			<div className="hero">
				<div className="hero-text">
					<h1>{LanguageSelector.languageValue.infoTitle}</h1>
					<p>{LanguageSelector.languageValue.infoText}</p>
					<Link to="/stats" type="button">
						{LanguageSelector.languageValue.infoButtonText}
          			</Link>
				</div>
				<div className="hero-img">
					<div></div>
					<img src={infoImg} alt="Information Logo"></img>
				</div>
			</div>
			<InformationCardList id="j"></InformationCardList>
	
		</div>
	);
}
