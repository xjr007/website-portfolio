import React from 'react';
import Card from './CardLayout';
import { COMMENTS } from '../../GlobalVars';
const Cards = () => {
	return (
		<div className='tests'>
			<Card
				header='Testimonial'
				review={COMMENTS.GODWIN}
				title='Godwin Dzvapatsva (Head of Curriculum and Learning)'
			/>
			<Card header='Testimonial' review={COMMENTS.JASON} title='Jason Wandrag (Lecturer)' />
			<Card header='Testimonial' review={COMMENTS.MISCHA} title='Mischa Achmat' />
			<Card header='Testimonial' review={COMMENTS.LUKHANYO} title='Lukhanyo Vakele' />
			<Card header='Testimonial' review={COMMENTS.HISHAAM} title='Hishaam De Vries' />
		</div>
	);
};

export default Cards;
