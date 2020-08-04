import React, { useEffect } from 'react';
import Cards from '../layout/Cards';
import ContactFooter from '../layout/ContactFooter';
import Navbar from '../layout/Navbar';

const Testimonials = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className='tesimonials'>
			<h1 className='test'>Testimonials</h1>

			<Cards />

			<ContactFooter />
		</div>
	);
};

export default Testimonials;
