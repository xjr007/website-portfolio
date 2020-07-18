import React, { Fragment } from 'react';
import { MemoryRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
function App() {
	return (
		<Fragment>
			<Router>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/contact-me' component={Contact} />
				</Switch>
			</Router>
		</Fragment>
	);
}

export default App;
