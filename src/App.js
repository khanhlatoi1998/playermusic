import './App.scss';
import Header from "./Component/Header.js" ; 
import Welcome from "./Component/Welcome.js" ; 
import LastestEpisodes from "./Component/LatestEpisodes.js" ; 
import FeaturedGuests from "./Component/FeaturedGuests.js" ; 
import Footer from "./Component/Footer.js" ; 
import ScrollUp from "./Component/scrollUp.js" ; 
import LinkMusic from "./Component/LinkMusic.js" ; 
import { HashRouter as Router , Route} from 'react-router-dom' ;

function App() {
	
	 
  return (
	<Router>
		<div className="App">
			<Route path="/" exact component={Header} />
			<Route path="/" exact component={Welcome} />
			<Route path="/" exact component={LastestEpisodes} />
			<Route path="/" exact component={FeaturedGuests} />
			<Route path="/" exact component={Footer } />
			<Route path="/" exact component={ScrollUp } />
			<Route path="/" component={LinkMusic} />
		</div>
	</Router>
  );
}

export default App;
