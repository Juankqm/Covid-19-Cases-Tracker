import React, { createContext, useState, useEffect } from 'react';
import { URL_COUNTRIES } from '../settings/URLS';

const CountriesContext = createContext(null);

export const CountriesContextProvider = ({ children }) => {
	const [countries, setCountries] = useState([{}]);
	
	useEffect(() => {
		fetch(URL_COUNTRIES)
			.then((response) => {
				return response.json();
			})
			.then((info) => {
				setCountries(info);
			})
			.catch(() => {
				console.log('API reponse failed ');
			});
	}, []);
	return <CountriesContext.Provider value={{ countries, setCountries }}>{children}</CountriesContext.Provider>;
};

export default CountriesContext;
