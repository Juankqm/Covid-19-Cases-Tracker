import React, { useContext } from 'react';
import './style.css';
//Components
import CardList from '../../components/Cardlist/index';
import Select from '../../components/Select';
//Context
import CountriesContext from '../../context/countriesContext';
import CountryContext from '../../context/countryContext';
import LanguageSelectorContext from '../../context/languageSelectorContext';

export default function Stats() {
	const countriesData = useContext(CountriesContext);
	const countryData = useContext(CountryContext);
	const languageSelector = useContext(LanguageSelectorContext);

	const handleChange = (e) => {
		countryData.setCountry(e.target.value);
	};
	return (
		<div className="main-container">
			<div className="info-box">
				<p>{languageSelector.languageValue.statsMainTitle}</p>
				<Select
					data={countriesData.countries}
					optionName={languageSelector.languageValue.statsSelectCountry}
					handleChange={handleChange}
				/>
			</div>
			<CardList />
		</div>
	);
}
