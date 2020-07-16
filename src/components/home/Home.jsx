import React, { useState, useEffect } from 'react';
import reactIcon from '../../assets/svg/reactIcon.svg';
import javascriptIcon from '../../assets/svg/javascriptIcon.svg';
import { gsap, Bounce, TweenMax, Power2 } from 'gsap';
import './Home.css';

const Home = props => {
	const reactRotate = React.createRef();
	const jsRotate = React.createRef();

	const [isHover, setIsHover] = useState(false);

	const spinIt = () => {
		var duration = 1;
		TweenMax.to(reactRotate, duration / 4, { y: -50, ease: Power2.easeOut });
		TweenMax.to(reactRotate, duration / 2, { y: 0, ease: Bounce.easeOut, delay: duration / 4 });
	};
	return (
		<div>
			<h1>Home</h1>
			<img
				className='box red'
				ref={reactRotate}
				src={reactIcon}
				alt='react logo'
				onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}
			/>
			<img className='box blue' ref={jsRotate} src={javascriptIcon} alt='javascriptIcon' />
			{isHover && spinIt()}
		</div>
	);
};

export default Home;
