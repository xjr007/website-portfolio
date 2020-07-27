import React, { Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import { ROUTES } from '../../GlobalVars';

const NavbarNavigation = () => {
	return (
		<Fragment>
			{' '}
			<Navbar collapseOnSelect expand='md' variant='dark' bg='dark' sticky='top'>
				<Navbar.Brand className='ml-2'>
					<strong>Aaqiel Portfolio</strong>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className=' bold_font ml-auto'>
						<LinkContainer to={ROUTES.HOME}>
							<Nav.Link>Home</Nav.Link>
						</LinkContainer>
						<LinkContainer to={ROUTES.TESTIMONIALS}>
							<Nav.Link>Testimonials</Nav.Link>
						</LinkContainer>
						<LinkContainer to={ROUTES.PROJECTS}>
							<Nav.Link>Projects</Nav.Link>
						</LinkContainer>
						<LinkContainer to={ROUTES.RESUME}>
							<Nav.Link>Resume</Nav.Link>
						</LinkContainer>
						<LinkContainer to={ROUTES.CONTACT}>
							<Nav.Link>Contact</Nav.Link>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Fragment>
	);
};

export default NavbarNavigation;
