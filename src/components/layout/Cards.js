import React from 'react';
import Card from './CardLayout';
import { COMMENTS } from '../../GlobalVars';
const Cards = () => {
	return (
		<div className='tests'>
			<Card
				header='Godwin Dzvapatsva '
				review={COMMENTS.GODWIN}
				title='(Head of Curriculum and Learning)'
			/>
			<Card header='Jason Wandrag ' review={COMMENTS.JASON} title='(Lecturer)' />
			<Card header='Mischa Achmat' review={COMMENTS.MISCHA} title='(Colleague)' />
			<Card header='Lukhanyo Vakele' review={COMMENTS.LUKHANYO} title='(Colleague)' />
			<Card header='Hishaam De Vries' review={COMMENTS.HISHAAM} title='(Colleague)' />
		</div>
	);
};

export default Cards;
