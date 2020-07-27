import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import { ROUTES } from './GlobalVars';
import 'bootstrap/dist/css/bootstrap.min.css';
import Testimonials from './components/pages/Testimonials';
import Projects from './components/pages/Projects';
function App() {
	return (
		<Fragment>
			<Router>
				<Switch>
					<Route exact path={ROUTES.HOME} component={Home} />
					<Route exact path={ROUTES.CONTACT} component={Contact} />
					<Route exact path={ROUTES.TESTIMONIALS} component={Testimonials} />
					<Route exact path={ROUTES.PROJECTS} component={Projects} />
				</Switch>
			</Router>
		</Fragment>
	);
}

export default App;
