import React, { useEffect } from 'react';
import Cards from '../layout/Cards';

const Testimonials = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className='tesimonials'>
			<h1 className='test'>Testimonials</h1>

			<Cards />
		</div>
	);
};

export default Testimonials;
