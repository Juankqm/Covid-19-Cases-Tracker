import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
//Components
import NavBar from './components/NavBar/index';
import Footer from './components/Footer/index';
//Pages
import Home from './pages/Home/Home';
import Stats from './pages/Stats/Stats';
import Information from './pages/Information/Information';
import ErrorPage from './pages/ErrorPage';
//Context
import { CountriesContextProvider } from './context/countriesContext';
import { CountryContextProvider } from './context/countryContext';
import { LanguageSelectorProvider } from './context/languageSelectorContext';

function App() {
	return (
		<React.Fragment>
			<LanguageSelectorProvider>
				<CountriesContextProvider>
					<CountryContextProvider>
						<Router>
							<header>
								<NavBar />
							</header>
							<Switch>
								<Route exact path="/" component={Home} />
								<Route exact path="/stats" component={Stats} />
								<Route exact path="/information" component={Information} />
								<Route exact component={ErrorPage} />
							</Switch>
							<Footer />
						</Router>
					</CountryContextProvider>
				</CountriesContextProvider>
			</LanguageSelectorProvider>
		</React.Fragment>
	);
}

export default App;
