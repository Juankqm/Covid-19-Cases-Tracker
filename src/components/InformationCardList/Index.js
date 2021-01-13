import React, {useContext} from 'react';
import './style.css';
//Components
import InformationCard from '../InformationCard/Index';
//Icons
import { FaHeart } from 'react-icons/fa';
import { FaHospitalAlt } from 'react-icons/fa'
import { FaPlusCircle } from 'react-icons/fa'

//Context
import LanguageSelectorContext from '../../context/languageSelectorContext'
const InformationCardList = () => {
	const languageSelector = useContext(LanguageSelectorContext);
	return (
		<section className="card-list">
			<InformationCard title={languageSelector.languageValue.infoCovidSymptomsCardTitle}  icon={<FaPlusCircle className="card-icon" />}>
				<p><span className="span-color">+</span>{languageSelector.languageValue.infoCovidSymptomsCardTextOne}</p>
				<p><span className="span-color">+</span>{languageSelector.languageValue.infoCovidSymptomsCardTextTwo}</p>
				<p><span className="span-color">+</span>{languageSelector.languageValue.infoCovidSymptomsCardTextThree}</p>
			</InformationCard>
			<InformationCard title={languageSelector.languageValue.infoCovidSupportingYourselfCardTitle} icon={<FaHeart className="card-icon" />}>
				<p><span className="span-color">+</span>{languageSelector.languageValue.infoCovidSupportingYourselfCardTextOne}</p>
				<p><span className="span-color">+</span>{languageSelector.languageValue.infoCovidSupportingYourselfCardTextTwo}</p>
				<p><span className="span-color">+</span>{languageSelector.languageValue.infoCovidSupportingYourselfCardTextThree}</p>
			</InformationCard>
			<InformationCard title={languageSelector.languageValue.infoCovidShouldISeeADoctorCardTitle}  icon={<FaHospitalAlt className="card-icon" />}>
				<p><span className="span-color">+</span>{languageSelector.languageValue.infoCovidShouldISeeADoctorCardTextOne}</p>
				<p><span className="span-color">+</span>{languageSelector.languageValue.infoCovidShouldISeeADoctorCardTextTwo}</p>
				<p><span className="span-color">+</span>{languageSelector.languageValue.infoCovidShouldISeeADoctorCardTextThree}</p>			
			</InformationCard>
		</section>
	);
};

export default InformationCardList;
