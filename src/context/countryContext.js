import React,{useState, useEffect, createContext} from 'react';
const CountryContext = createContext(null);

export const CountryContextProvider = ({children}) =>{
    const [data, setData] = useState([]);
	const [country, setCountry] = useState('costa-rica');
    const [loading, setLoading] = useState(true);
    const URL_COUNTRY = `https://api.covid19api.com/total/country/${country}`;
    
    useEffect(() => {
		fetch(URL_COUNTRY)
			.then((response) => {
				return response.json();
			})
			.then((info) => {
				setData(info);
				setLoading(false);
			})
			.catch(() => {
				console.log('API reponse failed ');
			});
	}, [URL_COUNTRY]);
    return <CountryContext.Provider value={{data, setData,country, setCountry, loading}}>
        {children}
    </CountryContext.Provider>
}

export default CountryContext