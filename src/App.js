import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import { ROUTES } from './GlobalVars';
import 'bootstrap/dist/css/bootstrap.min.css';
import Testimonials from './components/pages/Testimonials';
import Projects from './components/pages/Projects';
import Resume from './components/pages/Resume';
import Navbar from './components/layout/Navbar';
import CV from './components/pages/CV';
function App() {
	return (
		<Fragment>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path={ROUTES.HOME} component={Home} />
					<Route exact path={ROUTES.CONTACT} component={Contact} />
					<Route exact path={ROUTES.TESTIMONIALS} component={Testimonials} />
					<Route exact path={ROUTES.PROJECTS} component={Projects} />
					<Route exact path={ROUTES.RESUME} component={CV} />
				</Switch>
			</Router>
		</Fragment>
	);
}

export default App;
