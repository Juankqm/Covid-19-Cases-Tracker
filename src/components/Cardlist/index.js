import React, { useContext } from 'react';
import './styles.css';
//Components
import Loading from '../Loading/index';
import Card from '../Card/index';
import SecondTitle from '../Common/SecondTItle';
//Icons
import { FaRegSadTear } from 'react-icons/fa';
//Context
import CountryContext from '../../context/countryContext';
import LanguageSelectorContext from '../../context/languageSelectorContext';

export default function CardList() {
	const CountryData = useContext(CountryContext);
	const LanguageSelector = useContext(LanguageSelectorContext);

	if (CountryData.loading) return <Loading />;
	return (
		<React.Fragment>
			{CountryData.data.length === 0 ? (
				<div className="errorMessage">
					<FaRegSadTear className="errorIcon" />
					<h5>
						{LanguageSelector.languageValue.statsErrorMessageOne}
						<strong>{CountryData.country}</strong>
						{LanguageSelector.languageValue.statsErrorMessageTwo}
					</h5>
					<h4>{LanguageSelector.languageValue.statsErrorMessageThree}</h4>
				</div>
			) : (
				CountryData.data.map((item, i) => {
					return i === CountryData.data.length - 1 ? (
						<section className="stats-box" key={item.Country}>
							<SecondTitle>{item.Country}</SecondTitle>
							<article className="stats-items">
								<div className="stats-item">
									<Card
										key={item.Confirmed}
										titleCard={LanguageSelector.languageValue.statsConfirmedCases}
										casesNumber={item.Confirmed}
										colorCard="c-card colorCard"
										colorNumberCard="card_content_number"
									/>
								</div>
								<div className="stats-item">
									<Card
										key={item.Active}
										titleCard={LanguageSelector.languageValue.statsActiveCases}
										casesNumber={item.Active}
										colorCard="c-card colorCard"
										colorNumberCard="card_content_number"
									/>
								</div>
								<div className="stats-item">
									<Card
										key={item.Recovered}
										titleCard={LanguageSelector.languageValue.statsRecoveredCases}
										casesNumber={item.Recovered}
										colorCard="c-card colorCard"
										colorNumberCard="card_content_number"
									/>
								</div>
								<div className="stats-item">
									<Card
										key={item.Death}
										titleCard={LanguageSelector.languageValue.statsDeathsCases}
										casesNumber={item.Deaths}
										colorCard="c-card colorCard"
										colorNumberCard="card_content_number"
									/>
								</div>
							</article>
							<h6 className="date">
								{LanguageSelector.languageValue.statsLastUpdate}
								<strong>{item.Date.substr(0,10)}</strong>
							</h6>
						</section>
					) : null;
				})
			)}
		</React.Fragment>
	);
}
