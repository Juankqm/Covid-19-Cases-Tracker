import React, { useState, createContext } from 'react';
//Langue Selector
import { englishLanguage } from '../settings/englishLanguageSelector';
import { spanishLanguage } from '../settings/spanishLanguageSelector';

const languageSelectorContext = createContext();

export const LanguageSelectorProvider = ({ children }) => {
	const [language, setLanguage] = useState(true);
	let languageValue = {};
	language ? (languageValue = englishLanguage) : (languageValue = spanishLanguage);
	return (
		<languageSelectorContext.Provider value={{ languageValue, language,setLanguage }}>
			{children}
		</languageSelectorContext.Provider>
	);
};
export default languageSelectorContext;
