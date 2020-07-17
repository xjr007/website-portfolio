import React from 'react';
import './Home.css';

const Home = props => {
	return (
		<div>
			<header>
				<div className='heading'>
					<h1>Aaqiel Behardien</h1>
					<p>Junior Web Developer</p>
					<button className='button' type='button'>
						<span>Explore</span>
					</button>
				</div>
			</header>
			<main>
				<div className='about'>
					<div className='about_heading'>
						<h2>About</h2>{' '}
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi libero ab, commodi veritatis
							perferendis excepturi eius temporibus voluptatum. Iusto, quaerat?
						</p>
					</div>
					<ul className='cards'>
						<li className='card'>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quos ducimus, facilis alias
								quisquam voluptatibus?
							</p>
							<button type='button' className='button'>
								Resume
							</button>
						</li>
						<li className='card'>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quos ducimus, facilis alias
								quisquam voluptatibus?
							</p>
							<button href='/' type='button' className='button'>
								Testimonials
							</button>
						</li>
						<li className='card'>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quos ducimus, facilis alias
								quisquam voluptatibus?
							</p>
							<button href='/' type='button' className='button'>
								Projects
							</button>
						</li>
					</ul>
				</div>
			</main>
			<footer>
				<h1>Footer</h1>
			</footer>
		</div>
	);
};

export default Home;
