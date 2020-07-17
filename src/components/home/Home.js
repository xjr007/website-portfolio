import React from 'react';
import './Home.css';

const Home = props => {
	return (
		<div>
			<header>
				<div className='heading'>
					<h2>Aaqiel Behardien</h2>
					<p>Junior Web Developer</p>
					<button className='button' type='button'>
						<span>Explore</span>
					</button>
				</div>
			</header>
			<main>
				<h1>Main</h1>
			</main>
			<footer>
				<h1>Footer</h1>
			</footer>
		</div>
	);
};

export default Home;
